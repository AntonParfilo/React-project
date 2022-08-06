import React from "react";
import s from "./footer.module.css";


const Footer = ()=>{


    return(
        <div className={`${s.footer_wrapper} row`} id="footer" >
            <div className={`${s.lc} col-md-4`} >
                <img className={s.footer_logo} src="/img/navbar/logo.png" alt="logo" />
                <div className={s.footer_links} >
                    <img src="/img/footer/instagram.png" alt="instagram" />
                    <img src="/img/footer/telegram.png" alt="instagram" />
                    <img src="/img/footer/facebook.png" alt="instagram" />
                    <img src="/img/footer/viber.png" alt="instagram" />
                    <img src="/img/footer/watsupp.png" alt="instagram" />
                </div>
            </div>
            <div className={`${s.cc} col-md-4`} >
                <div className={s.footer_call}>
                    <img src="/img/footer/call.png" alt="call" />
                    <h3>0 800 505 555</h3>
                </div>
                <div className={s.footer_call}>
                    <img src="/img/footer/call.png" alt="call" />
                    <h3>0 800 303 333</h3>
                </div>
                <p>Developers 2018-2022 © All rights reserved</p>
            </div>
            <div className={`${s.rc} col-md-4`} >
                <p>Учебный проект</p>
                <div className={s.footer_text}>
                    <b>React</b><b>Redux</b><b>Saga</b>
                </div>
                <div className={s.footer_text}>
                    <b>React-router</b><b>Axios</b><b>Bootstrap</b>
                </div>
                
            </div>
        </div>
    )
}
export default Footer;