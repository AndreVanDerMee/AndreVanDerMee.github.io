/* This array shows the times of each OR*/
let draggedItem = null;
document.addEventListener('DOMContentLoaded', (event) => {
    filter();
});

function filter(){
  draggedItem = null;
  
    // Target draggable items in .extra, .ok-content, and .zoek-results containers
    const draggableItems = document.querySelectorAll('.list');
    console.log(draggableItems);
    draggableItems.forEach((item) => {
      item.addEventListener('dragstart', function(e) {
        draggedItem = this;
        console.log('Dragging:', draggedItem);
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
}


