/* create an emty list */
var people= [];

function createPerson(name, session) {
    return {
        Name: name,
        Session: session,
    };
};

var names = ["Andre", "Brian", "Cathy", "David", "Edward", "Frank", "George", "Harry", "Irene", "Jane"];
var sessions = ["Ziek", "Reserve", "H", "H", "F", "F", "F", "C", "D", "D"];


for (let i = 0; i < names.length; i++) {
    people.push(createPerson(names[i], sessions[i]));
}
for (let i = 0; i < lookupPerson.length; i++) {
    people.push(createPerson(lookupPerson[i], "data"));
}
function update_people(){
    people.forEach(person => {
        let div = document.createElement("div");
        div.textContent = person.Name;
        div.id = person.Name + person.Session;
        div.className = "person";
        div.classList.add(person.Session);
        /*if ok_ids == ziek append to #ziek */
        if (person.Session.includes("Ziek")) {
            document.getElementById("Ziek_container").appendChild(div);
        }
        /*if ok_ids == Reserve append to #Reserve */
        else if (person.Session.includes("Reserve")) {
            document.getElementById("Reserve_container").appendChild(div);
        }
        else{
            document.getElementsByClassName(person.Session)[4].appendChild(div);
        }
    });
}
