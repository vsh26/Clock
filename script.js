const selectElement = document.getElementById("time-format-picker");

let selectedValue = 'default';


function updateClock(){

    const timeElement = document.getElementById("time-container");
    const dateElement = document.getElementById("date-container");

    const now = new Date();
    // console.log(now);

    if(selectedValue === 'am-pm'){

        const hours = (now.getHours() % 12 || 12).toString().padStart(2, "0");
        // const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        // const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
    
        const ampm = (now.getHours() >= 12 ? "PM" : "AM");
    
        timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    }else{

        const hours = (now.getHours()).toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    // undefined - according to local timezone and default locale
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

selectElement.addEventListener('click', () => {

    selectedValue = selectElement.value;
    // console.log(selectedValue);

    updateClock();
    
});

setInterval(updateClock, 1000);
updateClock();