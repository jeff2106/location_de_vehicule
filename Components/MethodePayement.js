import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView, Dimensions, TouchableOpacity, TextInput, CheckBox} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import React, { useState } from 'react';
import Payment from './Payment';
//Donnee//

export default function MethodePayement({ route, navigation }) {
    const { sousTotal,
            Total } = route.params;
            const [toggleCheckBox, setToggleCheckBox] = useState(false)
            const [isSelected, setSelection] = useState(false);
            const valider = "OUI"
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
                <Text style={{color:"black"}}> Methode de payement {"\n"}</Text>
                <View style={styles.methodestyle}>
                    <CircleCheckBox
                    checked={true}
                    onToggle={(checked) => console.log('My state is: ', checked)}
                                        
                    />
                    <Image
                    style={styles.checkbox}
                    source={require('../Images/Group.png')}
                    />
                </View>

                <View style={styles.methodestyle}>
                    <CircleCheckBox
                    checked={useState.checked}
                    onToggle={(checked) => console.log('My state is: ', checked)}
                                        
                    />
                    <Image
                    style={styles.checkbox}
                    source={require('../Images/mastercard-2.png')}
                    />
                </View>

                <View style={styles.methodestyle}>
                    <CircleCheckBox
                    checked={false}
                    onToggle={(checked) => console.log('My state is: ', checked)}
                                        
                    />
                    <Image
                    style={styles.checkbox}
                    source={require('../Images/paypal-icon.png')}
                    />
                </View>

                <View style={styles.methodestyle}>
                    <CircleCheckBox
                    checked={false}
                    onToggle={(checked) => console.log('My state is: ', checked)}
                                        
                    />
                    <Image
                    style={styles.checkbox}
                    source={require('../Images/google-icon.png')}
                    />
                </View>
                     
                <Text>Informations de la carte</Text>

                <TextInput placeholder="Nom de la carte" style={styles.Input}/>
                <TextInput placeholder="Numero de la carte" style={styles.Input} keyboardType={'numeric'} />

                <Text>Date d'expiration (MM/YY)</Text>
                <View style={styles.date}>
                    <TextInput placeholder="MM" style={styles.Input} keyboardType={'numeric'}/>
                    <TextInput placeholder="YY" style={styles.Input} keyboardType={'numeric'}   />
                </View>
                <View style={styles.date}>
                  <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  />
                  <Text style={{marginTop:9,fontSize:10}}>J'accepte les termes et les conditions</Text>
                </View>
                <Text style={{fontWeight:"bold"}}>{"\n"}Promotion Code</Text>
                <Text>{"\n"}Sous total {sousTotal}</Text>
                <Text>{"\n"}Sous total <Text style={{fontWeight:"bold"}}>{Total}</Text> {"\n"}{"\n"}</Text>
              
              </View>
            
          </View>
          </ScrollView>
          <View style={styles.footerFlexDirection}>
                <TouchableOpacity style={styles.footer}>
                    <Text style={styles.startRepText1}
                    onPress={() => navigation.goBack()}>
                        Annulez
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footer2}
                onPress={() => navigation.navigate('ReparationDetail',{
                  valider
                    })}>
                    <Text style={styles.startRepText}>
                        OK
                    </Text>
                </TouchableOpacity>
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

  tickethead:{
    padding:20,
    backgroundColor:"white",
    width:"100%",
    borderRadius:10,
    marginBottom:20
  },
  head: 
  { height: 40, 
    backgroundColor: '#f1f8ff'
 },
  text: { margin: 6 },

  footer:{
    height:50,
    borderRadius:30,
    width:"50%",
    margin:10,
    right:0,
    paddingTop:13,
  },
  footer2:{
    backgroundColor:"#127762",
    height:50,
    borderRadius:30,
    width:"40%",
    margin:10,
    right:0,
    paddingTop:13,
  },
  footerFlexDirection:{
    flexDirection:"row",
    position:"absolute",
    bottom:0,
  },
  startRepText1:{
      color:'black',
      textAlign:"center"
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
  methodestyle:{
      flexDirection:"row",
      marginBottom:10
  },
  checkbox:{
      marginLeft:20
  },
  Input:{
      height:40,
      marginBottom:15,
      padding:10
  },
  date:{
      flexDirection:"row"
  }
});
