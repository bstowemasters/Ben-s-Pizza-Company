function scrollPage(value) {
    const element = document.getElementById(value);
    element.scrollIntoView();       /* Scroll to selected tab */
    window.scrollBy(0, -550)
}