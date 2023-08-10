const openFormBtn = document.getElementById("openFormBtn");
const form = document.getElementById("form");
const libraryContainer = document.getElementById("libraryContainer");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
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

      const leftDiv = document.createElement("div");
      leftDiv.setAttribute("class", "left-div");

      const titleParagraph = document.createElement("p");
      titleParagraph.setAttribute("class", "title");
      titleParagraph.innerHTML = `Title: <strong>${book.title}</strong>`;

      const authorParagraph = document.createElement("p");
      authorParagraph.setAttribute("class", "author");
      authorParagraph.innerHTML = `Author: <strong>${book.author}</strong>`;

      const pagesParagraph = document.createElement("p");
      pagesParagraph.setAttribute("class", "pages");
      pagesParagraph.innerHTML = `Pages: <strong>${book.pages}</strong>`;

      const readStatus = document.createElement("button");
      readStatus.className = book.read ? "read-confirmed" : "read-declined";
      readStatus.textContent = book.read ? "Read" : "Not read";

      const rightDiv = document.createElement("div");
      rightDiv.setAttribute("class", "right-div");

      const removeBtn = document.createElement("button");
      removeBtn.setAttribute("id", "remove-btn");
      removeBtn.innerHTML = "X";

      leftDiv.appendChild(titleParagraph);
      leftDiv.appendChild(authorParagraph);
      leftDiv.appendChild(pagesParagraph);
      leftDiv.appendChild(readStatus);

      rightDiv.appendChild(removeBtn);

      bookCard.appendChild(leftDiv);
      bookCard.appendChild(rightDiv);
      libraryContainer.appendChild(bookCard);

      removeBtn.addEventListener("click", () => {
        this.removeBook(index);
        this.display();
      });

      readStatus.addEventListener("click", () => {
        this.toggleReadStatus(index);
        this.display();
      });
    });
  }
}

const myLibrary = new Library();

openFormBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "flex";
    openFormBtn.innerHTML = '<img src="img/minus-circle.svg"/>';
  } else {
    form.style.display = "none";
    openFormBtn.innerHTML = '<img src="img/plus-circle.svg"/>';
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  form.reset();
});

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  myLibrary.addBook(title, author, pages, read);
  myLibrary.display();
}

myLibrary.display();
