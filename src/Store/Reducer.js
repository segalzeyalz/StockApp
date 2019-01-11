import * as actionTypes from './Actions';

const initialState = {
    shares: [
     {symbol:'INX',name:"S&P 500", price:''},
     {symbol:'DJI',name:"Dow 30", price:''},
     {symbol:'NDX',name:"Nasdaq", price:''},
     {symbol:'AMZN',name:"Amazon.com", price:''},
     {symbol:'GOOGL',name:"Alphabet Inc", price:''}],
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
        //TODO: CHECK HOW TO MAKE IT SYNCHROUNSLY
        let lastValDate = action.newTime["Meta Data"] && action.newTime["Meta Data"]["3. Last Refreshed"]
        let newPrice = action.newTime["Time Series (1min)"] && action.newTime["Time Series (1min)"][lastValDate]['5. volume']
        let sharesUpdate = state.shares;
        sharesUpdate[state.shareNum] ={...sharesUpdate[state.shareNum], price:newPrice}
            return {
                ...state,
                shares: sharesUpdate
            }
        case actionTypes.UPDATE_CURRENCY:
            return {
                ...state
                        }
    }
    return state;
};

export default Reducer;