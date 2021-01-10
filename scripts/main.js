var storedBooks = [];

initializePage();

function initializePage() {
  initializeLibraryCards();
  initializeEventListeners();
}

function initializeEventListeners() {
  let addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', (e) => {
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
    let bookRead = document.getElementById('bookRead').checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  })
}

function initializeLibraryCards() {
  let libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = ''; // clear all before refreshing
  for(let x=0; x<storedBooks.length; x++) {
    let libraryCardBox = document.createElement('div');
    libraryCardBox.classList.add('library-card')
    for(const prop in storedBooks[x]) {
      let libraryCardDetail = document.createElement('div');
      if(prop == 'read') {
        libraryCardDetail.innerText = storedBooks[x][prop] ? 'Done' : 'Not yet';
      } else libraryCardDetail.innerText = storedBooks[x][prop];
      libraryCardBox.appendChild(libraryCardDetail);
    }
    libraryContainer.appendChild(libraryCardBox);
  }
  
   // adds an empty library card box at the end for adding new books
  addLibraryCardBox = document.createElement('div');
  addLibraryCardBox.setAttribute('id', 'new-library-card');
  addLibraryCardBox.innerText = '+';
  libraryContainer.appendChild(addLibraryCardBox);
}


function Book(bookTitle, bookAuthor, bookPages, bookRead, keyID) {
  this.keyID = keyID;
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.read = bookRead;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
  let keyID = storedBooks.length + 1;
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead, keyID);
  Object.defineProperty(newBook, 'keyID', {enumerable: false});
  storedBooks.push(newBook);
  initializeLibraryCards();
}

function removeBookFromLibrary() {

}