var storedBooks = [];
var selectedBook;
var selectedBookIndex;

initializePage();

function initializePage() {
  togglePopupBox(false); // hide form initially
  initializeLibraryCards();
  initializeEventListeners();
}

function initializeEventListeners() {
  let addButton = document.getElementById('add-btn');
  let closeButton = document.getElementById('close-btn');
  let removeButton = document.getElementById('remove-btn');
  let updateButton = document.getElementById('update-btn');

  addButton.addEventListener('click', (e) => {
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
    let bookRead = document.getElementById('bookRead').checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  });

  removeButton.addEventListener('click', (e) => {
    removeBookFromLibrary(selectedBookIndex);
    togglePopupBox(false);
  });

  closeButton.addEventListener('click', (e) => {
    togglePopupBox(false);
  });
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

    libraryCardBox.addEventListener('click', (e) => {
      let index = (Array.prototype.indexOf.call(libraryCardBox.parentNode.childNodes, libraryCardBox));
      selectedBookIndex = index;
      selectedBook = storedBooks[index];
      let bookTitleElement = document.getElementById('bookTitle');
      let bookAuthorElement = document.getElementById('bookAuthor');
      let bookPagesElement = document.getElementById('bookPages');
      let bookReadElement = document.getElementById('bookRead');

      bookTitleElement.value = selectedBook.title;
      bookAuthorElement.value = selectedBook.author;
      bookPagesElement.value = selectedBook.pages;
      bookReadElement.checked = selectedBook.read;
      togglePopupBox(true);
    });

    libraryContainer.appendChild(libraryCardBox);
  }
  
   // adds an empty library card box at the end for adding new books
  addLibraryCardBox = document.createElement('div');
  addLibraryCardBox.setAttribute('id', 'new-library-card');
  addLibraryCardBox.innerText = '+';
  addLibraryCardBox.addEventListener('click', (e) => {
    togglePopupBox(true);
  })
  libraryContainer.appendChild(addLibraryCardBox);
}


function Book(bookTitle, bookAuthor, bookPages, bookRead) {
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.read = bookRead;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  storedBooks.push(newBook);
  initializeLibraryCards(); // refresh library
}

function editBookFromLibrary(index) {

}

function removeBookFromLibrary(index) {
  storedBooks.splice(index, 1);
  initializeLibraryCards(); // refresh library
}

function togglePopupBox(show) {
  let popupBox= document.getElementById('popup-container');
  if(show){
      popupBox.classList.remove('hide-display');
  } else popupBox.classList.add('hide-display');
}