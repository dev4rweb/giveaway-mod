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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores iusto numquam quisquam rerum
                voluptatem voluptatibus! Accusantium cumque dolorum eos eveniet excepturi, laborum officia, porro,
                provident quia saepe sequi tempora voluptate. Deserunt esse et eum explicabo ipsam itaque nihil, odio
                optio sapiente sequi similique, sint tenetur! Ducimus earum nesciunt repellat.</p>
            <button
                className="btn btn-warning"
                onClick={handleClick}
            >
                {stateData.home.visit[stateData.lang]}
            </button>
        </div>
    );
};

export default CheckWebsiteDetails;
