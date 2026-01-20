const APIKEY = "189d0bac63bca0df9edc2b67898647df";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city");
const searchBtn = document.querySelector("#btn");
const weatherIcon = document.querySelector(".weather-icon");
const descriptionTxt = document.querySelector(".weather h2");

async function checkWeather(city) {
    if (!city) return;

    try {
        const response = await fetch(API_URL + city + `&appid=${APIKEY}`);
        
        if (response.status == 404) {
            alert("Ciudad no encontrada");
            return;
        }

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
        document.querySelector(".humidity-val").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-val").innerHTML = data.wind.speed + " km/h";

        const desc = data.weather[0].description;
        descriptionTxt.innerHTML = desc.charAt(0).toUpperCase() + desc.slice(1);

        const mainWeather = data.weather[0].main;
        const iconCode = data.weather[0].icon;

        if (iconCode.includes("n")) {
            weatherIcon.innerHTML = `<svg width="185" height="178" viewBox="0 0 185 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M161.912 136.054C151.576 145.168 143.82 151.308 129.725 154.716C115.63 158.124 103.847 160.683 89.9519 158.747C76.0566 156.811 62.3431 154.145 51.4316 147.252C40.5201 140.359 32.4754 135.291 26.734 124.823C20.9925 114.355 14.9617 101.01 15.5407 89.0635C16.1196 77.1174 19.9445 65.1804 26.7279 54.1497C33.5112 43.119 43.0766 33.2815 54.7053 25.3763C66.3339 17.4711 79.7233 11.704 93.8674 8.50823L95.1013 8.26232C88.3052 9.79787 67.519 41.9515 64.1776 51.3625C62.1519 57.0677 59.156 73.5042 61.0218 76.2484C59.929 83.3256 61.267 83.5567 61.9174 89.7239C63.9058 96.1222 66.5444 102.743 69.098 105.496C71.8568 110.526 76.0014 115.969 81.2443 119.28C86.4873 122.592 90.1867 126.091 96.4717 128.387C102.757 130.683 113.989 135.045 123.355 136.662C132.721 138.279 139.411 139.434 148.249 138.538L161.912 136.054Z" fill="#FECA1B"/>
                                        <path d="M116.406 64.4V51.2L128.5 54.8L140.594 50V63.2L150 71.6L135.219 76.4L127.156 86L120.438 76.4L107 72.8L116.406 64.4Z" fill="#FECA1B"/>
                                        <path d="M143.594 24.2V17.6L149.5 19.4L155.406 17V23.6L160 27.8L152.781 30.2L148.844 35L145.562 30.2L139 28.4L143.594 24.2Z" fill="#FECA1B"/>
                                        <path d="M168.594 84.2V77.6L174.5 79.4L180.406 77V83.6L185 87.8L177.781 90.2L173.844 95L170.562 90.2L164 88.4L168.594 84.2Z" fill="#FECA1B"/>
                                    </svg>`;
        } else {
            if (mainWeather == "Clouds") {
                weatherIcon.innerHTML = `<svg width="216" height="156" viewBox="0 0 216 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="66.7595" width="215.473" height="89.0127" rx="44" fill="#D9E2E9"/>
                                            <ellipse cx="113.319" cy="55.6329" rx="61.9623" ry="55.6329" fill="#D9E2E9"/>
                                        </svg>`;
            } else if (mainWeather == "Clear") {
                weatherIcon.innerHTML = `<svg width="220" height="215" viewBox="0 0 220 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="111.851" cy="106.338" rx="60.8515" ry="58.3381" fill="url(#paint0_linear_10_261)"/>
                                            <rect width="41.3954" height="17.515" rx="8.75751" transform="matrix(0.753349 0.65762 -0.764439 0.644696 41.3889 22.5511)" fill="#F6CF9E"/>
                                            <rect width="38.2948" height="18.7291" rx="9.36456" transform="matrix(0.156472 0.987682 -0.993267 0.115844 105.846 0)" fill="#F6CF9E"/>
                                            <rect width="41.0907" height="17.5478" rx="8.77388" transform="matrix(-0.481935 0.876207 -0.817509 -0.575916 165.171 11.1058)" fill="#F6CF9E"/>
                                            <rect width="38.7339" height="18.5028" rx="9.2514" transform="matrix(-0.737993 0.674808 -0.665123 -0.746733 204.375 43.8757)" fill="#F6CF9E"/>
                                            <rect width="38.9869" height="18.3844" rx="9.19222" transform="matrix(-0.914571 0.404424 -0.387002 -0.922079 219.327 89.9927)" fill="#F6CF9E"/>
                                            <rect width="39.084" height="18.3548" rx="9.17738" transform="matrix(-0.973099 -0.230389 0.274754 -0.961515 214.436 145.463)" fill="#F6CF9E"/>
                                            <path d="M125.058 214.001C119.891 214.217 115.355 210.215 114.926 205.06L113.306 185.562C112.878 180.408 116.72 176.054 121.887 175.837C127.055 175.621 131.591 179.624 132.019 184.778L133.639 204.276C134.067 209.43 130.226 213.784 125.058 214.001Z" fill="#F6CF9E"/>
                                            <rect width="41.0907" height="17.5478" rx="8.77388" transform="matrix(0.545581 -0.838058 0.772553 0.63495 55 199.436)" fill="#F6CF9E"/>
                                            <rect width="38.7339" height="18.5028" rx="9.2514" transform="matrix(0.786 -0.618227 0.607921 0.793998 20 164.946)" fill="#F6CF9E"/>
                                            <rect width="38.9869" height="18.3844" rx="9.19222" transform="matrix(0.935862 0.352368 -0.370058 0.929009 10.8032 61)" fill="#F6CF9E"/>
                                            <rect width="38.9869" height="18.3844" rx="9.19222" transform="matrix(0.971384 -0.237514 0.219044 0.975715 0 119.26)" fill="#F6CF9E"/>
                                            <rect width="38.8584" height="18.4708" rx="9.23542" transform="matrix(-0.83002 -0.557734 0.603282 -0.797528 187.36 184.816)" fill="#F6CF9E"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_10_261" x1="111.851" y1="48" x2="111.851" y2="164.676" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFC181"/>
                                                    <stop offset="1" stop-color="#F0C777"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>`;;
            } else if (mainWeather == "Rain") {
                weatherIcon.innerHTML = `<svg width="216" height="198" viewBox="0 0 216 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="71.5769" cy="182.906" rx="6.5" ry="13.5" transform="rotate(19.1934 71.5769 182.906)" fill="#00BCFF"/>
                                            <ellipse cx="114.577" cy="182.906" rx="6.5" ry="13.5" transform="rotate(19.1934 114.577 182.906)" fill="#00BCFF"/>
                                            <ellipse cx="154.577" cy="182.906" rx="6.5" ry="13.5" transform="rotate(19.1934 154.577 182.906)" fill="#00BCFF"/>
                                            <rect y="66.7595" width="215.473" height="89.0127" rx="44" fill="#D9E2E9"/>
                                            <ellipse cx="113.319" cy="55.6329" rx="61.9623" ry="55.6329" fill="#D9E2E9"/>
                                        </svg>`;
            } else if (mainWeather == "Drizzle") {
                weatherIcon.innerHTML = `<svg width="272" height="259" viewBox="0 0 272 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="163.852" cy="106.338" rx="60.8515" ry="58.3381" fill="url(#paint0_linear_0_1)"/>
                                    <rect width="41.3954" height="17.515" rx="8.75751" transform="matrix(0.753349 0.65762 -0.764439 0.644696 93.3892 22.5511)" fill="#F6CF9E"/>
                                    <rect width="38.2948" height="18.7291" rx="9.36456" transform="matrix(0.156472 0.987682 -0.993267 0.115844 157.847 0)" fill="#F6CF9E"/>
                                    <rect width="41.0907" height="17.5478" rx="8.77388" transform="matrix(-0.481935 0.876207 -0.817509 -0.575916 217.171 11.1058)" fill="#F6CF9E"/>
                                    <rect width="38.7339" height="18.5028" rx="9.2514" transform="matrix(-0.737993 0.674808 -0.665123 -0.746733 256.375 43.8757)" fill="#F6CF9E"/>
                                    <rect width="38.9869" height="18.3844" rx="9.19222" transform="matrix(-0.914571 0.404424 -0.387002 -0.922079 271.327 89.9927)" fill="#F6CF9E"/>
                                    <rect width="39.084" height="18.3548" rx="9.17738" transform="matrix(-0.973099 -0.230389 0.274754 -0.961515 266.437 145.463)" fill="#F6CF9E"/>
                                    <rect width="38.8584" height="18.4708" rx="9.23542" transform="matrix(-0.83002 -0.557734 0.603282 -0.797528 239.36 184.816)" fill="#F6CF9E"/>
                                    <ellipse cx="71.5769" cy="243.887" rx="6.5" ry="13.5" transform="rotate(19.1934 71.5769 243.887)" fill="#00BCFF"/>
                                    <ellipse cx="114.577" cy="243.887" rx="6.5" ry="13.5" transform="rotate(19.1934 114.577 243.887)" fill="#00BCFF"/>
                                    <ellipse cx="154.577" cy="243.887" rx="6.5" ry="13.5" transform="rotate(19.1934 154.577 243.887)" fill="#00BCFF"/>
                                    <rect y="127.74" width="215.473" height="89.0127" rx="44" fill="#D9E2E9"/>
                                    <ellipse cx="113.319" cy="116.613" rx="61.9623" ry="55.6329" fill="#D9E2E9"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_0_1" x1="163.852" y1="48" x2="163.852" y2="164.676" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFC181"/>
                                                <stop offset="1" stop-color="#F0C777"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>`;
            }
        }

    } catch (error) {
        console.error("Error obteniendo el clima:", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

// Carga inicial
checkWeather("Barcelona");