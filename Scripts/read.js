const retrievedDetails = JSON.parse(localStorage.getItem('details'))

let renderItem = ``;

retrievedDetails.forEach((item) => {
    renderItem += `
    <div class="read-container">
        <h1 class="title">${item.itemTitle}</h1>
        <h4 class="author">${item.itemAuthor}</h4>
        <p class="main-content">${item.itemContent}</p>
    </div>`

    document.querySelector('.render-item').innerHTML = renderItem;
})

const hamburgerMenu = document.getElementById('hamburger-menu')

hamburgerMenu.addEventListener('click', () => {
    const menuLink = document.getElementById('navigation-mobile')
    menuLink.classList.toggle('show')
})
