function scrollPage(value) {
    const element = document.getElementById(value);
    element.scrollIntoView();       /* Scroll to selected tab */
    if (value != 'desserts'){
        window.scrollBy(0, -100);   /* Accounts for margin when the last element is not selected. */
    }
}