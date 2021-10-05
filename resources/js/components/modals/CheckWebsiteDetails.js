import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    checkWebsiteClickAction,
    setModalVisitWebsiteAction
} from "../../reducers/modalReducer";

const CheckWebsiteDetails = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)

    const handleClick = e => {
        // console.log('CheckWebsiteDetails')
        dispatch(setModalVisitWebsiteAction(false))
        dispatch(checkWebsiteClickAction(true))
    };

    return (
        <div>
            <p
                style={{
                    textAlign: 'center',
                    padding: '20px 0'
                }}
            >
                Get your points for visiting our website
            </p>
            <div
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <button
                    className="btn btn-warning"
                    onClick={handleClick}
                >
                    {stateData.home.visit[stateData.lang]}
                </button>
            </div>
        </div>
    );
};

export default CheckWebsiteDetails;
