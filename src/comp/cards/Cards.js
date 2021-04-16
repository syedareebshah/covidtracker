import { useState, useEffect } from 'react';
import style from './cards.module.css'
import BarChart from '../Chart/chart';

const Cards = (props) => {

    let [state, setStete] = useState([])
    let [msg,setMsg] = useState('')

    let date = new Date();

    let Query = props.countryName.country;

    let url = `https://corona.lmao.ninja/v2/countries/${Query}?yesterday=true`

    let global_url = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats'

    let fetchData = async () => {
        try {
            let response = await fetch(url);
            let fetchGot = await response.json()
            setStete(fetchGot);
            setMsg("CountryData")
        }
        catch (err) {
            console.log(err, "error")
        }
    }

    let globalFetch = async () => {
        try {
            let globalData = await fetch(global_url)
            let gotData = await globalData.json();
            let x = gotData.data
            x['cases'] = x['total_cases']
            x['deaths'] = x['death_cases']
            x['recovered'] = x['recovery_cases']
            let obj = {
                cases: x.cases,
                deaths: x.deaths,
                recovered: x.recovered
            }
            setStete(obj)
            setMsg("GlobalData")
        }
        catch (err) {
            console.log("error", err)
        }
    }


    useEffect(() => {
        let dummy = async () => {
            if (Query === 'Global') {
                await globalFetch()
            }
            else {
                await fetchData();
            }
        }
        dummy()

    }, [Query])


    return (
        <div>
            <div className={style.card}>
                <div className={style.innerCard}>
                    <h3>New Confirmed Cases</h3>

                    <h3>{state.cases}</h3>

                    <p>Dated: {date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</p>
                </div>
                <div className={style.innerCard}>
                    <h3>New Confirmed Deaths</h3>
                    <h3>
                        {state.deaths}
                    </h3>
                    <p>Dated: {date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</p>

                </div>
                <div className={style.innerCard}>
                    <h3>New Confirmed Recovered</h3>
                    <h3>
                        {state.recovered}
                    </h3>
                    <p>Dated: {date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</p>

                </div>
            </div>
            <BarChart report={state} msg={msg} />
        </div>
    );
}

export default Cards;