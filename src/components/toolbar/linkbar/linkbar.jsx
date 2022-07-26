import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import s from "./linkbar.module.css"



const LinkBar = ()=>{
    const [top_distance, setTopDistance] = useState(0);
    const [isFixed, setFixed] = useState(false);
    const [scroll_start, setScrollStart] = useState(0);
    
    useEffect(()=>{
        const element = document.getElementById('linkbar');
        let rect = element.getBoundingClientRect();
        let top = rect.top;
        setTopDistance(top);
        setScrollStart(window.scrollY);
    },[]);

    useEffect(()=>{
        if(top_distance !== 0) window.addEventListener("scroll", toScroll)
    },[top_distance]);

    function toScroll(el){
        if(top_distance - (el.target.documentElement.scrollTop-scroll_start) - 50 < 0) setFixed(true);
        else setFixed(false);    
    }


    return(
        <div className={isFixed? `${s.linkbar_wrapper} ${s.fixed}` : `${s.linkbar_wrapper}`} id="linkbar" >
            <div className={s.item_wrapper} >
                <a href="viber://chat?number=%2B380961825452">
                <div className={s.item}>
                    <div className={s.square} ></div>                
                    <svg className={s.item_img}>
                        <use xlinkHref="/img/toolbar/viber.svg#viber"></use>
                    </svg>
                    <p>Viber</p>
                </div>
                </a>
                
            </div>
            <div className={s.item_wrapper} >
                <a href="https://t.me/Anton_Parfilo">
                    <div className={s.item}>
                        <div className={s.square} ></div>
                        <svg className={s.item_img}>
                            <use xlinkHref="/img/toolbar/telegram.svg#telegram"></use>
                        </svg>
                        <p>Telegram</p>
                    </div>
                </a>
            </div>
            <div className={s.item_wrapper} >
            <a href="mailto:anton.parfilo@gmail.com">
                <div className={s.item}>
                <div className={s.square} ></div>
                    <svg className={s.item_img}>
                        <use xlinkHref="/img/toolbar/gmail.svg#gmail"></use>
                    </svg>
                    <p>Gmail</p>
                </div>
            </a>    
            </div>
            <div className={s.item_wrapper} >
            <a href="https://github.com/ragaban/">
                <div className={s.item}>
                <div className={s.square} ></div>
                    <svg className={s.item_img}>
                        <use xlinkHref="/img/toolbar/github.svg#github"></use>
                    </svg>
                    <p>GitHub</p>
                </div>
            </a>
            </div>
        </div>
    )
}
export default LinkBar;