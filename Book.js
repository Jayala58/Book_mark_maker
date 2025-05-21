const form = document.getElementById('bookmark-form');
const urlInput = document.getElementById('url');
const titleInput = document.getElementById('title');
const saveBtn = document.getElementById('save-btn');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = urlInput.value;
    const title = titleInput.value;
    if (url && title) {
        const bookmark = {
            url,
            title
        };
        bookmarks.push(bookmark);
        renderBookmarks();
        urlInput.value = '';
        titleInput.value = '';
    }
});

function renderBookmarks() {
    bookmarksContainer.innerHTML = '';
    bookmarks.forEach((bookmark) => {
        const bookmarkElement = document.createElement('div');
        bookmarkElement.classList.add('bookmark');
        bookmarkElement.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
            <button class="delete-btn">Delete</button>
        `;
        bookmarksContainer.appendChild(bookmarkElement);
    });
}

bookmarksContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const bookmarkElement = e.target.parentElement;
        const url = bookmarkElement.querySelector('a').href;
        bookmarks = bookmarks.filter((bookmark) => bookmark.url !== url);
        renderBookmarks();
    }
});
