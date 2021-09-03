import React from 'react';
import s from '../../sass/pages/faqPage.module.scss'
import {useSelector} from "react-redux";
import Layout from "../components/Layout";
import Accordion from "../components/Accordion/Accordion";

const FaqPage = ({faqPage}) => {
    const stateData = useSelector(state => state.lang)
    return (
        <Layout>
            <article className={s.faqPage}>
                <div className={s.layer}>
                    <section className={`container ${s.content}`}>
                        {
                            faqPage && faqPage.length > 0 &&
                            <Accordion list={faqPage}/>
                        }
                    </section>
                </div>
            </article>
        </Layout>
    );
};

export default FaqPage;
