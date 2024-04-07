let lists = document.getElementsByClassName("list");
let rightBoxes = document.getElementsByClassName("ok"); // This is a collection
let lefttBox = document.getElementById("names");
let selected; // Define selected outside to make it globally accessible

// Setup dragover and drop listeners for each right box
for (let i = 0; i < rightBoxes.length; i++) {
    rightBoxes[i].addEventListener("dragover", function(e) {
        e.preventDefault(); // Allow drop
    });

    rightBoxes[i].addEventListener("drop", function(e) {
        this.appendChild(selected); // Append to the targeted box
    });
}

// Setup dragover and drop for the left box
lefttBox.addEventListener("dragover", function(e) {
    e.preventDefault(); // Allow drop
});

lefttBox.addEventListener("drop", function(e) {
    this.appendChild(selected); // Append to the left box
});

// Assign dragstart event listener to each list item
for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        selected = e.target; // Assign the target item to selected
    });
}
