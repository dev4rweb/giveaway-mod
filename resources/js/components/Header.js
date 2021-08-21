import React, {useState} from 'react'
import s from '../../sass/components/Header.module.scss'
import {InertiaLink} from "@inertiajs/inertia-react";
import steamWhite from '../../assets/png/steam-icon-white.png'
import ReactFlagsSelect from 'react-flags-select';
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../reducers/translateReducer";
import {setModalAuth} from "../reducers/modalReducer";

const Header = () => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.lang.lang)
    const stateData = useSelector(state => state.lang)
    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.user)
    let lng = language === 'en' ? 'GB' : 'RU'
    const [selected, setSelected] = useState(lng);

    // console.log(currentUser)

    function changeLanguage(code) {
        let lang = code === "GB" ? 'en' : 'ru'
        // console.log(code)
        setSelected(code)
        dispatch(setLang(lang))
        localStorage.setItem('lang', lang)
    }

    const handleLogin = (ev) => {
        // window.open('/login', '_self')
        dispatch(setModalAuth(true))
    };

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
                {
                    isAuth && currentUser.isAdmin == 1 &&
                        <InertiaLink
                            className="btn btn-success"
                            href="admin-panel"
                        >
                            <img
                                src={steamWhite}
                                style={{marginRight: "20px"}}
                                alt="logo"
                            />
                            {stateData.admin.heading[language]}
                        </InertiaLink>
                }

                {
                    isAuth && currentUser.isAdmin == 0 &&
                    <InertiaLink
                        className="btn btn-success"
                        href="user-panel"
                    >
                        <img
                            src={steamWhite}
                            style={{marginRight: "20px"}}
                            alt="logo"
                        />
                        {stateData.user.heading[language]}
                    </InertiaLink>
                }

                {
                    !isAuth &&

                    <button
                        className="btn btn-success"
                        onClick={handleLogin}
                    >
                        <img
                            src={steamWhite}
                            style={{marginRight: "20px"}}
                            alt="logo"
                        />
                        {stateData.loginWith[language]}
                    </button>
                }
            </div>
        </header>
    );
};

export default Header;
