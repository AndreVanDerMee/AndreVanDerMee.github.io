/* This array shows the names of all employes*/
const names = ["Andre", "Miranda", "Carlos", "Andrea", "Miran", "Carlos Mendes"];

function filterNames() {
    const searchInput = document.getElementById("zoek-input");
    const searchResults = document.getElementById("zoek-result");

    const searchTerm = searchInput.value.toLowerCase();
    const filteredNames = names.filter(name => name.toLowerCase().includes(searchTerm));

    searchResults.innerHTML = ""; // Clear previous results
    for (let i = 0; i < Math.min(filteredNames.length, 5); i++) {
        const div = document.createElement("div");
        div.textContent = filteredNames[i];
        div.classList.add("list");
        div.draggable = true;
        searchResults.appendChild(div);
    }
}

