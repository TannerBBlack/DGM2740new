const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=84058,us&appid=6b481baf7ed99973d9936103993d07a0&units=imperial"

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById('place').textContent = weatherInfo.city.name;
    let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;
        for (i= 0; i < mylist.length; i++) {
            let time = mylist[i].dt_txt;
            if (time.includes("18:00:00")) {
                forecastDayNumber +=1;
                if (forecastDayNumber === 7){forecastDayNumber = 0;}

                let theDayName = document.createElement('span');
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xb0";

                const iconcode = weatherInfo.list[i].weather[0].icon;
                const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src=icon_path;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById("puppy").appendChild(theDay);
            }
        }

    
});

//6b481baf7ed99973d9936103993d07a0