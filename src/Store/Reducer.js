import * as actionTypes from './Actions';

const initialState = {
    alphavantageKey:'8QEUI4X',
    shares: [
     {symbol:'INX',name:"S&P 500", price:3, isLoadig:true},
     {symbol:'DJI',name:"Dow 30", price:5, isLoadig:true},
     {symbol:'NDX',name:"Nasdaq", price:50, isLoadig:false},
     {symbol:'AMZN',name:"Amazon.com", price:-10, isLoadig:false},
     {symbol:'GOOGL',name:"Alphabet Inc", price:-80, isLoadig:true}],
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
                fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${shares[shareNum].symbol}&interval=1min&outputsize=full&apikey=${state.alphavantageKey}`)
                .then(response => response.json())
                .then(data => {
                    shares[i].data = data;
                    //get last price of stock using the last refreshed attr
                    let lastRef = data["Meta Data"]["3. Last Refreshed"];
                    let timesArr = data["Time Series (1min)"];
                    //Set properties of shares
                    shares[i]["Last Refreshed"] = lastRef;
                    shares[i].loading = false;
                    shares[i].price = timesArr[lastRef]["4. close"]
                    let obj = Object.keys(timesArr)
                    let lastRefreshIdx = 0;
                    let hourlyData = [];
                    while(lastRefreshIdx<360){
                        hourlyData.push(parseFloat(timesArr[obj[lastRefreshIdx]]['4. close']));
                        lastRefreshIdx++;
                    }

                    shares[i].data = hourlyData;

                })
                .catch(err=> shares[i].loading=true)
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