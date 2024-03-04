function checkInput() {
    var input = document.getElementById('secretInput').value.toLowerCase();
    if (input === "poops") {
        window.location.href = 'nextpage.html';
    } else {
        alert("Incorrect secret word. Please try again.");
    }
}