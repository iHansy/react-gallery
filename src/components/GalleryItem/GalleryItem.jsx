import React, { Component } from 'react'; //importing react with component ability

class GalleryItem extends Component {

    


    render() {
        return (
            <img src={this.props.picture.path} />
        )
    }
}

export default GalleryItem; //exporting to GalleryList.jsx