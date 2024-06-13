document.getElementById("Edit").addEventListener('click', function(){
    const ok_option = document.querySelectorAll('.ok_num');
    ok_option.forEach(ok_option => {
        const currentValue = ok_option.innerText;
        const select = document.createElement('select');

        for (let i = 0; i < oks.length; i++) {
            const optionValue = oks[i];
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            select.appendChild(option);
        }

        select.value = currentValue;
        select.classList.add('ok_num');
        ok_option.replaceWith(select);
    });

    this.style.display = 'none';
    document.getElementById('Save').style.display = 'inline';
});

document.getElementById("Save").addEventListener('click', function(){
    const selects = document.querySelectorAll('.ok_num');
    selects.forEach(select => {
        const header = document.createElement("p");
        header.innerText = select.value;
        header.classList.add('ok_num');
        select.replaceWith(header);
    });

    this.style.display = 'none';
    document.getElementById('Edit').style.display = 'inline';
});