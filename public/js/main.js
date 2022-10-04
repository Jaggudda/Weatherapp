const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Plz write some name before search";
    } else {
        try {

            let url = `https//api.openweathermap.org/data/2.5/weather?q=${cityVal}lat={lat}&lon={lon}&appid=fac712261eb5371e217cdb8a4a75e4f4`

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
        }


        catch{
          city_name.innerText = "Plz write some name before search";
        }    

        }
    }





submitBtn.addEventListener('click', getInfo);