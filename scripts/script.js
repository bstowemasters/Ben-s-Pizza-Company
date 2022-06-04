function scrollPage(value) {
    const element = document.getElementById(value);

    window.scrollTo({   /* Smooth scrolling function with offset */
        behavior: 'smooth', /* Adds smooth behaviour */
        
        top:                /* Calculates top amount by working out element location and adding offset to position */
        document.querySelector("." + value).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        + 450              /* Adds on spacing above container for more accurate positioning. */
    });
    

    // Original method which doesn't allow smooth scrolling.
    // element.scrollIntoView();       /* Scroll to selected tab */
    // document.scrollBy(0, -550);

}