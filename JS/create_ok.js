function update_ok(){
    let empty = document.getElementById('OKS'); 
    empty.innerHTML = '';
    let emptyziek = document.getElementById('Ziek_container');
    emptyziek.innerHTML = '';
    let emptyreserve = document.getElementById('Reserve_container');
    emptyreserve.innerHTML = '';

    let container = document.getElementById("OKS");
    for (let i = 0; i < 24; i++) {
        let div = document.createElement("div");
        div.className = "ok";
        div.classList.add(data[i].session_id);
        
        let ok_num = document.createElement("p");
        ok_num.textContent = data[i].ok;
        ok_num.className = data[i].session_id;
        ok_num.classList.add("ok_num");
        ok_num.id = "ok_num" + data[i].session_id;

        let time = document.createElement("p");
        time.textContent = data[i].time;
        time.className = data[i].session_id;
        time.classList.add("time");
        time.id = "time" + data[i].session_id;

        let specs = document.createElement("p");
        specs.textContent = data[i].spec;
        specs.className = data[i].session_id;
        specs.classList.add("specs");
        specs.id = "specs" + data[i].session_id;
        
        let innerDiv = document.createElement("div");
        innerDiv.className = data[i].spec
        innerDiv.classList.add("ok_content");
        innerDiv.classList.add(data[i].session_id);
        innerDiv.id = "names" + data[i].session_id;
        
        div.appendChild(ok_num);
        div.appendChild(time);
        div.appendChild(specs);
        div.appendChild(innerDiv);
        
        container.appendChild(div);
    } 
}


