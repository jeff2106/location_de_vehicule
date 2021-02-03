import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
   
export default function FlatlistCaution({ route, navigation }) {
    
const tableHead = ['Désignation', 'Qte', 'Prix/(FCFA)'];
const tableData = [
  ['...', '...', '...'],
  ['...', '...', '...'],
];

return (
  <View>
    <Table>
      <Row data={tableHead} style={styles.head} textStyle={styles.textHeader}/>
      <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
    </Table>
    <View style={styles.totales}>
      <Text style={{flex:2}}> Total</Text>
      <Text style={{flex:1}}>....</Text>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
head: { height: 40},
text: { marginLeft: 5 },
textHeader: { marginLeft: 5 , 
color:"#127762"},
row: { height: 30 },
totales:{
  flexDirection:"row"
}
})
