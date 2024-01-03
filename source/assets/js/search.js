const search = document.getElementById('search');
const keys = ['isbn', 'title', 'author'];

if (search) {
    const fuse = new Fuse(books, {threshold: 0.5, keys: keys});

    search.addEventListener('keyup', function () {
        buildList(this.value ? fuse.search(this.value) : books);
    });

    buildList(search.value ? fuse.search(search.value) : books);
}

function buildList(books) {
    const tBody = document.getElementById('books');
    if (!tBody) {
        return;
    }

    tBody.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        let line = document.createElement('tr');
        for (let j = 0; j < keys.length; j++) {
            let column = document.createElement('td');
            column.innerText = typeof books[i].item !== 'undefined' ? books[i].item[keys[j]] : books[i][keys[j]];
            line.appendChild(column);
        }
        tBody.appendChild(line);
    }

    if (!books.length) {
        let line = document.createElement('tr');
        let column = document.createElement('td');
        column.setAttribute('colspan', '3');
        column.className = 'center';
        column.innerText = 'No item was found';
        line.appendChild(column);
        tBody.appendChild(line);
    }
}
