import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Notification from './Notification';
import Homeicon from './iconhome'
//Donnee//
const data = [
  {
     id:181808,
     title:"Boot",
     description:"Vous avez de nouvelles suggestions de reservations",
     date_release:"16:30",
     Image: require('../Images/button2.png')
    

  },
  {
     id:181809,
     title:"Mark la Fourche",
     description:"Mark la Fourche veut rentrer en contact avec vous",
     date_release:"18:20",
     Image: require('../Images/button1.png')
  }
]

export default function Acceuil({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>

              <Feather 
                  name="arrow-left"
                  color="white"
                  size={25}
                  style={styles.chevron_left}
                  />
              <Text style={styles.retour}>Retour</Text>
              <Image
                    source={require('../Images/003-rent-a-car.png')}
                    style={styles.ProfilIcon}
                    />
              <Text style={styles.textheader}>Louez et réparer une voitures </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.voirPlus}>Voir plus</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Notification data ={item}/>}
            />
            <Text style={styles.Quefaisonsvous}>Que faisons nous ?</Text>
            </View>
            <View style={styles.body}>
            <View style={styles.maincard}>
                <TouchableOpacity>
                  <View style={styles.bodyCard}>
                    <Image
                    source={require('../Images/001-car-key.png')}
                    style={styles.ImagesCard} />
                    <Text style={styles.textCard}>Louer une {"\n"} voiture</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ReparerUneVoiture')}>
                  <View style={styles.bodyCard}>
                    <Image
                    source={require('../Images/003-car-repair-1.png')}
                    style={styles.ImagesCard} />
                    <Text style={styles.textCard}>Réparer une {"\n"} voiture</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <View style={styles.bodyCard}>
                    <Image
                    source={require('../Images/002-car-repair.png')}
                    style={styles.ImagesCard} />
                    <Text style={styles.textCard}>Mes {"\n"} Voitures</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.bodyCard}>
                    <Image
                    source={require('../Images/fill.png')}
                    style={styles.ImagesCard} />
                    <Text style={styles.textCard}>Ajouter un {"\n"} emplacement</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Reparation')}>
                  <View style={styles.bodyCard}>
                    <Image
                    source={require('../Images/004-garage-owner.png')}
                    style={styles.ImagesCard} />
                    <Text style={styles.textCard}>Les garagistes </Text>
                  </View>
                </TouchableOpacity>
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
    backgroundColor: "#298471",
    marginTop: Constants.statusBarHeight,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    },
  header:{
    width:"100%",
    height:70,
    padding:10,
    backgroundColor:'#127762',
    borderBottomStartRadius:19,
    borderBottomEndRadius:19,
    flexDirection:"row"
  },
  voirPlus:{
    textAlign:"right",
    marginBottom:10,
    color:"white"
  },
  body:{
    padding:10
  },
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
    color:"white"
  },
  Quefaisonsvous:{
    fontSize:22,
    color:"white",
    marginTop:15
  },
  maincard:{
    flexWrap:"wrap",
    flexDirection:"row"
  },
  bodyCard:{
    backgroundColor:"white",
    margin:10,
    height:"42%",
    borderRadius:10,
    width:"90%"
  },
  textCard:{
    textAlign:"center",
    marginTop:5,
    margin:5,
    fontSize:12
  },
  ImagesCard:{
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:10
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
    marginTop:10
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

});
