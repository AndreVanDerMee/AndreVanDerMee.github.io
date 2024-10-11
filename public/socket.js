function sock(){
    socket.emit('valueChanged', [specs, units, times, session_ids, oks, people]);
}
socket.on('valueChanged', (newData) => {
    console.log('Value changed:', newData);
    specs = newData[0];
    units = newData[1];
    times = newData[2];
    session_ids = newData[3];
    oks = newData[4];
    people = newData[5];
    create();
    func();
});