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