import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import SearchForm from '../SearchForm/SearchForm';
import * as imageAPI from '../../services/Image-api';
import Modal from '../Modal/Modal';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    search: 'car',
    isModalOpen: false,
    checkedImageId: null,
  };

  componentDidMount() {
    const { currentPage, search } = this.state;
    imageAPI
      .fetchImages(currentPage, search)
      .then(response => {
        this.setState({ images: [...response.data.hits] });
      })
      .catch(err => this.setState({ err }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, search } = this.state;

    if (prevState.search !== search) {
      imageAPI
        .fetchImages(currentPage, search)
        .then(response => {
          this.setState({ images: [...response.data.hits] });
        })
        .catch(err => this.setState({ err }));
    }

    if (
      prevState.currentPage !== currentPage &&
      prevState.currentPage < currentPage
    ) {
      imageAPI
        .fetchImages(currentPage, search)
        .then(response => {
          this.setState(state => ({
            images: [...state.images, ...response.data.hits],
          }));
        })
        .catch(err => this.setState({ err }))
        .finally(() => {
          window.scrollTo({
            top: 1000,
            behavior: 'smooth',
          });
        });
    }
  }

  fetchImages = query => {
    this.setState({
      currentPage: 1,
      search: query,
    });
  };

  handleLoadMore = () => {
    this.setState(state => ({
      currentPage: state.currentPage + 1,
    }));
  };

  openModal = id => {
    this.setState({
      checkedImageId: id,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isModalOpen, checkedImageId } = this.state;
    const checkedImage = images.find(image => image.id === checkedImageId);
    return (
      <div className={styles.App}>
        <SearchForm onSubmit={this.fetchImages} />
        <Gallery images={images} onOpenModal={this.openModal} />
        <button
          type="button"
          className={styles.button}
          onClick={this.handleLoadMore}
        >
          Load More
        </button>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={checkedImage.largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
