function create(){
    document.body.innerHTML = '';
    create_main();
    create_data();
    sort();
    update_ok();
    update_people();
}
create();

console.log("B".charCodeAt(0) - 65);


// edit should not delete but just hide