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
  console.log(myLibrary);
  displayLibrary();
}
