import React, { useEffect, useState } from "react";
//import { Link, Outlet, Route, Routes } from "react-router-dom";


import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './style.css'

export default function Series() {
    const baseUrl = 'https://gateway.marvel.com/v1/public'
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/series?ts=1&apikey=d781254a480edce1c3a28770fb303244&hash=85e2f7ba75867851a2fb9d7ea4d5764a`)
            .then(response => {
                console.log(response.data.data.results)
                setData(response.data.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>  
            <div className="container pt-5">
                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-2 d-flex justify-content-center py-3 rounded-5"}
                         style={{backgroundColor: "rgba(38,30,30,0.56)"}}>
                        <h2>Series
                        </h2>
                    </div>
                </div>
                <div className="row text-uppercase mt-5">
                    {data.map((item) => (
                        <div className="mb-4 mx-5 p-2 col-3 text-center fw-bold">
                            <p style={{fontFamily:"Britannic bold",fontSize:"25px"}}>{item.title}</p>

                            
                            <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" style={{ height: "10rem" }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}