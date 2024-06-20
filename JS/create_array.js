var lookupTable = [
    { sessie_label: "CHI", unit: "Unit 1" },
    { sessie_label: "CHI Vaat", unit: "Unit 1" },
    { sessie_label: "RTH", unit: "Unit 1" },
    { sessie_label: "URO", unit: "Unit 1" },
    { sessie_label: "GON", unit: "Unit 1" },
    { sessie_label: "CHI sed", unit: "Unit 1" },
    { sessie_label: "KNO", unit: "Unit 2" },
    { sessie_label: "NCH", unit: "Unit 2" },
    { sessie_label: "GYN", unit: "Unit 2" },
    { sessie_label: "CTC", unit: "Unit 3" },
    { sessie_label: "PLA", unit: "Unit 4" },
    { sessie_label: "ORT", unit: "Unit 4" },
    { sessie_label: "KAA", unit: "Unit 4" },
    { sessie_label: "TRAU", unit: "Unit 4" },
    { sessie_label: "PLA db", unit: "Unit 5" },
    { sessie_label: "CHI db", unit: "Unit 5" },
    { sessie_label: "URO db", unit: "Unit 5" },
    { sessie_label: "URO sed", unit: "Unit 5" },
    { sessie_label: "GON db", unit: "Unit 5" },
    { sessie_label: "GYN db", unit: "Unit 5" },
    { sessie_label: "KNO db", unit: "Unit 5" },
    { sessie_label: "ORT db", unit: "Unit 5" },
    { sessie_label: "KAA db", unit: "Unit 5" },
    { sessie_label: "TRAU db", unit: "Unit 5" },
    { sessie_label: "OOG", unit: "Unit 5" },
    { sessie_label: "OOG lokaal", unit: "Unit 5" },
    { sessie_label: "DER db", unit: "Unit 5" },
    { sessie_label: "PYN lokaal", unit: "Unit 5" },
    { sessie_label: "PYN sed", unit: "Unit 5" },
    { sessie_label: "PYN", unit: "Unit 5" },
    { sessie_label: "SPOED", unit: "SPOED" }
];
var sessieLabels = lookupTable.map(item => item.sessie_label);

var session_ids = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
var times = new Array(24); times.fill("16:30");
var specs = ["CHI Vaat", "CHI", "CTC", "SPOED", "GON", "KNO", "GYN", "CTC", "NCH", "ORT", "URO", "CHI", "CTC", "NCH", "OOG", "CTC", "PLA", "ORT", "URO", "URO db", "KAA", "TRAU", "CHI db", "PYN"]
var units = specs.map(specs => lookupTable.find(item => item.sessie_label === specs).unit);
var oks = ["OK 01", "OK 02", "OK 03", "OK 04", "OK 05", "OK 06", "OK 07", "OK 08", "OK 09", "OK 10", "OK 11", "OK 12", "OK 13", "OK 14", "OK 15", "OK 16", "OK 17", "OK 18", "OK 19", "OK 20", "OK 21", "OK C", "OK D", "OK 26"]

function createSession(session_id, time, spec, unit, ok) {
    return {
        session_id: session_id,
        time: time,
        spec: spec,
        unit: unit,
        ok: ok
    };
};
var data = [];
function create_data(){
    data = [];
    for (let i = 0; i < session_ids.length; i++) {
        data.push(createSession(session_ids[i], times[i], specs[i], units[i], oks[i]));
    }
};
function sort(){
    data.sort((a, b) => {
        if (a.unit === b.unit) {
            if (a.unit === "Unit 1" && a.spec === "GON") return 1;
            if (a.unit === "Unit 1" && b.spec === "GON") return -1;
            return 0;
        }
        return a.unit.localeCompare(b.unit);
    });
    return data;
};

