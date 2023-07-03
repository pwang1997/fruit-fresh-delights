
import { useEffect } from "react";
import bundles from "../mock/bundles.json";
import fruits from "../mock/fruits.json";

function Home() {

    useEffect(()=> {
        console.log({fruits, bundles});
    })
    
    return(
        <div>
            HOME
        </div>
    )
}

export default Home;