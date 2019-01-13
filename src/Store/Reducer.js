import * as actionTypes from './Actions';

const initialState = {
    alphavantageKey:'8QEUI4X',
    shares: [
     {symbol:'INX',name:"S&P 500", price:3},
     {symbol:'DJI',name:"Dow 30", price:5},
     {symbol:'NDX',name:"Nasdaq", price:50},
     {symbol:'AMZN',name:"Amazon.com", price:-10},
     {symbol:'GOOGL',name:"Alphabet Inc", price:-80}],
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
                    if(!data.Note){
                        shares[i].data = data;
                        //get last price of stock using the last refreshed attr
                        let lastRef = data["Meta Data"]? data["Meta Data"]["3. Last Refreshed"]:[];
                        let timesArr = data["Time Series (1min)"];
                        //Set properties of shares
                        shares[i]["Last Refreshed"] = lastRef;
                        shares[i].price = timesArr[lastRef]["4. close"]
                        let obj = Object.keys(timesArr)
                        let lastRefreshIdx = 0;
                        let hourlyData = [];
                        let times = [];
                        while(lastRefreshIdx<360){
                            hourlyData.push(parseFloat(timesArr[obj[lastRefreshIdx]]['4. close']));
                            //Push only the hour part
                            times.push(obj[lastRefreshIdx].substr(11))
                            lastRefreshIdx++;
                        }
                        shares[i].data = hourlyData;
                        shares[i].times = times.reverse();
                        
                        //USING LOCAL STORAGE - IN ORDER NOT TO MAKE A LOT OF API CALLS
                        localStorage.setItem(`data${i}`,JSON.stringify(shares[i].data))
                        localStorage.setItem(`times${i}`,JSON.stringify(shares[i].times))
                        console.log(shares)
                    }else{
                        //Using local storge when not getting data from api
                        shares[i].data = JSON.parse(localStorage.getItem(`data${i}`))
                        shares[i].times =  JSON.parse(localStorage.getItem(`times${i}`))
                    }
                })
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