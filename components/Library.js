import React, { Component } from "react";
import Book from "../components/Book";
import Button from "../components/Button";
import catalog from "../assets/catalog";

class Library extends Component {
  render() {
    const genreFilter = (genreType) => {
      return catalog.filter((book) => {
        return book.genre === genreType;
      });
    };

    const fiction = "Fiction";
    const history = "History";
    const mystery = "Mystery";
    const scienceFiction = "Science Fiction";
    const sports = "Sports";

    return (
      <div id="showcase">
        <h2>Fiction</h2>
        {genreFilter(fiction).map((item) => {
          return (
            <div key={item.id} >
            <Book
              thumb={item.thumb}
              title={item.title}
              author={item.author}
              genre={item.genre}
              checkout={item.checkout}
            ></Book>
            <Button checkout={item.checkout}/>
            </div>
            
          );
        })}
        <h2>History</h2>
        {genreFilter(history).map((item) => {
          return (
            <Book
              key={item.id}
              thumb={item.thumb}
              title={item.title}
              author={item.author}
              genre={item.genre}
              checkout={item.checkout}
            ></Book>
          );
        })}
        <h2>Mystery</h2>
        {genreFilter(mystery).map((item) => {
          return (
            <Book
              key={item.id}
              thumb={item.thumb}
              title={item.title}
              author={item.author}
              genre={item.genre}
              checkout={item.checkout}
            ></Book>
          );
        })}
        <h2>Science Fiction</h2>
        {genreFilter(scienceFiction).map((item) => {
          return (
            <Book
              key={item.id}
              thumb={item.thumb}
              title={item.title}
              author={item.author}
              genre={item.genre}
              checkout={item.checkout}
            ></Book>
          );
        })}
        <h2>Sports</h2>
        {genreFilter(sports).map((item) => {
          return (
            <Book
              key={item.id}
              thumb={item.thumb}
              title={item.title}
              author={item.author}
              genre={item.genre}
              checkout={item.checkout}
            ></Book>
          );
        })}
      </div>
    );
  }
}

export default Library;
