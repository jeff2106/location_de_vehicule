import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, Dimensions, TouchableOpacity, CheckBox} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Reparationcard from './reparationcard'
import Homeicon from './iconhome';
import AntIcon from "react-native-vector-icons/AntDesign";
import MapView from 'react-native-maps';

//Donnee//

export default function AnalyseDesInfos({navigation}) {
    const [isSelected, setSelection] = useState(false);

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
             <Text style={styles.textHeader}>Analyse des infos  </Text>   
         </View>
          <View style={styles.body}>
                <View style={styles.imageGara}>
                    <Image
                    source={require('../Images/car-accident.png')}
                    
                    />
                </View>
                
            <View style={styles.date}>
                  <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  />
                  <Text style={{marginTop:9,fontSize:10}}>J'accepte les termes et les conditions</Text>
                  
            </View>
            <View style={styles.imageGara}>
                  <View style={styles.RechStart}>
                      <Text style={{color:"white", textAlign:"center"}}>LANCER LA RECHERCHE</Text>    
                  </View>
            </View>
            
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
    paddingTop:30
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
