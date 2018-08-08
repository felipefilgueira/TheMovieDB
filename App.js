import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';

import Movies from './src/shared/movies'
import axios from "axios";


export default class App extends React.Component {
  getMovieTemplate(movie) {
    return (
      <Movies
        movie={movie}
      />
    )
  }

  componentDidMount() {
    let url= "https://api.themoviedb.org/3/movie/popular?api_key=8ec3b0b33a80b4c7bf2e85c2e24e98cf";
    axios.get(url).then((reponse) => {
      console.log(response)
    })
  }

  render() {
    var movies = [{
      id: 1,
      title: 'Vingadores: Guerra Infinita',
      date: 'June 22, 2018',
      imagePerc: 'http://www.curtisdecora.info/uploads/6/8/9/6/68969693/5042194_orig.png',
      imageFilm: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg',
    },
    {
      id: 2,
      title: 'Vingadores: Guerra Infinita',
      date: 'June 22, 2018',
      imagePerc: 'http://www.curtisdecora.info/uploads/6/8/9/6/68969693/5042194_orig.png',
      imageFilm: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg',
    }]
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

        <FlatList
          data={movies}
          renderItem={({ item }) => this.getMovieTemplate(item)}
          keyExtractor={(item, index) => item.id.toString()}
        />

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
