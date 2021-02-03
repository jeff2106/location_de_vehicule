// Components/Notification.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Notification extends React.Component {
  render() {
      const data = this.props.data
    return (
      <View style={styles.main_container}>
            <Image
            source={data.Image}
            style={styles.Images}
            />
            <View style={{flex:2}}>

                 <Text style={styles.title_text}>{data.title}</Text> 
                  <Text numberOfLines={2} style={styles.description_text}>{data.description}</Text> 
            </View>

            <Text style={styles.hours_text}>{data.date_release}</Text>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
      height: 70,
      flexDirection:"row",
      backgroundColor:"#FFFFFF",
      marginBottom:10,
      borderRadius:14,
      paddingTop:10,
      paddingLeft:10,
    
  },
  title_text: {
      fontWeight:"bold",
      marginTop:5

  },
   description_text:{
      fontSize:12
   },
  hours_text:{
      marginRight:13,
      marginTop:6,
      fontWeight:"bold",
      textAlign:"left",
  },
  Images:{
      width:50,
      height:50,
      marginRight:10
  }
})

export default Notification