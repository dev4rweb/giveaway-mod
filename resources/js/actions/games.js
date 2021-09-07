import axios from "axios";
import {setError, setLoading} from "../reducers/errorReducer";
import {createNewGame, deleteGame, setGames, setUpdatedGame} from "../reducers/gameReducer";

/*https://laravel.com/docs/8.x/controllers#resource-controllers*/
/*https://youtu.be/TpVUDmUyAFs*/
export const getGames = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('/games')
            .then(res => {
                // console.log('success',res.data)
                if (res.data.success) {
                    dispatch(setGames(res.data.models));
                } else {
                    dispatch(setError(res.data.message))
                }
            })
            .catch(err => {
                // console.log('failure',err.response)
                // console.log('err - data',err.data)
                dispatch(setError(err.response.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    };
};

export const addGame = () => {
    const time = (Math.ceil(new Date(Date.now()).getTime()/1000))
    const fd = new FormData()
    fd.set('name', 'New Game')
    fd.set('startDate', time)
    fd.set('endDate', time)
    fd.set('description', 'description')
    fd.set('isCompetition', 0)
    fd.set('status', 2)
    fd.set('isFavorite', 1)
    fd.set('isSponsored', 0)

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/game/store', fd)
            .then(res => {
                if (res.data.success) {
                    console.log(res)
                    dispatch(createNewGame(res.data.model));
                    dispatch(setError(res.data.message))
                } else {
                    dispatch(setError(res.data.message))
                }
            })
            .catch(err => {
                // console.log('failure',err.response)
                // console.log('err - data',err.data)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    };
}

export const updateGame = (game) => {
    delete game.users
    delete game.gifts
    delete game.tasks
    delete game.winners
    game.status = 0
    const fd = new FormData()
    for (let key in game) {
        fd.set(key, game[key])
    }
    // console.log('updateGame',game)
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/game/update', fd)
            .then(res => {
                // console.log('result ', res)
                if (res.data.success) {
                    dispatch(setUpdatedGame(res.data.model));
                    // dispatch(setUpdatedGame(res.data.models));
                    dispatch(setError(res.data.message))
                } else {
                    dispatch(setError(res.data.message))
                }
            })
            .catch(err => {
                // console.log('failure',err.response)
                // console.log('err - data',err.data)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    };
};

export const removeGame = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.delete(`/game/${id}`)
            .then(res => {
                if (res.data.success) {
                    dispatch(deleteGame(id));
                    dispatch(setError(res.data.message))
                } else {
                    dispatch(setError(res.data.message))
                }
            })
            .catch(err => {
                // console.log('failure',err.response)
                // console.log('err - data',err.data)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    }
};
