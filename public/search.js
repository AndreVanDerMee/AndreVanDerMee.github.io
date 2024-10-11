function filterNames() {
    const searchInput = document.getElementById("Search_input");
    const searchResults = document.getElementById("Search_result");

    const searchTerm = searchInput.value.toLowerCase();
    var filteredNames = people.filter(name => name.Name.toLowerCase().includes(searchTerm));
    filteredNames = filteredNames.filter(name => name.Session == "Search_result");

    console.log("filteredNames", filteredNames.length);
    searchResults.innerHTML = ""; // Clear previous results
    for (let i = 0; i < Math.min(filteredNames.length, 5); i++) {
        const div = document.createElement("div");
        div.textContent = filteredNames[i].Name;
        div.classList.add("person");
        div.classList.add("Search_result");
        div.id = div.textContent + "Search_result";
        div.draggable = true;
        searchResults.appendChild(div);
    }
}
