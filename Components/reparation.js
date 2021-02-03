import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Reparationcard from './reparationcard'
import Homeicon from './iconhome';
import AntIcon from "react-native-vector-icons/AntDesign";

//Donnee//
const detailData = [
  {
     id:'001',
     description:"Vous avez de nouvelles suggestions de reservations",
     date_release:"05-11-2020",
     statut:"En attente de confirmation",
     nmbreaction:"05 réparation en attentes",
     garage:"Garage auto-repair",
     Reparation1:" Reparation par brise ",
     Reparation2:" Changer les portes avant gauche et droite",
     Reparation3:" Remplacer les calandres",
     Reparation4:" Acheter deux retroviseurs",
     Reparation5:" Remettre la peinture",
     Caution:" 50.000CFA",
     FraisDetravaux:" 296.300CFA",
     Reception:"05-11-2020",
     Livraison:"20-11-2020",
     sousTotal:"$5000,00",
     Total:"$5009,99"    

    }
]




export default function Reparation({navigation}) {
    

  const lenght = detailData.length;
  let Flatlisst;
  let Icone;
  let TextIcone;
  if(lenght > 0){
      Flatlisst = <FlatList
      data={detailData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) =>  <TouchableOpacity
      underlayColor= 'transparent'
      onPress= {() => navigation.navigate('ReparationDetail', item)}><Reparationcard detailData ={item} /></TouchableOpacity>}
  
  />;
      Icone=<AntIcon 
      name="pluscircleo"
      color="#707070"
      size={35}
      />;
      TextIcone= "Cliquez ici pour ajouter une photo";
  }else{
      Icone=<AntIcon 
      name="minuscircleo"
      color="#707070"
      size={35}
      />;
      TextIcone= "Aucune réparation en cours ou en attente";
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
             <Text style={styles.textHeader}>Réparer ma voiture  </Text>   
         </View>
          <View style={styles.body}>
            { Flatlisst }
            
            <TouchableOpacity style={styles.iconpluscircleo}>
                {Icone}
                <Text style={styles.Iconpluscircleo}>
                { TextIcone}
                </Text>
            </TouchableOpacity>
            
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
  }

});
