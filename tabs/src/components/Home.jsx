import React from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';

export default function Home(){
//const Home = () => {
  
    const [urls, setUrls] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://bindings.azurewebsites.net/api/HttpTrigger2?code=OmtN8p8816s6JWr8p0rV5fdOUOS-ROJMUuvqaiMC4BNoAzFuOQP35Q==&id=docs')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                //console.log(data.hasOwnProperty(3));
                for(let i=0;i<data.length;i++){
                    if (data.hasOwnProperty(data.a)){
                        console.log(data.a); 
                    }
                }
                setUrls(data.url);
            })}, []);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    

    // const [urls, setUrls] = useState([]);
    // useEffect(() => {
    // const urlss=await fetch('https://bindings.azurewebsites.net/api/HttpTrigger2?code=OmtN8p8816s6JWr8p0rV5fdOUOS-ROJMUuvqaiMC4BNoAzFuOQP35Q==&id=docs');
    // const mann=await urlss.json();//.then((response) => response.json())
    // console.log(mann);
    // this.setState
        //   .then((data) => {
        //      console.log(data);
        //      console.log(data.url);
             //console.log(data.a);
             //setUrls(data);
        //   })
        //   .catch((err) => {
        //      console.log(err.message);
        //   });
   // }, []);
  return (
     <div className="urls-container">
        {urls}
        
        {/* <div className="url-card">
            {urls}
        </div> */}
{/* //          //return (
//             <div className="url-card" key={urls.id}>
//                <h2 className="url-title">{urls}</h2>
//                <h2 className="url-title">{urls.a}</h2>

               
//             </div>
//          //);
//       })}  */}
    </div>
    );
}
//{urls.map((url) => {
//export default Home;


