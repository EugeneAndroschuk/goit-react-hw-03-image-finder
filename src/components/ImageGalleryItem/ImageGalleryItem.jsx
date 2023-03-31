import React, { Component } from 'react'
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {};

  

  render() {
    return (
      <>
        <img
          className={css['ImageGalleryItem-image']}
          src={this.props.webformatURL}
          alt=""
        />
      </>
    );
  }
}

export default ImageGalleryItem;