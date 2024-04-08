let container = document.getElementById("OKS");
for (let i = 1; i <= 21; i++) {
    let div = document.createElement("div");
    div.className = "ok";
    
    let h1 = document.createElement("h1");
    h1.textContent = "OK " + ("0" + i).slice(-2);
    
    let innerDiv = document.createElement("div");
    innerDiv.className = "ok-content";
    
    div.appendChild(h1);
    div.appendChild(innerDiv);
    
    container.appendChild(div);
}

document.addEventListener('DOMContentLoaded', (event) => {
    let draggedItem = null;
  
    // Target draggable items in .extra, .ok-content, and .zoek-results containers
    const draggableItems = document.querySelectorAll('.extra div, .ok-content div, .zoek-results div');
    draggableItems.forEach((item) => {
      item.addEventListener('dragstart', function(e) {
        draggedItem = this;
        setTimeout(() => this.classList.add('dragging'), 0); // Visual cue
      });
  
      item.addEventListener('dragend', function(e) {
        setTimeout(() => this.classList.remove('dragging'), 0); // Remove visual cue
      });
    });
  
    // Enable .extra, .ok-content, and .zoek-results divs as drop targets
    const dropZones = document.querySelectorAll('.extra, .ok-content, .zoek-results');
    dropZones.forEach((zone) => {
      zone.addEventListener('dragover', function(e) {
        e.preventDefault(); // Necessary to allow dropping
      });
  
      zone.addEventListener('drop', function(e) {
        // Avoid dropping the item into its current container
        if (this !== draggedItem.parentNode) {
          this.appendChild(draggedItem); // Move the dragged item to this container
        }
      });
    });
  });
  
  


// q: what is the difference between an id and a class and how do you use them?
// A: An id is unique to an element, meaning that it can only be used once in the document. A class can be used multiple times. You can use them by selecting them using document.getElementById() and document.getElementsByClassName() respectively.
// q: how to i use id and classes in css?
// A: You can use them by selecting them using # for id and . for class. For example, #myId { color: red; } and .myClass { color: blue; }



