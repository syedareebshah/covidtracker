import { useState , useEffect} from 'react';
import style from './cards.module.css'

const Cards = (props) => {

    let [state,setStete] = useState([])

    let date = new Date();

    let Query = props.countryName.country;

    

    let url = `https://corona.lmao.ninja/v2/countries/${Query}?yesterday=true`
    let global_url = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats'

        let fetchData = async () => {
        let response = await fetch(url)
            .then((response) =>  response.json())
            .then((json) => setStete(json));
            
    }

    let globalFetch = async ()=> {
        let globalData = await fetch(global_url)
            .then((globalData) =>  globalData.json())
            .then((json) => setStete(json));
            
    }

    // console.log( )


    useEffect(() => {
        if(Query === 'Global'){
            globalFetch()
            console.log("gggg",state)
        }
        else{
            fetchData();
        }

    },[Query])

    return (
        <div>
            <div className={style.card}>
                <div className={style.innerCard}>
                    <h3>Today's New Cases</h3>
                    <h3>{state.todayCases}</h3>
                    <p>Dated: {date.getDate()} {date.getMonth() + 1 } {date.getFullYear()}</p>
                </div>
                <div className={style.innerCard}>
                    <h3>Today's Confirmed Deaths</h3>
                    <h3>{state.todayDeaths}</h3>
                    <p>Dated: {date.getDate()} {date.getMonth() + 1 } {date.getFullYear()}</p>

                </div>
                <div className={style.innerCard}>
                    <h3>Today's Recovered</h3>
                    <h3>{state.todayRecovered}</h3>
                    <p>Dated: {date.getDate()} {date.getMonth() + 1 } {date.getFullYear()}</p>

                </div>
            </div>
        </div>
    );
}

export default Cards;