import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //importing component

class GalleryList extends Component {
    render() {
        return (
            <>
                <p>GalleryList</p>
                <GalleryItem />
                {this.props.galleryList.map((picture) => {
                    return (
                        <GalleryItem key={picture.id}/>
                    )
                })}
            </>
        )
    }
}

export default GalleryList; //exporting to app.js