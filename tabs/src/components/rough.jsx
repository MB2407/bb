import React from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';


const Home = () => {
  
    const [urls, setUrls] = useState([]);
    useEffect(() => {
       fetch('https://bindings.azurewebsites.net/api/HttpTrigger2?code=OmtN8p8816s6JWr8p0rV5fdOUOS-ROJMUuvqaiMC4BNoAzFuOQP35Q==&id=docs')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setUrls(data);
             bleh = data;
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  return (
    <div className="urls-container">
      {urls.map((url) => {
         return (
            <div className="url-card" key={url.id}>
               <h2 className="url-title">{url}</h2>
               <h2 className="url-title">{url.a}</h2>

               
            </div>
         );
      })}
   </div>
    );
}

export default Home;

