import React from 'react';
import { Bar } from 'react-chartjs-2';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewCom from '../../Pie';


function BarChart(props) {
       
    let TotalCases = parseInt(props.report.cases)
    let TotalDeaths = parseInt(props.report.deaths)
    let TotalRecovered = parseInt(props.report.recovered)
    console.log(props)
    
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
    if(props.msg === "GlobalData"){

        return(
            <div>
                <NewCom countryData={props.report} />
            </div>
        )
        
        
    }else if(props.msg === "CountryData")
    {
        return (
            <div>
                <Bar
                    data={data}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
    else{
        return(
            <div>
                <CircularProgress color="secondary" />
            </div>
        )
    }
        
}


export default BarChart;



