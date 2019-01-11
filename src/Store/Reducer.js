import * as actionTypes from './Actions';

const initialState = {
    shares: [
     {symbol:'INX',name:"S&P 500"},
     {symbol:'DJI',name:"Dow 30"},
     {symbol:'NDX',name:"Nasdaq"},
     {symbol:'AMZN',name:"Amazon.com"},
     {symbol:'GOOGL',name:"Alphabet Inc"}],
    shareNum:0,
    currencyRate:0,
    timesRate:{}
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
        case actionTypes.UPDATE_CURRENCY_RATE:
            let newCurrency = action.newCurrency['Realtime Currency Exchange Rate']['5. Exchange Rate']
            return {
                ...state,
                currencyRate:newCurrency
            }
        case actionTypes.UPDATE_TIMES:
            let newTime = action.newTime
            let newTIme = newTime["Time Series (5min)"];
            console.log(newTime)
            console.log(newTIme)

            // for(var i=0; i<360; )

            return {
                ...state,
                timesRate:newTime
            }
        case actionTypes.UPDATE_CURRENCY:
            return {
                ...state
                        }
    }
    return state;
};

export default Reducer;