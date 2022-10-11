import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js'

import {

   Chart as ChartJS,

   CategoryScale,

   LinearScale,

   BarElement,

   

 } from "chart.js";

 import { Bar } from "react-chartjs-2";

 

import {Doughnut} from "react-chartjs-2"

 

import Questionservice from './services/Question.service'

 

import { useEffect, useState } from 'react'

import Navbar from "./Profile/Comp1"



 

 

ChartJS.register(

   CategoryScale,

   LinearScale,

   BarElement,

   Title,

   Tooltip,

   Legend

 );

 

 

 

 

function DoughnutChart(props){

 

   const data2 = [

      4,

      5,

      3,

      5

   ]

 

   const options = {

      responsive: true,

      plugins: {

        legend: {

          position: "top",

        },

        title: {

          display: true,

          text: "Chart.js Bar Chart",

        },

      },

    };

 

      const labels2 = [

        "Aniket",

        "abhi67",

        "anik",

        "Avdhoot",

     

      ];

 

      const data22 = {

         labels: labels2,

         datasets: [

           {

             label: "No of ans give by username",

             data:data2,

             backgroundColor: "rgba(255, 99, 132, 0.5)",

           },

           

         ],

       };

 

     

 

   const [dataa,setDataa]=useState([])

 

useEffect(() => {

 

      // const token=JSON.parse(localStorage.getItem("auth-token"))

 

      Questionservice.returnAllQuestion().then(obj=>{

 

         // JSON.parse(localStorage.getItem("auth-token"))

 

         setDataa(obj.data);

 

         console.log("in sue",obj.data[0].categoryName)

 

      })

 

 

 

}, [])

 

   

 

   Chart.register(ArcElement, Tooltip, Legend, Title);

 

 

 

console.log("outside",dataa)

 

const questionData2 = dataa.map(myFunction);

 

   

 

function myFunction(value) {

 

  return `${value.categoryName}`;

 

}

 

console.log(questionData2)

 

var count = [];

 

questionData2.forEach(function(i) { count[i] = (count[i]||0) + 1;});

 

console.log(count);

 

const value = Object.values(count);

 

   console.log(Object.values(value))

 

   

 

 const key = Object.keys(count)

 

 console.log(key)

 

 var colourcount = key.length

 

 

 

 function getColorArray(colourcount) {

 

   var result = [];

 

   for (var i = 0; i < colourcount; i += 1) {

 

   var letters = '0123456789ABCDEF'.split('');

 

   var color = '#';

 

   for (var j = 0; j < 6; j += 1) {

 

   color += letters[Math.floor(Math.random() * 16)];

 

   }

 

   result.push(color);

 

   }

 

   return result;

 

   }

 

 

 

   var randomColourArray = getColorArray(colourcount)

 

 

 

    const data = {

 

       

 

        datasets: [{

 

        data: value,

 

        backgroundColor: randomColourArray,

 

      }],

 

 

 

      labels: key,

 

     

 

 };

 

 console.log(data.labels)

 

    return (

 

     <>

        <Navbar/>

        <div style={{ width: "500px", float: "left",}} class="md-6">

 

 

 

         

         <h2>Number Of Quetions by category </h2>

        <Doughnut data = {data}  />

       

 

       

 

        </div>

        <div style={{ width: "500px",height:"600px", float: "right" }}  class="md-6 rig">

         <h2> Number of ans give by username</h2>

         

        <Bar options={labels2} data={data22} />

      </div>

       

        </>

   

 

    )

 

   

 

}

 

 

 

export default DoughnutChart;