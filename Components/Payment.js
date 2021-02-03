// Components/Notification.js
import { CheckBox } from 'react-native-elements'
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Payment extends React.Component {
  render() {
      const data = this.props.data
    return (
      <View style={styles.main_container}>
            <Image
            source={data.Image}
            style={styles.Images}
            />
            <CheckBox
            title='Click Here'
            checked={this.state.checked}
            />

            <CheckBox
            center
            title='Click Here'
            checked={this.state.checked}
            />
                            
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})

export default Payment