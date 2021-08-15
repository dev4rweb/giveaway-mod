import React from 'react';
import s from "../../sass/pages/HomePage.module.scss";
import CustomSelect from "./UI/CustomSelect";

const GameContainer = () => {
    return (
        <section className="container">
            <div className={`container ${s.selectWrapper}`}>
                <CustomSelect />
            </div>
        </section>
    );
};

export default GameContainer;
