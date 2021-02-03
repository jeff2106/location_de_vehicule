import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Modal,StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, Dimensions, TouchableOpacity, CheckBox} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Reparationcard from './reparationcard'
import Homeicon from './iconhome';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";
import * as MediaLibrary from 'expo-media-library';

//Donnee//
const CameraModule = (props) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isSelected, setSelection] = useState(false);
  
  
return (
   <Modal
     animationType="slide"
     transparent={true}
     visible={true}
     onRequestClose={() => {
       props.setModalVisible();
     }}
   >
     <Camera
       style={{ flex: 1 }}
       ratio="16:9"
       flashMode={Camera.Constants.FlashMode.off}
       type={type}
       ref={(ref) => {
         setCameraRef(ref);
       }}
     >
       <View
         style={{
           flex: 1,
           backgroundColor: "transparent",
           justifyContent: "flex-end",
         }}
       >
         <View
           style={{
             backgroundColor: "black",
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "space-between",
           }}
         >
           <Button
             icon="close"
             style={{ marginLeft: 12 }}
             mode="outlined"
             color="white"
             onPress={() => {
             props.setModalVisible();
             }}
           >
             Close
           </Button>
          <TouchableOpacity
             onPress={async () => {
               if (cameraRef) {
                 let photo = await cameraRef.takePictureAsync();
                 console.log('photo', photo);
                 await MediaLibrary.saveToLibraryAsync(photo.uri);
                 props.setImage(photo);
                 props.setModalVisible();
               }
             }}
           >
             <View
               style={{
                 borderWidth: 2,
                 borderRadius: 50,
                 borderColor: "white",
                 height: 50,
                 width: 50,
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 marginBottom: 16,
                 marginTop: 16,
               }}
             >
               <View
                 style={{
                   borderWidth: 2,
                   borderRadius: 50,
                   borderColor: "white",
                   height: 40,
                   width: 40,
                   backgroundColor: "white",
                 }}
               ></View>
             </View>
           </TouchableOpacity>
      <Button
             icon="axis-z-rotate-clockwise"
             style={{ marginRight: 12 }}
             mode="outlined"
             color="white"
             onPress={() => {
               setType(
                 type === Camera.Constants.Type.back
                   ? Camera.Constants.Type.front
                   : Camera.Constants.Type.back
               );
             }}
           >
          {type === Camera.Constants.Type.back ? "Front" : "Back "}
           </Button>
         </View>
       </View>
     </Camera>
   </Modal>
 );
 
};

export default function ReparerUneVoiture({navigation}) {
  const [image, setImage] = useState(null);
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  let ConditionDepanneuse;
  let LancerSearch;
  let title;
  if(image){
    ConditionDepanneuse = <View style={styles.date}>
                  <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  />
                  <Text style={{marginTop:9,fontSize:10}}>Jaccepte les termes et les conditions</Text>
                  
            </View>;
    
    LancerSearch = <View style={styles.imageGara}>
                  <View style={styles.RechStart}>
                      <Text style={{color:"white", textAlign:"center"}}>LANCER LA RECHERCHE</Text>    
                  </View>
            </View>
            ;
    title = <Text style={styles.textHeader}>Réparer ma voiture  </Text>   
         
  }

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <View style={styles.headerBar}>
                    <Feather 
                        name="arrow-left"
                        color="white"
                        size={25}
                        style={styles.chevron_left}
                        onPress={() => navigation.goBack()}
                        />
                    <Text style={styles.retour} onPress={() => navigation.goBack()}>Retour</Text>
                    <Image
                            source={require('../Images/003-rent-a-car.png')}
                            style={styles.ProfilIcon}
                            />
                    <Text style={styles.textheader}>Louez et réparer une voiture </Text>
             </View>
             {title}
             </View>
          <View style={styles.body}>
            <Image
            source={require('../Images/car-accident.png')}
            
            />
            
            <TouchableOpacity style={styles.iconpluscircleo}
            onPress={() => {
              setShowCamera(true);
            }}>
                <AntIcon 
                name="pluscircleo"
                color="black"onPress={() => {
          setShowCamera(true);
        }}
                size={35}
                />
                <Text style={styles.Iconpluscircleo}>
                Cliquez sur ajouter une photo 
                </Text>
            </TouchableOpacity>
                {camera && (
            <CameraModule
              showModal={camera}
              setModalVisible={() => setShowCamera(false)}
              setImage={(result) => setImage(result.uri)}
            />
          )}

          {ConditionDepanneuse}
          {LancerSearch}

          <Text onPress={() => navigation.navigate('Maps')}>SKIP</Text>
          </View>
          <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.bodyIcon}>
                    <Fontisto 
                    name="home"
                    size={30} 
                    color="white" 
                    style={styles.iconHome}/>
                    <Text style={styles.textIcon}>Accueil</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.bodyIcon}>
                    <Icon 
                    name="notifications-outline"
                    size={35} 
                    color="white"
                    style={styles.iconcardNotif}
                    />
                    <Text style={styles.textIcon}>Notifications</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.bodyIcon}>
                    <Fontisto 
                    name="hipchat"
                    size={30} 
                    color="white"
                    style={styles.iconcardHipchat} />
                    <Text style={styles.textIcon}>Chat</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.bodyIcon}>
                <Homeicon/>
                    <Text style={styles.textIcon}>Profil</Text>
                </TouchableOpacity >
          </View>
          <StatusBar style="auto" />
      
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F7",
    marginTop: Constants.statusBarHeight,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  header:{
    backgroundColor:'#127762',
    borderBottomStartRadius:19,
    borderBottomEndRadius:19
  },
  headerBar:{
    width:"100%",
    height:70,
    padding:10,
    backgroundColor:'#127762',
    borderBottomStartRadius:19,
    borderBottomEndRadius:19,
    flexDirection:"row"
  },
  body:{
    padding:10,
    paddingTop:30,
    justifyContent:"center",
    alignItems:"center",
  },
  iconpluscircleo:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  }
  ,
  chevron_left:{
  marginTop:10,
  marginRight:10
  },
  retour:{
    color:"white",
    marginTop:12,
    flex:1
  },
  ProfilIcon:{
    marginTop:2,
    marginRight:5
  },
  textheader:{
    marginTop:10,
    color:"white",
    fontWeight:"bold"
  },
  footer:{
    backgroundColor:"#127762",
    height:70,
    borderRadius:20,
    flexDirection:"row",
    position:"absolute",
    bottom:0,
    width:"95%",
    margin:10,
    paddingLeft:"0%",
    paddingRight:"10%"
  },
  textIcon:{
    color:"white",
  },
  bodyIcon:{
    marginLeft:"10%",
    marginTop:10,
    
  },
  iconHome:{
    marginLeft:10,
    marginBottom:5
  },
  iconcardHipchat :{
    marginLeft:0,
    marginBottom:5
  },
  iconcardNotif:{
    marginLeft:20,
    marginBottom:0,
    marginTop:-2
  },
  textHeader:{
      textAlign:"center",
      color:"white",
      marginBottom:10,
      fontSize:15,
      fontWeight:"bold"
  },
  Iconpluscircleo:{
      fontSize:10,
      marginTop:5
  },
  date:{
      flexDirection:"row"
  },
  imageGara:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:30
  },
  RechStart:{
  justifyContent:"center",
  alignItems:"center",
  marginBottom:30,
  backgroundColor:"#043D42",
  width:"50%"
  }


});
