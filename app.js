function alertButton(){
    alert("My name is Andre!")
}

function checkInput() {
    var input = document.getElementById('secretInput').value;
    if (input === "poops") {
        // Change 'nextpage.html' to the actual next page URL
        window.location.href = 'nextpage.html';
    } else {
        alert("Incorrect secret word. Please try again.");
    }
}