function edit(){
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
            select.classList.add(ok_option.classList[0]);
            ok_option.replaceWith(select);
        });

        //Times ---------------------------------------

        const time_option = document.querySelectorAll('.time');
        time_option.forEach(time_option => {
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
            hourSelect.classList.add(time_option.classList[0]);

            minuteSelect.classList.add('time_minute');
            minuteSelect.classList.add(time_option.classList[0]);

            const container = document.createElement('div');
            container.appendChild(hourSelect);
            container.appendChild(minuteSelect);
            container.classList.add('time');
            
            time_option.replaceWith(container);
        });

        //Specs ---------------------------------------
        const spec_option = document.querySelectorAll('.specs');
        spec_option.forEach(spec_option => {
            const currentValue = spec_option.innerText;
            const select = document.createElement('select');

            for (let i = 0; i < sessieLabels.length; i++) {
                const optionValue = sessieLabels[i];
                const option = document.createElement('option');
                option.value = optionValue;
                option.innerText = optionValue;
                select.appendChild(option);
            }

            select.value = currentValue;
            select.classList.add('specs');
            select.classList.add(spec_option.classList[0]);
            spec_option.replaceWith(select);
        });


        this.style.display = 'none';
        document.getElementById('Save').style.display = 'inline';
    });
};
function save(){
    document.getElementById("Save").addEventListener('click', function(){
        // Get all the selects. 
        const ok_option = document.querySelectorAll('.ok_num');
        const time_hour = document.querySelectorAll('.time_hour');
        const time_minute = document.querySelectorAll('.time_minute');
        const spec_option = document.querySelectorAll('.specs');
        // loop over each select over each session id and change the original array
        ok_option.forEach(ok_option => {
            const session_id = ok_option.classList[1].charCodeAt(0) - 65;
            oks[session_id] = ok_option.value;
        });
        time_hour.forEach((time_hour, index) => {
            const session_id = time_hour.classList[1].charCodeAt(0) - 65;
            const currentMinute = time_minute[index].value;
            times[session_id] = time_hour.value + ":" + currentMinute;
        });
        spec_option.forEach(spec_option => {
            const session_id = spec_option.classList[1].charCodeAt(0) - 65;
            specs[session_id] = spec_option.value;
            units[session_id] = lookupTable.find(item => item.sessie_label === spec_option.value).unit;
        });
        create();
        func();
    });
};