import React, {useState} from 'react';
import s from "../../../sass/pages/HomePage.module.scss";
import CustomSelect from "../UI/CustomSelect";
import {useSelector} from "react-redux";
import GameBox from "./GameBox";
import Pagination from "../Pagination";

const GameContainer = () => {
    const allGames = useSelector(state => state.games.games)
    const allSponsorGames = useSelector(state => state.games.sponsorGames)
    let gamesOnePage = 2;
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        gamesOnePage = 4
    }
    if (window.innerWidth >= 1200) gamesOnePage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(gamesOnePage); // games in one page
    // Get current games
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame -gamesPerPage;
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    return (
        <section className="container">
            <div className={`container ${s.selectWrapper}`}>
                <CustomSelect />
            </div>
            {
                allGames.length > 0 && allSponsorGames &&
                <GameBox
                    sponsorGames={allSponsorGames}
                    games={currentGames}
                />
            }
            <div className={s.paginBox}>
                <Pagination
                    postsPerPage={gamesPerPage}
                    totalPosts={allGames.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </section>
    );
};

export default GameContainer;
