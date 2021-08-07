const currentPrice = document.getElementById('cp');
const conclusion = document.getElementById('conclusion');
let USDT_PRICE;

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
    fetch('https://public.coindcx.com/market_data/trade_history?pair=I-USDT_INR&limit=1')
    .then(res=>{
        return res.json();
    }).then(data=>{
        USDT_PRICE = (+ data[0].p);
        currentPrice.innerHTML = `Current price of USDT ${data[0].p}`
        priceAlert();
    }).catch(e=>{
		currentPrice.innerHTML =`Hay you are offline!`;
	})
}

getPrice();
setInterval(()=>{
    getPrice();
},5000);