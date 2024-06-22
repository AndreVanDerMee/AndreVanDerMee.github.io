function create_main() {
    // Create the main container
    const chirugieDiv = document.createElement('div');
    chirugieDiv.id = 'Chirugie';

    // Create the Search section
    const searchDiv = document.createElement('div');
    searchDiv.id = 'Search';

    const searchP = document.createElement('p');
    searchP.textContent = 'Search name';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'Search_input';
    searchInput.oninput = function() { filterNames(); };

    const searchResults = document.createElement('div');
    searchResults.id = 'Search_result';

    searchDiv.appendChild(searchP);
    searchDiv.appendChild(searchInput);
    

    // Create the OKS section
    const oksDiv = document.createElement('div');
    oksDiv.id = 'OKS';

    // Create the Reserve section
    const reserveDiv = document.createElement('div');
    reserveDiv.id = 'Reserve';

    const reserveP = document.createElement('p');
    reserveP.textContent = 'Reserve';

    const reserveContainerDiv = document.createElement('div');
    reserveContainerDiv.id = 'Reserve_container';
    reserveContainerDiv.className = 'Reserve';

    reserveDiv.appendChild(reserveP);
    reserveDiv.appendChild(reserveContainerDiv);

    // Create the Ziek section
    const ziekDiv = document.createElement('div');
    ziekDiv.id = 'Ziek';

    const ziekP = document.createElement('p');
    ziekP.textContent = 'Ziek';

    const ziekContainerDiv = document.createElement('div');
    ziekContainerDiv.id = 'Ziek_container';
    ziekContainerDiv.className = 'Ziek';

    ziekDiv.appendChild(ziekP);
    ziekDiv.appendChild(ziekContainerDiv);

    // Create the buttons
    const editButton = document.createElement('button');
    editButton.id = 'Edit';
    editButton.textContent = 'Edit';

    const saveButton = document.createElement('button');
    saveButton.id = 'Save';
    saveButton.textContent = 'Save';
    saveButton.style.display = 'none';

    // Append all sections to the main container
    chirugieDiv.appendChild(searchDiv);
    chirugieDiv.appendChild(searchResults);
    chirugieDiv.appendChild(oksDiv);
    chirugieDiv.appendChild(reserveDiv);
    chirugieDiv.appendChild(ziekDiv);
    chirugieDiv.appendChild(editButton);
    chirugieDiv.appendChild(saveButton);

    // Append the main container to the body
    document.body.appendChild(chirugieDiv);
}