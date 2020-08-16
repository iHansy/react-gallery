import React, { Component } from 'react';
import axios from 'axios'; //importing axios
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'; //importing component

class App extends Component {

  state = {
    galleryList: [] //empty array for list of photos to go in
  }

  //loading galleryList on first page load
  componentDidMount() {
    this.getGalleryList();
  }

  //axios request to get galleryList items from mock server
  getGalleryList = () => {
    //sending request to axios
    axios.get('/gallery')
    .then((response) => {
      console.log(response.data); //testing to see data
      //changing state
      this.setState({
        galleryList: response.data //where response data lives
      })
    })
    .catch((error) => { //error from server
      alert(`Couldn't get gallery list. Try again later.`);
      console.log('Error getting gallery list', error);
    })
  }








  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList galleryList={this.state.galleryList}/>
        <footer>
          <p>Thanks for checking out my gallery!</p>
        </footer>
      </div>
    );
  }
}

export default App;
