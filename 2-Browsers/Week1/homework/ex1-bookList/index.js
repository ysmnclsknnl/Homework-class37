function createBookList(books) {
  const ulEl = document.createElement('ul');
  ulEl.style.display = 'flex';
  ulEl.style.listStyle = 'none';
  ulEl.style.padding = '15px';

  books.forEach((book) => {
    const liEl = document.createElement('li');
    liEl.style.display = 'inline';
    liEl.style.padding = '20px';
    liEl.style.marginRight = '40px';
    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title + '-' + book.author;
    liEl.appendChild(bookTitle);
    const imgEl = document.createElement('img');
    imgEl.height = 300;
    imgEl.width = 200;
    imgEl.src = book.url;
    imgEl.alt = book.title;
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    if (book.alreadyRead) {
      liEl.style.backgroundColor = 'green';
    } else {
      liEl.style.backgroundColor = 'red';
    }
  });
  return ulEl;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      url: './assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      url: './assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      url: './assets/the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
