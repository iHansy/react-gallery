import React, { Component } from 'react'; //importing react with component ability

class GalleryItem extends Component {

    state = {
        onPicture: true
    }

    //click and change state.onPicture to the oppisite !
    toggleDescription = () => {
        this.setState({
            //! saying opposite, changing true to false vice versa
            onPicture: !this.state.onPicture
        })
    }


    render() {
        return (
            <div>
                {this.state.onPicture ? <img src={this.props.picture.path} onClick={this.toggleDescription}/> 
                : <p onClick={this.toggleDescription}>{this.props.picture.description}</p>}
            </div>
        )
    }
}

export default GalleryItem; //exporting to GalleryList.jsx