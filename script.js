

async function fun(){
    try {
        let divElement = document.createElement("div");
        divElement.setAttribute('class','container');
        let title = document.createElement("h1");
        title.setAttribute('class','text-center');
        title.setAttribute('id','title');
        title.innerHTML = "Country Details";
        divElement.appendChild(title);

        let div2 = document.createElement("div");
        div2.setAttribute('class','row');
        divElement.appendChild(div2);
        
        let body = document.querySelector('body');
        body.appendChild(divElement);

        let response = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
        let data = await response.json();
        console.log(data[0].name);

        for (let i = 0; i < data.length; i++) {
        div2.innerHTML += `
        <div class="card text-center m-0 p-0 col-lg-4 col-sm-12">
        <p class="card-header bg-dark text-light m-0 p-2">${data[i].name}</p>
        
        <div class="card-body">
            <img class="img-fluid rounded img-thumbnail" src="india-flag.jpg" alt="Flag"/>
            <p>Capital : ${data[i].capital}</p>
            <p>Region : ${data[i].region}</p>
            <p>Country Code : ${data[i].alpha3Code}</p>
            <p>latlang : ${data[i].latlng}</p>
            <button class="btn btn-primary">Click for Weather</button>
        </div>
        </div>`;
        };
        let weatherData = document.querySelector('.btn');
        weatherData.addEventListener('click', async() => {

            // let response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[i].latlng[0]}&lon=${data[i].latlng[1]}&appid=20e4ab537600bb7494f3b1cbcd2147e0`);
            // let data1 = await response1.json();
            
            window.open(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].latlng[0]}&lon=${data[0].latlng[1]}&appid=20e4ab537600bb7494f3b1cbcd2147e0`,"","location=center");


        });
    }catch(err){
        console.log("Error");
    }
}

fun();