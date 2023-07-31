const openFormBtn = document.querySelector("#plus-btn");
const form = document.querySelector("#form");
const libraryContainer = document.querySelector("#library-container");

let myLibrary = [];

openFormBtn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "flex";
    openFormBtn.innerHTML = "-";
  } else {
    form.style.display = "none";
    openFormBtn.innerHTML = "+";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}

function displayLibrary() {
  libraryContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookCard = document.createElement("div");
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

    removeBtn.addEventListener("click", function () {
      removeBook(i);
    });

    readStatus.addEventListener("click", function () {
      book.read = !book.read;

      if (book.read) {
        readStatus.classList.remove("read-declined");
        readStatus.classList.add("read-confirmed");
        readStatus.textContent = "Read";
      } else {
        readStatus.classList.remove("read-confirmed");
        readStatus.classList.add("read-declined");
        readStatus.textContent = "Not read";
      }
    });
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}
