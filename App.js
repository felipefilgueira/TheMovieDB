import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';

import Movies from './src/shared/movies'
import axios from "axios";


export default class App extends React.Component {
  
  state = {
    movies: [],
    loading: true
  }
  
  getMovieTemplate(movie) {
     return (
       <Movies
        movie={movie}
      />
     )
   }

  componentDidMount() {
    let url= "https://api.themoviedb.org/3/movie/popular?api_key=8ec3b0b33a80b4c7bf2e85c2e24e98cf";
    axios.get(url).then(response => {
      setTimeout(() => {
        this.setState({
          movies: response.data.results,
          loading: false
        })
      },1000)

    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.imageMenu}
            resizeMode={"cover"}
            source={{ uri: 'https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg' }}
          />
          <Image
            style={styles.imageMenu}
            resizeMode={"cover"}
            source={{ uri: 'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg' }}
          />
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.boxInput}
            placeholder='Search'
          >
          </TextInput>
        </View>


        {this.state.loading 
        ? <Text style={{}}>Loading...</Text>
        : 
        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => this.getMovieTemplate(item)}
          keyExtractor={(item, index) => item.id.toString()}
        />
      }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 18,
  },
  header: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 8,
    flexDirection: 'row',
  },
  imageMenu: {
    width: 35,
    height: 35,

  },
  search: {

  },
  boxInput: {

    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#DDD',
    height: 40,
    width: '100%',
  },



});
