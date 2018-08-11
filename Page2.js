import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, Button } from 'react-native';

import Movies from './src/shared/movies'
import axios from "axios";


export default class Page2 extends React.Component {

    static navigationOptions = {
        title: 'Home',
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> TESTEEE  {this.props.navigation.getParam("id",0)} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  boxInput: {

    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#DDD',
    height: 40,
    width: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: 'black',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  menuImage: {
    height: 45,
    width: 45,
  },
  userImage: {
    height: 40,
    width: 40,
  },
  boxInput: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#DDD',
    height: 40,
    width: '100%',
  },
  titlePage: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  titlesPageText: {
    fontWeight: 'bold',
    fontSize: 18,
  },


});
