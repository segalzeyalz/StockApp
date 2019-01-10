import * as actionTypes from './Actions';

const initialState = {
    shares: [{name:"S&P 500"}, {name:"Dow 30"}, {name:"Nasdaq"}, {name:"Amazon.com"}, {name:"Alphabet Inc"}],
    shareNum:0
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_STOCK:
            let nextIdx = state.shareNum<state.shares.length-1? state.shareNum+1: 0;
            return {
                ...state,
                shareNum:nextIdx
            }
        case actionTypes.PREV_STOCK:
            let prevIdx = state.shareNum===0?state.shares.length-1: state.shareNum-1;            
            return {
                ...state,
                shareNum:prevIdx
            }
    }
    return state;
};

export default Reducer;