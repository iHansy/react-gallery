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
  } //end compdidmount

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
  } //end getGalleryList

  //adding like count when like button clicked
  addLike = (picture) => {
    console.log('adding like...');
    let likeCount = picture.likes; //assigning likeCount variable
    likeCount++;
    console.log(likeCount);

    //put request to axios
    axios.put(`/gallery/like/${picture.id}`, {likes: likeCount}) 
      .then((response) => {
        this.getGalleryList(); //reloading DOM with axios updated list
      }).catch((error) => {
        alert(`Couldn't update like count!`); //alert if error adding to database
        console.log('Error updating like count', error);
      })
  } //end addLike



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hans Accola's Gallery</h1>
        </header>
        <br/>
        <GalleryList 
        galleryList={this.state.galleryList}
        showDescription={this.showDescription} //sending functionality to grandchild
        addLike={this.addLike}
        />
        <footer>
          <p>Thanks for checking out my gallery!</p>
        </footer>
      </div>
    );
  }
}

export default App;
