let CP = document.getElementById("cp");
let IP = document.getElementById("ip");
let DP = document.getElementById("dp");
let FIP = document.getElementById("fip");
let FDP = document.getElementById("fdp");
let CALCULATE = document.getElementById("calculate");

let calculatePrice=()=>{
    let cp = (+CP.value);
    let ip = (+IP.value);
    let dp = (+DP.value);
    let fip,fdp;
    fip = (cp + (cp*ip/100)).toFixed(4);
    fdp = (cp-(cp*dp/100)).toFixed(4);
    FIP.value=fip;
    FDP.value=fdp;
}

CALCULATE.addEventListener('click',calculatePrice)

