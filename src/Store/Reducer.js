import * as actionTypes from './Actions';

const initialState = {
    alphavantageKey:'8QEUI4X',
    shares: [
     {symbol:'INX',name:"S&P 500"},
     {symbol:'DJI',name:"Dow 30"},
     {symbol:'NDX',name:"Nasdaq",},
     {symbol:'AMZN',name:"Amazon.com",},
     {symbol:'GOOGL',name:"Alphabet Inc",}],
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
        case actionTypes.UPDATE_TIMES:
        //TODO: CHECK HOW TO MAKE IT SYNCHROUNSLY
            let {shares,shareNum} = state;
            for(let i=0; i<shares.length; i++){
                let percentage;
                let startDayPrice;
                let endDayPrice;
                fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${shares[i].symbol}&interval=1min&outputsize=full&apikey=${state.alphavantageKey}`)
                .then(response => response.json())
                .then(data => {
                    if(!data.Note){
                        shares[i].data = data;
                        //get last price of stock using the last refreshed attr
                        let lastRef = data["Meta Data"]? data["Meta Data"]["3. Last Refreshed"]:[];
                        let timesArr = data["Time Series (1min)"];
                        //Set properties of shares
                        shares[i].price = timesArr[lastRef]["4. close"]
                        endDayPrice = shares[i].price;
                        let obj = Object.keys(timesArr)
                        let lastRefreshIdx = 0;
                        let hourlyData = [];
                        let times = [];
                        while(lastRefreshIdx<360){
                            hourlyData.push(parseFloat(timesArr[obj[lastRefreshIdx]]['4. close']));
                            //Push only the hour part
                            times.push(obj[lastRefreshIdx].substr(11))
                            
                            if(lastRefreshIdx==358){
                                startDayPrice = parseFloat(timesArr[obj[lastRefreshIdx]]['4. close'])
                                let absVal = Math.round((endDayPrice - startDayPrice)*10000)/10000
                                percentage = (absVal/startDayPrice)*100
                                shares[i].percentage = percentage;
                                shares[i].absVal = absVal
                            }
                            lastRefreshIdx++;
                        }
                        shares[i].data = hourlyData.reverse();
                        shares[i].times = times.reverse();
                        
                        //USING LOCAL STORAGE - IN ORDER NOT TO MAKE A LOT OF API CALLS
                        localStorage.setItem(`shares${i}`,JSON.stringify(shares[i].data))
                        localStorage.setItem(`times${i}`,JSON.stringify(shares[i].times))
                        localStorage.setItem(`price${i}`,JSON.stringify(shares[i].price))
                        localStorage.setItem(`percentage${i}`,JSON.stringify(shares[i].percentage))
                        localStorage.setItem(`absVal${i}`,JSON.stringify(shares[i].absVal))
                        console.log(shares)
                    }else{
                        //Using local storge when not getting data from api
                        shares[i].data = JSON.parse(localStorage.getItem(`data${i}`))
                        shares[i].times =  JSON.parse(localStorage.getItem(`times${i}`))
                        shares[i].price =  JSON.parse(localStorage.getItem(`price${i}`))
                        shares[i].percentage =  JSON.parse(localStorage.getItem(`percentage${i}`))
                        shares[i].absVal =  JSON.parse(localStorage.getItem(`absVal${i}`))
                    }
                })
            }
            console.log(shares)
            return {
                ...state,
                shares: shares
            }
    }
    return state;
};

export default Reducer;