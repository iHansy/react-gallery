import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; //importing component

class GalleryList extends Component {
    render() {
        return (
            <>
                {this.props.galleryList.map((picture) => {
                    return (
                        <GalleryItem 
                        key={picture.id} 
                        picture={picture}
                        showDescription={this.props.showDescription}
                        addLike={this.props.addLike}
                        />
                    )
                })}
            </>
        )
    }
}

export default GalleryList; //exporting to app.js