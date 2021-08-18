import React from 'react';
import '../../../sass/components/ToggleBtn.scss'
import {useSelector} from "react-redux";
import {booleanConverter} from "../../utils/booleanConverter";

const ToggleBtn = ({game, setGame}) => {
    const stateData = useSelector(state => state.lang)
    // console.log('ToggleBtn' , game)


    const handleClick = (ev) => {
        // console.log('handleClick name', ev.target.name.includes('giveaway'))
        // console.log('handleClick value', ev.target.checked)
        // console.log('handleClick value', ev.target.checked ? 1 : 0)
        if (ev.target.name.includes('giveaway')) {
            setGame({
                ...game,
                ['isCompetition']: !ev.target.checked ? 1 : 0
            })
        } else {
            setGame({
                ...game,
                ['isCompetition']: ev.target.checked ? 1 : 0
            })
        }
        // console.log('handleClick', game)
    };

    return (
        <div className="toggle-box">>
            <div className={`custom-control custom-switch`}>
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`customSwitch${game.id}`}
                    checked={!booleanConverter(game.isCompetition)}
                    onChange={handleClick}
                    name="giveaway"
                />
                <label
                    className="custom-control-label"
                    htmlFor={`customSwitch${game.id}`}
                >
                    <span className="toggle-placeholder"
                    >
                        {stateData.admin.createGive.give[stateData.lang]}
                    </span>
                </label>
            </div>
            <div className={`custom-control custom-switch`}>
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`customSwitch${game.id + 1}`}
                    checked={booleanConverter(game.isCompetition)}
                    onChange={handleClick}
                    name="competition"
                />
                <label
                    className="custom-control-label"
                    htmlFor={`customSwitch${game.id + 1}`}
                >
                    <span className="toggle-placeholder"
                    >
                        {stateData.admin.createGive.typeGive[stateData.lang]}
                    </span>
                </label>
            </div>

        </div>
    );
};

export default ToggleBtn;
