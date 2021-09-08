import React, {useEffect, useState} from 'react';
import s from '../../../sass/components/ModalDrawWinner.module.scss'
import {useDispatch, useSelector} from "react-redux";
import DrawTable from "../tables/DrawTable";
import {createWinner} from "../../actions/winners";
import {updateGift} from "../../actions/gifts";
import {updateGame} from "../../actions/games";
import {setError, setLoading} from "../../reducers/errorReducer";

let users = []

const DrawWinner = () => {
    const dispatch = useDispatch()
    const editDrawWinner = useSelector(state => state.games.editDrawWinner)
    const [keys, setKeys] = useState(editDrawWinner.gifts.filter(gift => gift.user_id == null))
    // const allGames = useSelector(state => state.games.games)
    const [candidates, setCandidates] = useState(editDrawWinner.users)
    const [canChange, setCanChange] = useState(true)
    const stateData = useSelector(state => state.lang);


    // console.log('Draw winner all users', allGames.find(item => item.id === editDrawWinner.id).users);
    // console.log('Draw winner all candidates', editDrawWinner.users);

    function getCandidates() {
        let items = []
        for (let i = 0; i < keys.length; i++) {
            if (users.length > 0) {
                let item = Math.floor(Math.random() * users.length);
                items.push(users[item]);
                users.splice(item, 1);
            } else {
                setCanChange(true)
            }
        }
        // console.log('getCandidates users', users)
        // console.log('getCandidates items', items)
        setCandidates(items)
    }

    useEffect(() => {
        // console.log('useEfect')
        if (keys.length > candidates.length) {
            setCanChange(true)
        } else if (keys.length === candidates.length) {
            setCanChange(true)
        } else {
            setCanChange(false)
            users = candidates
            getCandidates()
        }
    }, []);

    const changeOneCandidate = (user) => {
        // console.log('changeOneCandidate', user)user
        // UPDATE STATE IN ARRAY OBJECT USING SPREAD
        if (users.length > 0) {
            let items = candidates;
            let index = items.indexOf(user)
            let randomItem = Math.floor(Math.random() * users.length)
            let randomUser = users[randomItem]
            if (index !== -1) {
                items[index] = randomUser
                let markers = [...candidates]
                markers[index] = {...markers[index], key: randomUser}
                setCandidates(markers)
                // console.log('markers', markers)
                users.splice(randomItem, 1)
            } else setCanChange(true)
            // console.log('changeOneCandidate', randomUser, ' - ', items);
        } else setCanChange(true)
    };

    const submitHandler = ev => {
        // console.log('submitHandler')
        getCandidates()
    };

    const sendEmail = user => {
        dispatch(setLoading(true))
        const fd = new FormData()
        for (let key in user) fd.set(key, user[key])

        axios.post('/send-key', fd)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.data.message))
            .finally(() => dispatch(setLoading(false)))
    };

    const acceptWinners = () => {
        for (let i = 0; i < candidates.length; i++) {
            const winner = {
                user_id: candidates[i].id,
                game_id: editDrawWinner.id
            }
            dispatch(createWinner(winner))
            const gift = {
                id: keys[i].id,
                user_id: candidates[i].id,
                giftKey: keys[i].giftKey,
            }
            dispatch(updateGift(gift))

             const user = {
                 name: candidates[i].name,
                 email: candidates[i].email,
                 giveawayName: editDrawWinner.name,
                 giveDesc: editDrawWinner.description,
                 gift: keys[i].giftKey
             }

            sendEmail(user)
        }
/*        const user = {
            name: candidates[0].name,
            email: candidates[0].email,
            giveawayName: editDrawWinner.name,
            giveDesc: editDrawWinner.description,
            gift: keys[0].giftKey
        }
        sendEmail(user)*/
    };

    const handleFinish = async ev => {
        console.log('handleFinish game', editDrawWinner)
        console.log('handleFinish candidates', candidates)
        acceptWinners()
        // game.status = 1
        // console.log('handleFinish game', game)
        let game = {
            id: editDrawWinner.id,
            status: 1
        }
        await dispatch(updateGame(game))
        dispatch(setError('users emails sent'))
        window.location.reload()
    };

    return (
        <div>
            <h5 style={{color: '#fbb527'}}>Draw Winner</h5>
            <div className={s.modalDrawWinner}>
                <p>amount of added keys: {keys.length}</p>
                <div className={s.btnWrapper}>
                    <button
                        className="btn btn-warning w-100"
                        onClick={submitHandler}
                        disabled={canChange}
                    >
                        {stateData.admin.createGive.btnDraw[stateData.lang]}
                    </button>
                </div>

                <div className="mt-5 mb-5 text-center">
                    {
                        candidates.length > 0 ?
                            <DrawTable
                                users={candidates}
                                canChange={canChange}
                                changeOneCandidate={changeOneCandidate}
                            />
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
