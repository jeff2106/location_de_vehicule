import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



//Donnee//

export default function ReparationDetail({ route, navigation }) {
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
          Livraison,
          sousTotal,
          Total ,
          valider} = route.params;
          let AlreadyStart;
          let footer;
    if (valider == "OUI"){
      AlreadyStart = <View style={styles.tickethead}>
      <Text style={{fontSize:18}}>Durée du travail </Text>
      <Text style={styles.garageText}>Date de réception : {Reception} </Text>
      <Text style={styles.garageText}>Date de livraison :   {Livraison} {"\n"}</Text>
      <Text style={{fontSize:18}}>Réparation a effectuer {"\n"} </Text>
      <View style={styles.iconTextRecu}>
        <Icon 
          name="check-circle-o"
          size={20} 
          color="#127762"
          />
          <Text style={styles.textreparationIcon}>{Reparation1}</Text>
      </View>
      <View style={styles.iconTextRecu}>
        <Icon 
          name="check-circle-o"
          size={20} 
          color="#127762"
          />
          <Text style={styles.textreparationIcon}>{Reparation2}</Text>
      </View>
      <View style={styles.iconTextRecu}>
        <Icon 
          name="check-circle-o"
          size={20} 
          color="#F49C17"
          />
          <Text style={styles.textreparationIcon}>{Reparation3}</Text>
      </View>
      <View style={styles.iconTextRecu}>
        <Icon 
          name="check-circle-o"
          size={20} 
          color="black"
          />
          <Text style={styles.textreparationIcon}>{Reparation4}</Text>
      </View>
      <View style={styles.iconTextRecu}>
        <Icon 
          name="check-circle-o"
          size={20} 
          color="black"
          />
          <Text style={styles.textreparationIcon}>{Reparation5}</Text>
      </View>
      <Text style={{fontSize:18}}>{"\n"}Caution</Text>
      <View style={styles.iconTextRecu}>
        <Text style={{flex:2}}>{Caution}</Text>
        <Text style={{flex:1,textAlign:"right"}} 
        onPress={() => navigation.navigate('CautionDetail',{
          Reparation1,
          Reparation2,
          Reparation3,
          Reparation4,
          Reparation5,
          garage,
          id,
          Reception,
          Caution,
          FraisDetravaux,
          Livraison
          })}>Détails</Text>
      </View>
      <Text style={{fontSize:18}}>Frais de {AlreadyStart}travaux</Text>
      <View style={styles.iconTextRecu}>
        <Text style={{flex:2}}>{FraisDetravaux}</Text>
        <Text style={{flex:1,textAlign:"right"}}
        onPress={() => navigation.navigate('FraisTravauxDetail',{
          Reparation1,
          Reparation2,
          Reparation3,
          Reparation4,
          Reparation5,
          garage,
          id,
          Reception,
          Caution,
          FraisDetravaux,
          Livraison
          })}>Détails</Text>
      </View>
      </View>;
      footer = <TouchableOpacity style={styles.footerStop}
      onPress={() => navigation.navigate('MethodePayement',{
        sousTotal,
        Total
        })}>
          <Text style={styles.startRepText}>
            Arreter les reparations
          </Text>
      </TouchableOpacity>;
    }else{
      AlreadyStart = <View style={styles.tickethead}>
                  <Text style={{fontSize:18}}>Durée du travail </Text>
                  <Text style={styles.garageText}>Date de réception : {Reception} </Text>
                  <Text style={styles.garageText}>Date de livraison :   {Livraison} {"\n"}</Text>
                  <Text style={{fontSize:18}}>Réparation a effectuer {"\n"} </Text>
                  <View style={styles.iconTextRecu}>
                    <Icon 
                      name="check-circle-o"
                      size={20} 
                      color="black"
                      />
                      <Text style={styles.textreparationIcon}>{Reparation1}</Text>
                  </View>
                  <View style={styles.iconTextRecu}>
                    <Icon 
                      name="check-circle-o"
                      size={20} 
                      color="black"
                      />
                      <Text style={styles.textreparationIcon}>{Reparation2}</Text>
                  </View>
                  <View style={styles.iconTextRecu}>
                    <Icon 
                      name="check-circle-o"
                      size={20} 
                      color="black"
                      />
                      <Text style={styles.textreparationIcon}>{Reparation3}</Text>
                  </View>
                  <View style={styles.iconTextRecu}>
                    <Icon 
                      name="check-circle-o"
                      size={20} 
                      color="black"
                      />
                      <Text style={styles.textreparationIcon}>{Reparation4}</Text>
                  </View>
                  <View style={styles.iconTextRecu}>
                    <Icon 
                      name="check-circle-o"
                      size={20} 
                      color="black"
                      />
                      <Text style={styles.textreparationIcon}>{Reparation5}</Text>
                  </View>
                  <Text style={{fontSize:18}}>{"\n"}Caution</Text>
                  <View style={styles.iconTextRecu}>
                    <Text style={{flex:2}}>{Caution}</Text>
                    <Text style={{flex:1,textAlign:"right"}} 
                    onPress={() => navigation.navigate('CautionDetail',{
                      Reparation1,
                      Reparation2,
                      Reparation3,
                      Reparation4,
                      Reparation5,
                      garage,
                      id,
                      Reception,
                      Caution,
                      FraisDetravaux,
                      Livraison
                      })}>Détails</Text>
                  </View>
                  <Text style={{fontSize:18}}>Frais de {AlreadyStart}travaux</Text>
                  <View style={styles.iconTextRecu}>
                    <Text style={{flex:2}}>{FraisDetravaux}</Text>
                    <Text style={{flex:1,textAlign:"right"}}
                    onPress={() => navigation.navigate('FraisTravauxDetail',{
                      Reparation1,
                      Reparation2,
                      Reparation3,
                      Reparation4,
                      Reparation5,
                      garage,
                      id,
                      Reception,
                      Caution,
                      FraisDetravaux,
                      Livraison
                      })}>Détails</Text>
                  </View>
                  </View>;
    footer = <TouchableOpacity style={styles.footer}
    onPress={() => navigation.navigate('MethodePayement',{
      sousTotal,
      Total
      })}>
        <Text style={styles.startRepText}>
          Démarrer les reparations
        </Text>
    </TouchableOpacity>
    }
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
                  {AlreadyStart}
                  
          </View>
          </ScrollView>
          { footer }
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
    height:50,
    borderRadius:30,
    position:"absolute",
    bottom:0,
    width:"55%",
    margin:10,
    right:0,
    paddingTop:13,
  },
  footerStop:{
    backgroundColor:"#FF7171",
    height:50,
    borderRadius:30,
    position:"absolute",
    bottom:0,
    width:"55%",
    margin:10,
    right:0,
    paddingTop:13,
  },
  startRepText:{
    color:"white",
    textAlign:"center"
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
  iconTextRecu:{
    flexDirection:"row",
    width:"100%",
    marginTop:5,
    marginBottom:5

  },
  textreparationIcon:{
    width:"100%",
  }


});
