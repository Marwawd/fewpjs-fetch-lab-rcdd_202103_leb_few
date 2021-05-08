function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
   .then(resp => resp.json())
   .then(json =>
//console.log(json[5].name);
renderBooks(json))

  /*fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json.character(1031)));}*/
function renderBooks(books) {
  const main = document.querySelector('main');
for(let book in books){
    const h2 = document.createElement('h2');
    console.log(books[book].name);
    h2.innerHTML = books[book].name;
    main.appendChild(h2);
  }
}}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();


});
