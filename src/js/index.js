//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import Home from "./component/home.jsx";
let counter = 0
setInterval(() =>{
    if(counter>999999){
        counter=0
    }
    const six=Math.floor(counter/100000)
    const five=Math.floor((counter%100000)/10000)
    const four=Math.floor((counter%10000)/1000)
    const three=Math.floor((counter%1000)/100)
    const two= Math.floor((counter%100)/10)
    const one= Math.floor(counter%10)
    counter++
    //render your react application
ReactDOM.render(<Home digitSix={six} digitFive={five} digitFour={four} digitThree={three} digitTwo={two} digitOne={one}/>, document.querySelector("#app"));
},1000)



