import { useEffect, useState } from "react";
import axios from 'axios';

export default

function Recipe() {

    const [data, setData] = useState([]);


    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res)=>setData(res.data))
    }, []);

    return (
        <div className="recipe">
            <ul>
                data
                .filter(())
            </ul>
        </div>
    );
}

