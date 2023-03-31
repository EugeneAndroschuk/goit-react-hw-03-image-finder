import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    search: '',
    page: 1,
    isOpenModal: false,
    largeImageURL: null,
    isLoaderVisible: false,
    isButtonVisible: false,
  };

  handleSearch = search => {
    this.setState({ search, page: 1 });
  };

  onClickLoadMore = pageValue => {
    this.setState({ page: pageValue });
  };

  setLargeImageURL = url => {
    this.setState({ largeImageURL: url });
    this.setState({ isOpenModal: true });
  };

  onCloseModalEsc = () => {
    this.setState({ isOpenModal: false });
  };

  onShowLoader = bool => {
    this.setState({ isLoaderVisible: bool });
  };

  onShowButton = (bool) => {
    this.setState({ isButtonVisible: bool});
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar querySearchInSearchbar={this.handleSearch} />
        <ImageGallery
          querySearch={this.state.search}
          pageSearch={this.state.page}
          setLargeImageURL={this.setLargeImageURL}
          onShowLoader={this.onShowLoader}
          onShowButton={this.onShowButton}
        />
        {this.state.isLoaderVisible && <Loader />}
        {this.state.isButtonVisible && (
          <Button
            onClickLoadMore={this.onClickLoadMore}
            page={this.state.page}
          />
        )}
        {this.state.isOpenModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onCloseModalEsc={this.onCloseModalEsc}
          />
        )}
      </div>
    );
  }
}

export default App;
