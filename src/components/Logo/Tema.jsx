'use client'
import { BsSun, BsMoon } from "react-icons/bs"
import { useState } from "react";
import Style from "./Styles.module.css"

export default function Temas(){

    const[tema, setTema] = useState(false)

    function trocartema(){
        setTema(!tema)
    }

    return(
        <div className={Style}>
            <button onClick={trocartema}>
                {tema ? <BsSun/> : <BsMoon/> }
            </button>
        </div>
    )
}