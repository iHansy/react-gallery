import React, { Component } from 'react'; //importing react with component ability

class GalleryItem extends Component {

    


    render() {
        return (
            <img src={this.props.picture.path} onClick={(event) => this.props.showDescription(this.props.picture.description)} />
        )
    }
}

export default GalleryItem; //exporting to GalleryList.jsx