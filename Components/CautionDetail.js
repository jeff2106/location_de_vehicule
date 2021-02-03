import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import FlatlistCaution from './FlatlistCaution'
import { DataNavigation } from 'react-data-navigation';

//Donnee//
export default function CautionDetail({ route, navigation }) {
    const { Reparation1,
        Reparation2,
        Reparation3,
        Reparation4,
        Reparation5,
        garage,
        id,
        Reception,
        Caution,
        FraisDetravaux,
        Livraison } = route.params;
        const mood = [
          "moi","toi"
        ]
        
        DataNavigation.setData('name', mood);
      return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
             <Text style={styles.textHeader}>Réparer ma voiture</Text>   
         </View>
          <View style={styles.body}>
              <View style={styles.tickethead}>
                  <Text style={styles.reparationText}>Réparation n˚{id} </Text>
                  <Text style={styles.garageText}>Pris en charge par : {garage} </Text>
                  <Text style={styles.garageText}>    Date de réception :   {Reception} </Text>
            </View>
            <View style={styles.tickethead}>
                  <Text style={{fontSize:18}}>Caution </Text>
                  <Text style={styles.garageText}>Les frais de caution serviront a l'achat d'equipements indispensables pour les reparations.</Text>
                  <FlatlistCaution/>

            </View>
          </View>
          </ScrollView>
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
    padding:20,
    paddingTop:30
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
    color:"white",
    fontWeight:"bold"
  },
  startRepText:{
    color:"white"
  },
  textHeader:{
      textAlign:"center",
      color:"white",
      marginBottom:10,
      fontSize:15,
      fontWeight:"bold"
  },
  reparationText:{
    fontSize:20,
    color:"#127762"
  },
  tickethead:{
    padding:20,
    backgroundColor:"white",
    width:"100%",
    borderRadius:10,
    marginBottom:20
  },
  containerTable: { 
    flex: 1,
    padding: 16,
    paddingTop: 30, 
    backgroundColor: '#fff' 
    },
  head: 
  { height: 40, 
    backgroundColor: '#f1f8ff'
 },
  text: { margin: 6 }

});
