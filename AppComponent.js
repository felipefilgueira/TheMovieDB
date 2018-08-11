import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, Button } from 'react-native';

import Movies from './src/shared/movies'
import axios from "axios";


export default class App extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Add"
              color="blue"
            />
          ),
    }

  state = {
    pageNumber: 1,
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
    this.getMovies()
  }

  getMovies() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=8ec3b0b33a80b4c7bf2e85c2e24e98cf&page=${this.state.pageNumber}`;
    axios.get(url).then(response => {

      var actualMovies = this.state.movies;
      var movesConcatenated =
        actualMovies.concat(response.data.results)

        this.setState({
          movies: movesConcatenated,
          loading: false
        });

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
            title={"Go to Page 2"}
            onPress={() => this.props.navigation.navigate("Page2", {id: 10})}
        />
        <View style={styles.header}>
          <Image
            style={styles.menuImage}
            source={{
              uri:
                'https://21thirteen.com/wp-content/uploads/2016/03/hamburger-menu.jpg',
            }}
          />
          <Image
            style={styles.menuImage}
            source={{
              uri:
                'https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/1e/80/3f/1e803f98-e9a6-6eab-2cb5-bc32638417c1/source/512x512bb.jpg',
            }}
          />

          <Image
            style={styles.userImage}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM_3OPEI1fK0t0qxiUhYZrWBN9Q2A5bDTPo8EolLkObjpWC-E',
            }}
          />
        </View>
        <View style={styles.search}>
          <TextInput style={styles.boxInput} placeholder="Search" />
        </View>
        <View style={styles.titlePage}>
          <Text style={styles.titlesPageText}> Filmes Populares </Text>
        </View>

        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => this.getMovieTemplate(item)}
          keyExtractor={(item, index) => item.id.toString()}
          onEndReached={() => {
            this.setState({
              pageNumber: this.state.pageNumber + 1
            }, () => {this.getMovies()})
          }}
        />
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
