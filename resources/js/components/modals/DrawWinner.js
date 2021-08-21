import React, {useState} from 'react';
import s from '../../../sass/components/ModalDrawWinner.module.scss'
import {useSelector} from "react-redux";
import DrawTable from "../tables/DrawTable";

const DrawWinner = () => {
    const stateData = useSelector(state => state.lang)
    const drawingWinner = useSelector(state => state.games.editDrawWinner)
    const [game, setGame] = useState(drawingWinner)

    const submitHandler = ev => {
        console.log('submitHandler')
    };

    const handleFinish = ev => {
        console.log('handleFinish')
    };

    return (
        <div>
            <h5 style={{color: '#fbb527'}}>Draw Winner</h5>
            <div className={s.modalDrawWinner}>
                <p>amount of added keys: {game.gifts.length}</p>
                <div className={s.btnWrapper}>
                    <button
                        className="btn btn-warning w-100"
                        onClick={submitHandler}
                    >
                        {stateData.admin.createGive.btnDraw[stateData.lang]}
                    </button>
                </div>

                <div  className="mt-5 mb-5 text-center">
                    {
                        game.users.length > 0 ?
                            <DrawTable users={game.users}/>
                            :
                            <h5>
                                No one users in this competition
                            </h5>
                    }
                </div>

                <div className={s.btnBox}>
                    <div className={s.btnWrapper}>
                        <div className='outline-radius'>
                            {/* <InertiaLink
                                    href="/"
                                    // method="post"
                                    as="button"
                                    type="button"
                                    className="btn btn-success w-100 btn-logout btn-draw"
                                >
                                    {stateData.admin.createGive.btnFinishComp[stateData.lang]}
                                </InertiaLink>*/}
                            <button
                                className="btn btn-success w-100 btn-logout btn-draw"
                                onClick={handleFinish}>
                                {stateData.admin.createGive.btnFinishComp[stateData.lang]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawWinner;
