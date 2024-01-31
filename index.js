const LINK = "https://api.adviceslip.com/advice"
const idHtwo = document.getElementById('index');
const adviceP = document.getElementById('advice');
const button = document.getElementById('button');



const getData = async() =>{
    const response = await fetch(LINK);
    const data = await response.json();
    return data;
}
const render = (adviceObj) =>{
    const {id, advice} = adviceObj;
    idHtwo.textContent = `ADVICE #${id}`;
  

    adviceP.textContent = `${advice}`;
  
}

const generateAdvice = async() =>{
    const quote = await getData();
    const newQuote = await quote.slip;

    render(newQuote);
}

window.addEventListener("DOMContentLoaded", () =>{
button.addEventListener('click', generateAdvice);
})
