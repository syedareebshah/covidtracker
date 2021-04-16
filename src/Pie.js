import React from 'react';
import {Pie} from 'react-chartjs-2';
import './App.css'

let NewCom = (props) => {

    
    
    let a = parseInt(props.countryData.cases)
    let b = parseInt(props.countryData.deaths)
    let c = parseInt(props.countryData.recovered)
    
    const data = {
        labels: [
            'Total Cases',
            'Total Deaths',
            'Total Recovered'
        ],
        datasets: [{
            data: [a,b,c],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    

 
    return (
        <div className='PieChart'>
          <Pie data={data} />
        </div>
      );
}

export default NewCom;