import React, {useState} from 'react'
import s from '../../sass/components/Header.module.scss'
import {InertiaLink} from "@inertiajs/inertia-react";
import steamWhite from '../../assets/png/steam-icon-white.png'
import ReactFlagsSelect from 'react-flags-select';
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../reducers/translateReducer";

const Header = () => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.lang.lang)
    const stateData = useSelector(state => state.lang)
    let lng = language === 'en' ? 'GB' : 'RU'
    const [selected, setSelected] = useState(lng);

    function changeLanguage(code) {
        let lang = code === "GB" ? 'en' : 'ru'
        // console.log(code)
        setSelected(code)
        dispatch(setLang(lang))
        localStorage.setItem('lang', lang)
    }

    return (
        <header className={`container ${s.header}`}>
            <h1><InertiaLink href="/">Giveaway</InertiaLink></h1>
            <ReactFlagsSelect
                countries={["GB", "RU"]}
                selected={selected}
                onSelect={code => changeLanguage(code)}
                selectedSize={30}
                selectButtonClassName={s.langBtn}
            />
            <div className="btn-border">
                <button
                    className="btn btn-success"
                    onClick={event => window.open('/user-panel', '_self')}
                >
                    <img
                        src={steamWhite}
                        style={{marginRight: "20px"}}
                        alt="logo"
                    />
                    {stateData.loginWith[language]}
                </button>
            </div>
        </header>
    );
};

export default Header;
