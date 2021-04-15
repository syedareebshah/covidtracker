import { useEffect, useState } from "react";
import NativeSelects from "./comp/Chart/BarChart";

const Prec = (props) => {
    let [death, setDeath] = useState([])

    // https://corona.lmao.ninja/v2/countries/:query?yesterday=true&strict=true&query
    // https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats

//     let Query = props.name;
//     let url = `https://corona.lmao.ninja/v2/countries/${Query}?yesterday=true`

//         let fetchData = async () => {
//         let response = await fetch(url)
//             .then((response) => response.json())
//             .then((json) => setDeath(json));
            
//     }
// console.log(death,"...Prec....",props.name)
//     useEffect(() => {
//         fetchData();
//     }, [])

    return (
        <div>
            <h1>Total Cases</h1>
            {/* <h1>{death.data.total_cases}</h1> */}
            
        </div>
    );
}

export default Prec;