const request = require('request');

const geocode = require("./data/geocode");
const forecast = require("./data/forecast");

const address = process.argv[2];

geocode(address,(error,data)=>{
    console.log("Error : ", error);
    console.log("Data : ", data);

    forecast(data.latitude,data.longtitude,(error,data)=>{
        console.log("Error : ", error);
        console.log("Data : ", data);
    })
})