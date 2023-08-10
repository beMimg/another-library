const openFormBtn = document.getElementById("openFormBtn");
const form = document.getElementById("form");
const libraryContainer = document.getElementById("libraryContainer");

openFormBtn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "flex";
    openFormBtn.innerHTML = '<img src="img/minus-circle.svg" />';
  } else {
    form.style.display = "none";
    openFormBtn.innerHTML = '<img src="img/plus-circle.svg" />';
  }
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getBookInfo();
  form.reset();
  form.style.display = "none";
  openFormBtn.innerHTML = '<img src="img/plus-circle.svg" />';
});

function getBookInfo() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  library.createBook(title, author, pages, read);
}

class Library {
  constructor() {
    this.books = [];
  }

  createBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
    this.display();
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleReadStatus(index) {
    this.books[index].read = !this.books[index].read;
  }

  display() {
    libraryContainer.innerHTML = "";
    this.books.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.setAttribute("class", "book-card");

      const leftSide = document.createElement("div");
      leftSide.setAttribute("id", "leftSide");

      const cardTitle = document.createElement("p");
      cardTitle.setAttribute("id", "cardTitle");
      cardTitle.innerHTML = `Title: ${book.title}`;

      const cardAuthor = document.createElement("p");
      cardAuthor.setAttribute("id", "cardAuthor");
      cardAuthor.innerHTML = `Author: ${book.author}`;

      const cardPages = document.createElement("p");
      cardPages.setAttribute("id", "cardPages");
      cardPages.innerHTML = `Pages: ${book.pages}`;

      const cardRead = document.createElement("button");
      cardRead.className = book.read ? "read-confirmed" : "read-declined";
      cardRead.innerHTML = book.read ? "Read" : "Not Read";

      const rightSide = document.createElement("div");
      rightSide.setAttribute("id", "rightSide");

      const cardRemove = document.createElement("button");
      cardRemove.setAttribute("id", "removeBtn");
      cardRemove.innerHTML = "X";

      libraryContainer.appendChild(bookCard);
      bookCard.appendChild(leftSide);
      bookCard.appendChild(rightSide);
      leftSide.appendChild(cardTitle);
      leftSide.appendChild(cardAuthor);
      leftSide.appendChild(cardPages);
      leftSide.appendChild(cardRead);
      rightSide.appendChild(cardRemove);

      cardRemove.addEventListener("click", () => {
        this.removeBook(index);
        this.display();
      });

      cardRead.addEventListener("click", () => {
        this.toggleReadStatus(index);
        this.display();
      });
    });
  }
}

const library = new Library();
