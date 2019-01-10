import * as actionTypes from './Actions';

const initialState = {
    shares: [{name:"S&P 500"}, {name:"Dow 30"}, {name:"Nasdaq"}, {name:"Amazon.com"}, {name:"Alphabet Inc"}]
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {

    }
    return state;
};

export default Reducer;