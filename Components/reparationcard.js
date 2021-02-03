// Components/Notification.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

class Reparationcard extends React.Component {
  render() {
    const { detailData, displayDetailForFilm } = this.props
    
    return (
      <View style={styles.main_container}>
                <Text style={styles.title_text}>Réparation n˚{detailData.id}</Text>
                <Text><Text style={styles.sous_text}>Pris en charge par:   </Text>{detailData.garage}  </Text>
                <Text style={styles.hours_text}>{detailData.date_release}</Text>
                <Text style={styles.sous_text}>{detailData.nmbreaction  }</Text>
                <View style={styles.statut}>
                  <Text style={styles.statuts}>Statut:</Text> 
                  <View style={styles.statut_text}>
                    <Text style={styles.textstatut} >{detailData.statut}</Text>
                  </View>
                </View>
                        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
      backgroundColor:"#FFFFFF",
      marginBottom:10,
      borderRadius:14,
      padding:15
    
  },
  title_text: {
      fontSize:20,
      color:"#127762"

  },
  sous_text: {
    color:"#127762",
    marginTop:5

},
   description_text:{
      fontSize:12
   },
  hours_text:{
      marginRight:13,
      marginTop:6,
      textAlign:"left",
  },
  statut_text:{
    backgroundColor:"#F49C17",
    padding:5,
    borderRadius: 50
  },
  statut:{
    flexDirection:"row",
    marginTop:10
  },
  textstatut:{
    fontSize:12,
    color:"white",
    marginLeft:5,
    marginRight:5
  },
  statuts:{
    marginTop:2,
    marginRight:10
  }
})

export default Reparationcard