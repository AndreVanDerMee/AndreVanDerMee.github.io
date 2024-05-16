let times = new Array(21); times.fill("16:30");
let okArray = Array.from({ length: 21 }, (_, i) => `OK ${String(i + 1).padStart(2, '0')}`);
let units = Array.from({ length: 21 }, () => `unit ${Math.floor(Math.random() * 5) + 1}`);

let combinedArray = units.map((unit, index) => ({
    unit,
    ok: okArray[index],
    time: times[index]
}));

// Sort the combined array based on the 'unit' property
combinedArray.sort((a, b) => a.unit.localeCompare(b.unit));

// Extract the sorted values back into separate arrays
units = combinedArray.map(item => item.unit);
okArray = combinedArray.map(item => item.ok);
times = combinedArray.map(item => item.time);

let container = document.getElementById("OKS");
for (let i = 0; i < 21; i++) {
    let div = document.createElement("div");
    div.className = "ok";
    
    let h1 = document.createElement("h2");
    h1.textContent = okArray[i]
    h1.className = "editable"

    let time = document.createElement("h2");
    time.textContent = ", " + times[i]
    time.className = "editable_time"

    let unit = document.createElement("h2");
    unit.textContent = ", " + units[i]

    let innerDiv = document.createElement("div");
    innerDiv.className = "ok-content";
    
    div.appendChild(h1);
    div.appendChild(time)
    div.appendChild(unit)
    div.appendChild(innerDiv);
    
    container.appendChild(div);
}