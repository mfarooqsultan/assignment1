/*38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/

function describe_city(city:string,countryName:string="Pakistan"){
    console.log(`${city} is  in ${countryName} `)}

    describe_city("karachi")
    describe_city("Dhaka","Bangladesh")
    describe_city("Paris","France")
