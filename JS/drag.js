// Function to make elements draggable
function makeDraggable() {
    const persons = document.querySelectorAll('.person');
    persons.forEach(person => {
        person.setAttribute('draggable', true);

        person.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
            event.target.style.opacity = '0.5';
        });

        person.addEventListener('dragend', function(event) {
            event.target.style.opacity = '1';
        });
    });
}
// Function to make drop zones handle drops
function makeDropZones() {
    const dropZones = document.querySelectorAll('.ok_content, .reserve_container, .ziek_container');

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        zone.addEventListener('drop', function(event) {
            event.preventDefault();
            const id = event.dataTransfer.getData('text');
            const draggableElement = document.getElementById(id);
            zone.appendChild(draggableElement);
        });
    });
}

// Call the function to make elements draggable
makeDraggable();
makeDropZones();