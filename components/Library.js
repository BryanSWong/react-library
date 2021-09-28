import React, { Component } from 'react';

import Book from '../components/Book';
import Button from '../components/Button';

import catalog from '../assets/catalog';
import genres from '../assets/genres';

class Library extends Component {
  render() {
    const genreFilter = (genreType) => {
      return catalog.filter((book) => {
        return book.genre === genreType;
      });
    };

    return (
      <div>
        {genres.map(({ id: genreId, genre }) => {
          return (
            <div key={genreId}>
              <h2>{genre}</h2>
              {genreFilter(genre).map((book) => {
                return (
                  <div key={book.id}>
                    <Book
                      key={book.id}
                      thumb={book.thumb}
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      checkout={book.checkout}
                    />
                    <Button buttonType='Checkout' />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Library;
