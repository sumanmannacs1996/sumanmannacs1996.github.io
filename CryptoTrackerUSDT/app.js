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
            conclusion.innerHTML =`Waiting for Buy USDT!!`; 
            if(targetPrice >= USDT_PRICE){
                conclusion.innerHTML =`It's time to Buy USDT!!`;
                document.getElementById("victory").play();
            }
        }
        else{
            let targetPrice =(+ document.getElementById('target').value);
            conclusion.innerHTML =`Waiting for Sell USDT!!`; 
            if(targetPrice <= USDT_PRICE){
                conclusion.innerHTML =`It's time to Sell USDT!!`;
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
    fetch(`https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/trades?market=${COIN1}${COIN2}&limit=1`)
    .then(res=>{
        return res.json();
    }).then(data=>{
        USDT_PRICE = (+ data[0].price);
        currentPrice.innerHTML = `Current price of ${COIN1.toUpperCase()} ${USDT_PRICE} in ${COIN2.toUpperCase()}`
        priceAlert();
    })
}

getPrice();
setInterval(()=>{
    getPrice();
},7500);
