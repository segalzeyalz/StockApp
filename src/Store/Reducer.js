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
            let {shares,shareNum} = state;
            for(let i=0; i<shares.length; i++){
                var data;
                fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${shares[shareNum].symbol}&interval=1min&outputsize=full&apikey=8QEUI4X`)
                .then(response => response.json())
                .then(data => {
                    data= data
                    let newdata = data
                    shares[i].data = newdata;
                    //get last price of stock using the last refreshed attr
                    return [newdata["Meta Data"],newdata['Time Series (1min)']]
                })
                .then(newdata=> {
                    console.log(newdata)
                })
                    // price = newdata["Time Series (1min)"][lastRef]["volume"];
                    // shares[i].price=price;
            }
            console.log(shares)
            return {
                ...state,
                shares: shares
            }
        case actionTypes.UPDATE_CURRENCY:
            return {
                ...state
                        }
    }
    return state;
};

export default Reducer;