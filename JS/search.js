function filterNames() {
    const searchInput = document.getElementById("Search_input");
    const searchResults = document.getElementById("Search_result");

    const searchTerm = searchInput.value.toLowerCase();
    const filteredNames = lookupPerson.filter(name => name.toLowerCase().includes(searchTerm));

    searchResults.innerHTML = ""; // Clear previous results
    for (let i = 0; i < Math.min(filteredNames.length, 5); i++) {
        const div = document.createElement("div");
        div.textContent = filteredNames[i];
        div.classList.add("person");
        div.id = div.textContent + "data";
        div.draggable = true;
        searchResults.appendChild(div);
    }
}
