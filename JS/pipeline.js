// clear everything and redraw the entire screen
function pipeline() {
    // remoeve all divs from the screen
    var divs = document.getElementsByTagName("div");
    while(divs.length > 0){
        divs[0].parentNode.removeChild(divs[0]);
    }
    
}
pipeline();