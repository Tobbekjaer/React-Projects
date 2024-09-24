import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound(){
    const navigate = useNavigate()
    useEffect(() =>{
        setTimeout(() => {
            navigate('/', {state : "Page Not Found"}) // (-1) moves back a pages 
        }, 1000);
    })
    return <h1>Not Found</h1>
}