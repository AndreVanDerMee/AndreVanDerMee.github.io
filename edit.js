document.getElementById('editButton').addEventListener('click', function() {
    // Handle .editable class
    const headers = document.querySelectorAll('h2.editable');
    headers.forEach(header => {
        const currentValue = header.innerText;
        const select = document.createElement('select');
        
        // Generate options "OK 01" to "OK 21"
        for (let i = 1; i <= 21; i++) {
            const optionValue = `OK ${String(i).padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            select.appendChild(option);
        }

        select.value = currentValue;
        select.classList.add('editable-select');
        header.replaceWith(select);
    });
    // Handle .editable_time class
    const times = document.querySelectorAll('h2.editable_time');
    times.forEach(time => {
        const currentValue = time.innerText;
        const currentHour = currentValue.split(":")[0].trim().substring(2);
        const currentMinute = currentValue.split(":")[1];
        const hourSelect = document.createElement('select');
        const minuteSelect = document.createElement('select');

        // Generate minute options "00", "15", "30", "45"
        const hourOptions = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        hourOptions.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            hourSelect.appendChild(option);
        });      
        // Generate minute options "00", "15", "30", "45"
        const minuteOptions = ["00", "15", "30", "45"];
        minuteOptions.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            minuteSelect.appendChild(option);
        });
        console.log(currentHour);
        hourSelect.value = currentHour;
        minuteSelect.value = currentMinute;
        hourSelect.classList.add('editable-hour-select');
        minuteSelect.classList.add('editable-minute-select');
        
        const container = document.createElement('div');
        container.appendChild(hourSelect);
        container.appendChild(minuteSelect);
        container.classList.add('editable-time-container');
        
        time.replaceWith(container);
    });


    this.style.display = 'none';
    document.getElementById('saveButton').style.display = 'inline';
});

document.getElementById('saveButton').addEventListener('click', function() {
    // Handle .editable-select
    const selects = document.querySelectorAll('.editable-select');
    selects.forEach(select => {
        const header = document.createElement('h2');
        header.innerText = select.value;
        header.classList.add('editable');
        select.replaceWith(header);
    });

    // Handle .editable-time-select
    const timeContainers = document.querySelectorAll('.editable-time-container');
    timeContainers.forEach(container => {
        const hourSelect = container.querySelector('.editable-hour-select');
        const minuteSelect = container.querySelector('.editable-minute-select');
        
        const time = document.createElement('h2');
        time.innerText = `, ${hourSelect.value}:${minuteSelect.value}`;
        time.classList.add('editable_time');
        
        container.replaceWith(time);
    });

    this.style.display = 'none';
    document.getElementById('editButton').style.display = 'inline';
});
