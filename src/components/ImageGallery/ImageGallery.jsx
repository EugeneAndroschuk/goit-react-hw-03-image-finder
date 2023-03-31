import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import fetchImages from '../../functions/fetchImages.js';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.querySearch !== this.props.querySearch ||
      prevProps.pageSearch !== this.props.pageSearch
    ) {
      this.props.onShowLoader(true);
      this.props.onShowButton(false);
      const response = fetchImages({
        searchQuery: this.props.querySearch,
        page: this.props.pageSearch,
      });
      response.then(obj => {
        this.props.onShowLoader(false);
        this.props.onShowButton(true);
        if (prevProps.querySearch === this.props.querySearch)
          this.setState(prevState => ({
            images: [...prevState.images, ...obj.data.hits],
          }));
        else this.setState({ images: [...obj.data.hits] });
        if (obj.data.hits.length > 0) this.props.onShowButton(true);
        else if (obj.data.hits.length === 0) this.props.onShowButton(false);
      });
    }

    if (this.props.pageSearch !== 1) window.scrollBy(0, window.innerHeight);
      // window.scrollBy({
      //   top: window.innerHeight,
      //   behavior: 'smooth',
      // });
  }

  setActiveIndexImage = index => {
    this.props.setLargeImageURL(this.state.images[index].largeImageURL);
  };

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.state.images.length > 0 &&
          this.state.images.map((image, index) => (
            <li
              className={css.ImageGalleryItem}
              key={image.id}
              onClick={() => this.setActiveIndexImage(index)}
            >
              <ImageGalleryItem webformatURL={image.webformatURL} />
            </li>
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
