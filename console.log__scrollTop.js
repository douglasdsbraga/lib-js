jQuery(window).scroll(example); 

function example() {
    var tempScrollTop = jQuery(window).scrollTop();
    console.log("Scroll from Top: " + tempScrollTop.toString());
};
