const button = document.querySelector("#button")
            const inputValue = document.querySelector("#city")
            let name = document.querySelector("#name")
            let country = document.querySelector("#country")
            let latitude = document.querySelector("#latitude")
            let longitude = document.querySelector("#longitude")
            let desc = document.querySelector("#desc")
            let temp = document.querySelector("#temp")
            let tempRec = document.querySelector("#temp-rec")

            button.addEventListener("click", function(){
                fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+
            "&appid=b1437aa41de36fd6064af22ec73b8367&units=metric")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let nameValue = data["name"];
                    let countryValue = data["sys"]["country"];
                    let latitudeValue = data["coord"]["lat"]
                    let longitudeValue = data["coord"]["lon"]
                    let descValue = data["weather"][0]["description"]
                    let tempValue = data["main"]["temp"]

                    name.innerText = nameValue
                    country.innerText = `${nameValue} is in ${countryValue}`
                    //latitude.innerText = `${nameValue} has a latitude of ${latitudeValue} degrees from of the Equator`
                    //longitude.innerText = `${nameValue} has a longitude of ${longitudeValue} degrees from the Meridian Line`
                    desc.innerText = `${nameValue} has a weather description of ${descValue}`
                    temp.innerText = `${nameValue} has a temperature of ${tempValue} celcius`

                    if(latitudeValue < 0){
                        latitude.innerText = `${nameValue} has a latitude of ${latitudeValue} degrees (south of the Equator)`
                    } else{
                        latitude.innerText = `${nameValue} has a latitude of ${latitudeValue} degrees (north of the Equator)`
                    }
                    
                    if(longitudeValue < 0){
                        longitude.innerText = `${nameValue} has a longitude of ${longitudeValue} degrees (West of the Prime Meridian Line)`
                    } else{
                        longitude.innerText = `${nameValue} has a longitude of ${longitudeValue} degrees (East of the Prime Meridian Line`
                    }
                })
            .catch(err => alert("Wrong city name"))
            })