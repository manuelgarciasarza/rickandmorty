import React from "react";
import style from "./about.module.css"

export default function Detail(props){
    return(
        <div className={style.conteiner}>
            <div>
                <div className={style.avatar}></div>
                <div className={style.name}></div>
            </div>
                <div className={style.info}>
            </div>
        </div>
    )
}