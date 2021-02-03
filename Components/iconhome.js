import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , FlatList , ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Homeicon() {
  return (
      <View>
        <Icon 
        style={styles.iconcardUser}
                    name="user-o"
                    size={25} 
                    color="white" 
                    />
      </View>
  );
}

const styles = StyleSheet.create({
    iconcardUser:{
        marginLeft:5,
        marginBottom:10
      }
})