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
    const dropZones = document.querySelectorAll('.ok_content, #Reserve_container, #Ziek_container');

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
            console.log(zone.classList[2]);
            console.log(draggableElement.textContent);
            if (zone.classList.length > 2) {
                people.find(p => p.Name === draggableElement.textContent).Session = zone.classList[2];
            }
            else {
                people.find(p => p.Name === draggableElement.textContent).Session = zone.classList[0];
            };
            create();
            edit();
            save();
            makeDraggable();
            makeDropZones();
        });
    });
}

// Call the function to make elements draggable
makeDraggable();
makeDropZones();