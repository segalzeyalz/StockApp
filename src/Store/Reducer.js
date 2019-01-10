import * as actionTypes from './Actions';

const initialState = {
    shares: [{name:"S&P 500"}, {name:"Dow 30"}, {name:"Nasdaq"}, {name:"Amazon.com"}, {name:"Alphabet Inc"}],
    shareNum:0
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_STOCK:
        return {
            ...state,
            shareNum:state.shareNum+1
        }

    }
    return state;
};

export default Reducer;