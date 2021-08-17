import React from 'react';
import s from '../../../sass/components/GameDescription.module.scss'
import {useSelector} from "react-redux";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {CopyToClipboard} from "react-copy-to-clipboard/src/Component";
import {TelegramShareButton} from "react-share";
import steam from '../../../assets/png/steam-icon-white.png'
import share from '../../../assets/icons/share.png'

const GameDescription = () => {
    const stateData = useSelector(state => state.lang)
    const item = useSelector(state => state.modal.gameDescription)

    if (item)
        return (
            <div className={s.gameDesc}>
                <p>{item.name}</p>
                <div className={s.imageBox}>
                    {item.leftImage && <img className={s.left} src={item.leftImage} alt=""/>}
                    {item.rightImage && <img className={s.right} src={item.rightImage} alt=""/>}
                    {item.secondaryImage && <img className={s.center} src={item.secondaryImage} alt=""/>}
                </div>


                {item.description && <p className={s.content}>{item.description}</p>}
                {
                    item.isCompetition == 1 ?
                    <p className={s.content}
                       style={{textAlign: 'left', marginBottom: '10px', paddingLeft: '15px'}}>
                        {stateData.home.task[stateData.lang]}
                    </p>
                        : <p/>
                }

                {
                    item.isCompetition == 1 ?
                        <div className={s.links}>
                            <Tabs>
                                <TabList className={s.tasks}>
                                    {
                                        // item.taskOne &&
                                        <Tab><img src={steam} alt="steam"/></Tab>
                                    }
                                    {
                                        // item.taskTwo &&
                                        <Tab><img src={steam} alt="steam"/></Tab>
                                    }
                                    {
                                        // item.taskThree &&
                                        <Tab><img src={steam} alt="steam"/></Tab>
                                    }
                                </TabList>
                                <div>
                                    {
                                        // item.taskOne &&
                                        <TabPanel>
                                            <div className={s.subscribe}>
                                                <p><span>
                                                    {/*{translate(item.taskOneDesc)} : */}
                                                    Visit :
                                                </span>
                                                    {/*{item.taskOne}*/}
                                                    HTTPS://SOURCE-BYTE.COM/
                                                </p>
                                                {/*<CopyToClipboard text={item.taskOne}>*/}
                                                    <button className={s.clipboard}>{stateData.home.copy[stateData.lang]}</button>
                                                {/*</CopyToClipboard>*/}
                                            </div>
                                        </TabPanel>
                                    }
                                    {
                                        // item.taskTwo &&
                                        <TabPanel>
                                            <div className={s.subscribe}>
                                                <p><span>
                                                    {/*{translate(item.taskTwoDesc)} : */}
                                                    Subscribe :
                                                </span>
                                                    {/*{item.taskTwo}*/}
                                                    HTTPS://SOURCE-BYTE.COM/
                                                </p>
                                                {/*<CopyToClipboard text={item.taskTwo}>*/}
                                                    <button className={s.clipboard}>{stateData.home.copy[stateData.lang]}</button>
                                                {/*</CopyToClipboard>*/}
                                            </div>
                                        </TabPanel>
                                    }
                                    {
                                        // item.taskThree &&
                                        <TabPanel>
                                            <div className={s.subscribe}>
                                                <p><span>
                                                    {/*{translate(item.taskThreeDesc)} : */}
                                                    Repost :
                                                </span>
                                                    {/*{item.taskThree}*/}
                                                    HTTPS://SOURCE-BYTE.COM/
                                                </p>
                                                {/*<CopyToClipboard text={item.taskThree}>*/}
                                                    <button className={s.clipboard}>{stateData.home.copy[stateData.lang]}</button>
                                                {/*</CopyToClipboard>*/}
                                            </div>
                                        </TabPanel>
                                    }
                                </div>
                            </Tabs>
                        </div>
                        :
                        <div/>
                }

                <div className={s.btnWrapper}>
                    <TelegramShareButton
                        // url={item.link}
                        url="/"
                        className={s.share}
                        title={`Get the key`}>
                        <img src={share} alt="share"/>
                    </TelegramShareButton>
                    {/*<a href="#" className={s.share}><img src={share} alt="share"/></a>*/}
                    <button
                        className="btn btn-warning"
                    >
                        {stateData.home.get_key[stateData.lang]}
                    </button>
                </div>

            </div>
        );

    return (
        <div>No Item</div>
    )
};

export default GameDescription;
