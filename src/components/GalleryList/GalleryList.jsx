import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //importing component

class GalleryList extends Component {
    render() {
        return (
            <>
                {this.props.galleryList.map((picture) => {
                    return (
                        <GalleryItem key={picture.id} picture={picture}/>
                    )
                })}
            </>
        )
    }
}

export default GalleryList; //exporting to app.js