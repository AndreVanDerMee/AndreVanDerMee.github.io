/* create an emty list */
var people= [];

function createPerson(name, session, status) {
    return {
        Name: name,
        Session: session,
        Status: status
    };
};

var names = ["Andre", "Brian", "Cathy", "David", "Edward", "Frank", "George", "Harry", "Irene", "Jane"];
var sessions = ["Ziek", "Reserve", "A", "A", "B", "B", "B", "C", "D", "D"];
var statuses = ["C9", "C5", "C9", "C5", "C9", "OACV", "C9", "ZutB", "W3O", "C9 IW"];

for (let i = 0; i < names.length; i++) {
    people.push(createPerson(names[i], sessions[i], statuses[i]));
}
function update_people(){
    people.forEach(person => {
        let div = document.createElement("div");
        div.textContent = person.Name;
        div.id = person.Name + person.Session;
        div.className = "person";
        /*if ok_ids == ziek append to #ziek */
        if (person.Session.includes("Ziek")) {
            document.getElementById("Ziek_container").appendChild(div);
        }
        /*if ok_ids == Reserve append to #Reserve */
        else if (person.Session.includes("Reserve")) {
            document.getElementById("Reserve_container").appendChild(div);
        }
        else{
            console.log(document.getElementsByClassName(person.Session));
            document.getElementsByClassName(person.Session)[5].appendChild(div);
        }
    });
}
update_people();