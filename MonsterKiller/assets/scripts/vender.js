const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById("log-btn");

const adjustHealthBars = (maxLife)=>{
    monsterHealthBar.max =maxLife;
    monsterHealthBar.value =maxLife;
    playerHealthBar.max =maxLife;
    playerHealthBar.value=maxLife;
}

const delMonsterDamage =(damage)=>{
    const damageValue =(Math.random() * damage).toFixed(2);
    monsterHealthBar.value = (monsterHealthBar.value -damageValue).toFixed(2);
    return damageValue;
}

const delPlayerDamage =(damage)=>{
    const damageValue =(Math.random() * damage).toFixed(2);
    playerHealthBar.value = (playerHealthBar.value -damageValue).toFixed(2);
    return damageValue;
}

const increasePlayerHealth =(healthValue)=>{
    playerHealthBar.value = playerHealthBar.value + healthValue;
}

const resetGame = (value)=>{
    playerHealthBar.value=value;
    monsterHealthBar.value =value;
}

const setPlayerHealth = (health)=>{
    playerHealthBar.value = health;
}

let removeBonusLife =()=>{
    bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}