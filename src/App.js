import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  programming: [
    {
      name: "Eloquent JavaScript",
      rating: "9.0",
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/I/51InjRPaF7L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
      desc:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."
    },
    {
      name: "Python Programming",
      rating: "7.0",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/51Ss-7j3v5L._SX362_BO1,204,203,200_.jpg",
      desc:
        "Python programmers are paid high salaries in the software development industry. Hence, it is time for beginners as well as existing programmers to focus their attention on Python."
    },
    {
      name: "You Don't Know JS",
      rating: "8.0",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/51llKt2oJEL._SX333_BO1,204,203,200_.jpg",
      desc:
        'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. The "You Don’t Know JS" is a series of books which explores JavaScript types in greater depth'
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "9",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41VUs-509HL._SX327_BO1,204,203,200_.jpg",
      desc:
        "It's a trilogy about the land of Meluha ruled by Suryavanshis who are fighting against Chandravanshis & the Nagas and how an unlikely hero Shiva emerged to save them."
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      rating: "9",
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/I/5160dwNeqSL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      desc:
        "Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here."
    },
    {
      name: "Goosebumps",
      rating: "4.9",
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/I/510MH1VDTJL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      desc:
        "Amanda and Josh think the old house they have just moved into is weird, spooky, possibly haunted but their parents do not believe them. You'll get used to it, they say. Go out and make some new friends. So Amanda and Josh do but these new friends are not exactly what their parents had in their mind because they wanted to be friends, forever."
    }
  ],
  Science: [
    {
      name: "Theory of Relativity",
      rating: "10",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/511FSHKuqmL._SX338_BO1,204,203,200_.jpg",
      desc:
        "Albert Einstein is the unquestioned founder of modern physics. His theory of relativity is the most important scientific idea of the modern era. In this book Einstein explains, using the minimum of mathematical terms, the basic ideas and principles of the theory which has shaped the world we live in today. Unsurpassed by any subsequent books on relativity, this remains the most popular and useful exposition of Einstein’s immense contribution to human knowledge."
    },
    {
      name: "Astrophysics for People in a Hurry",
      rating: "9",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg",
      desc:
        "The essential universe, from our most celebrated and beloved astrophysicist. What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There’s no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson."
    },
    {
      name: "The Theory of Everything",
      rating: "9",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg",
      desc:
        "Seven lectures by the brilliant theoretical physicist have been compiled into this book to try to explain to the common man, the complex problems of mathematics and the question that has been gripped everyone all for centuries, the theory of existence."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("programming");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  let getClassByRating = rating => {
    if (rating > 7.5) {
      return "green";
    } else if (rating > 6 && rating < 7.5) {
      return "orange";
    } else {
      return "red";
    }
  }
  
  return (
    <div className="App">
      <main id="main">
        <h1>
          Goodbooks <span>📚</span>
        </h1>
        <div className="buttons">
          <p>Choose Genre:</p>
          {Object.keys(bookDB).map((genre) => (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          ))}
        </div>
        <div className="books">
          {bookDB[selectedGenre].map((book) => (
            <div className="book">
              <img src={book.imgSrc} alt="book cover page" />
              <div className="book-info">
                <h3> {book.name} </h3>
                <span className={getClassByRating(book.rating)}>
                  {book.rating}/10
                </span>
              </div>
              <div className="overview">
                <h3>Synopsis</h3>
                <p>{book.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
