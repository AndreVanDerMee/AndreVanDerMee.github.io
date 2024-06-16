document.getElementById("Edit").addEventListener('click', function(){
    //OK numbers -----------------------------------
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

    //Times ---------------------------------------

    const time_option = document.querySelectorAll('.time');
    time_option.forEach(time_option => {
        console.log(time_option);
        const currentValue = time_option.innerText;
        const currentHour = currentValue.split(":")[0].trim();
        const currentMinute = currentValue.split(":")[1];
        const hourSelect = document.createElement('select');
        const minuteSelect = document.createElement('select');

        const hourOptions = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        hourOptions.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            hourSelect.appendChild(option);
        });      
        const minuteOptions = ["00", "15", "30", "45"];
        minuteOptions.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            minuteSelect.appendChild(option);
        });
        hourSelect.value = currentHour;
        minuteSelect.value = currentMinute;
        hourSelect.classList.add('time_hour');
        minuteSelect.classList.add('time_minute');
        
        const container = document.createElement('div');
        container.appendChild(hourSelect);
        container.appendChild(minuteSelect);
        container.classList.add('time');
        
        time_option.replaceWith(container);
    });

    //Specs ---------------------------------------

    this.style.display = 'none';
    document.getElementById('Save').style.display = 'inline';
});

document.getElementById("Save").addEventListener('click', function(){
    
    //OK numbers ---------------------------------
    const selects = document.querySelectorAll('.ok_num');
    selects.forEach(select => {
        const header = document.createElement("p");
        header.innerText = select.value;
        header.classList.add('ok_num');
        select.replaceWith(header);
    });

    //Times ---------------------------------------
    const timeContainers = document.querySelectorAll('.time');
    timeContainers.forEach(container => {
        const hourSelect = container.querySelector('.time_hour');
        const minuteSelect = container.querySelector('.time_minute');
        
        const time = document.createElement('p');
        time.innerText = `${hourSelect.value}:${minuteSelect.value}`;
        time.classList.add('time');
        
        container.replaceWith(time);
    });

    
    //Specs ---------------------------------------


    this.style.display = 'none';
    document.getElementById('Edit').style.display = 'inline';
});