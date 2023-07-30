const openFormBtn = document.querySelector("#plus-btn");
const form = document.querySelector("#form");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrart() {}

openFormBtn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "flex";
    openFormBtn.innerHTML = "-";
  } else {
    form.style.display = "none";
    openFormBtn.innerHTML = "+";
  }
});
