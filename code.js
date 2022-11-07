const listOfBooks = document.querySelector(".listOfBooks");
const overlay = document.querySelector("#overlay");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const newBook = document.querySelector(".book");

// Were storing our books into this array

let myLibrary = [];

// Reveals the Modal

document
  .querySelector("#show-modal-btn")
  .addEventListener("click", function () {
    overlay.style.display = "block";
  });

// Closes the Modal

document
  .querySelector("#close-modal-btn")
  .addEventListener("click", function () {
    overlay.style.display = "none";
  });

// Save Book Button inside Modal

document
  .querySelector("#save-modal-btn")
  .addEventListener("click", function () {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    overlay.style.display = "none";
  });

// Constructor

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  let displayResult = `${title}, by ${author}, ${pages}, ${read}`;
  this.info = function () {
    return displayResult;
  };
}

// Function to add each book into myLibrary Array

function addBookToLibrary(title, author, pages, read) {
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
  renderBookCard(title, author, pages, read);
}

// Function to render the Added book to a card on the page.

function renderBookCard(title, author, pages, read) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("book");
  listOfBooks.append(newDiv);

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("button");
  p4.classList.add("readButton");
  newDiv.append(p1);
  newDiv.append(p2);
  newDiv.append(p3);
  newDiv.append(p4);
  p1.innerText = title;
  p2.innerText = author;
  p3.innerText = pages;
  if (read === true) {
    p4.innerText = "read";
  } else {
    p4.innerText = "not read";
  }
  let removeBTN = document.createElement("button");
  removeBTN.classList.add("removeBtn");
  removeBTN.innerText = "x";
  newDiv.append(removeBTN);

  document.querySelectorAll(".readButton").forEach((item) =>
    item.addEventListener("click", function () {
      if (item.innerText === "read") {
        item.innerText = "not read";
      } else if (item.innerText === "not read") {
        item.innerText = "read";
      }
    })
  );

  document.querySelectorAll(".removeBtn").forEach((item) =>
    item.addEventListener("click", function () {
      item.parentNode.remove();
    })
  );
}
