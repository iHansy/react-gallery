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
            <>
                <div className="mainPictures">
                    {this.state.onPicture ? <img src={this.props.picture.path} alt="" onClick={this.toggleDescription} />
                    : <div className="descriptionDiv" onClick={this.toggleDescription}><p className="description">{this.props.picture.description}</p></div>}
                    <div className="flexy">
                        <button className="likeBtn" onClick={(event) => this.props.addLike(this.props.picture)}>Like Photo</button>
                        <p className="likePTag">Likes: {this.props.picture.likes}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default GalleryItem; //exporting to GalleryList.jsx