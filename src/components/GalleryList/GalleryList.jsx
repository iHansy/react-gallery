import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //importing component

class GalleryList extends Component {
    render() {
        return (
            <>
                <p>GalleryList</p>
                <GalleryItem />
            </>
        )
    }
}

export default GalleryList; //exporting to app.js