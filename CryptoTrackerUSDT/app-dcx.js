const currentPrice = document.getElementById('cp');
const conclusion = document.getElementById('conclusion');
let USDT_PRICE;
let COIN1 = prompt("Please enter Coin name", "usdt");
let COIN2 = prompt("Please enter Currency", "inr");

const BuySell = document.getElementById("mybuysellswitch");

const OnOff = document.getElementById('myonoffswitch');
OnOff.checked = false;

const priceAlert =()=>{
    if(OnOff.checked){
        if(document.getElementById('target').value === ''){
            alert("Please set the target price first!!");
            OnOff.checked = false;
            return false;
        }
        if(BuySell.checked){
            let targetPrice =(+ document.getElementById('target').value); 
            conclusion.innerHTML =`Waiting for Buy ${COIN1.toUpperCase()}!!`; 
            if(targetPrice >= USDT_PRICE){
                conclusion.innerHTML =`It's time to Buy ${COIN1.toUpperCase()}!!`;
                document.getElementById("victory").play();
            }
        }
        else{
            let targetPrice =(+ document.getElementById('target').value);
            conclusion.innerHTML =`Waiting for Sell ${COIN1.toUpperCase()}!!`; 
            if(targetPrice <= USDT_PRICE){
                conclusion.innerHTML =`It's time to Sell ${COIN1.toUpperCase()}!!`;
                document.getElementById("victory").play();
            }
         }
    }
    else{
        conclusion.innerHTML =``;
    }
}




OnOff.addEventListener('click',priceAlert);



let getPrice=()=>{
    fetch(`https://public.coindcx.com/market_data/trade_history?pair=I-${COIN1.toUpperCase()}_${COIN2.toUpperCase()}&limit=1`)
    .then(res=>{
        return res.json();
    }).then(data=>{
        USDT_PRICE = (+ data[0].p);
        currentPrice.innerHTML = `Current price of ${COIN1.toUpperCase()} ${USDT_PRICE} in ${COIN2.toUpperCase()}`
        priceAlert();
    })
}

getPrice();
setInterval(()=>{
    getPrice();
},4000);
