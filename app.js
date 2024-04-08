let container = document.getElementById("OKS");
for (let i = 1; i <= 21; i++) {
    let div = document.createElement("div");
    div.className = "container";
    
    let h1 = document.createElement("h1");
    h1.textContent = "OK " + ("0" + i).slice(-2);
    
    let innerDiv = document.createElement("div");
    innerDiv.className = "ok";
    
    div.appendChild(h1);
    div.appendChild(innerDiv);
    
    container.appendChild(div);
}

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

// q: what is the difference between an id and a class and how do you use them?
// A: An id is unique to an element, meaning that it can only be used once in the document. A class can be used multiple times. You can use them by selecting them using document.getElementById() and document.getElementsByClassName() respectively.
// q: how to i use id and classes in css?
// A: You can use them by selecting them using # for id and . for class. For example, #myId { color: red; } and .myClass { color: blue; }

// q: create 21 of divs with class="container" and inside each div create a h1 with the text "OK 01" and a div with the class "ok". ok1 to ok21 in js
// A:


