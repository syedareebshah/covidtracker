import React from 'react';
import { Bar } from 'react-chartjs-2';




function BarChart(props) {
    
    
    let TotalCases = parseInt(props.report.cases)
    let TotalDeaths = parseInt(props.report.deaths)
    let TotalRecovered = parseInt(props.report.recovered)

    
    const data = {
        labels: ['Total Cases', 'Total Deaths', 'Total Recovered'],

        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: [
                 'blue', 'red', 'green'
                ],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [TotalCases, TotalDeaths, TotalRecovered]
            }
        ]
        
    };

    return (
        <div>
            <h2>Bar Example (custom size)</h2>
            <Bar
                data={data}
                width={100}
                height={100}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );

}


export default BarChart;



