import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Test extends React.Component {
  render() {
      const marker = this.props.marker
    return (
      <View>
                 <Text>{marker.description}</Text> 
        </View>
    )
  }
}


export default Test