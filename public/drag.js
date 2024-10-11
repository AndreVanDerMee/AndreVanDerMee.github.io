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
    const dropZones = document.querySelectorAll('.ok_content, #Reserve_container, #Ziek_container, #Search_result');

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        zone.addEventListener('drop', function(event) {
            event.preventDefault();
            const id = event.dataTransfer.getData('text');
            console.log("id", id);
            const draggableElement = document.getElementById(id);
            console.log("draggableElement", draggableElement);
            //zone.appendChild(draggableElement);
            if (zone.classList.length == 0) {
                people.find(p => p.Name === draggableElement.textContent).Session = zone.id;
            }
            else if (zone.classList.length == 3) {
                people.find(p => p.Name === draggableElement.textContent).Session = zone.classList[2];
            }
            else if (zone.classList.length == 4) {
                people.find(p => p.Name === draggableElement.textContent).Session = zone.classList[3];
            }
            else {
                people.find(p => p.Name === draggableElement.textContent).Session = zone.classList[0];
            };
            sock();
            create();
            func();
        });
    });
}

// Call the function to make elements draggable
makeDraggable();
makeDropZones();