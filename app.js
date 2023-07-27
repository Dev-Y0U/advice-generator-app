let url = "https://api.adviceslip.com/advice";
let dice = document.getElementById("dice");
let quote = document.getElementById("quote");
let id= document.getElementById("id");


async function get_quote() {
    let request = await fetch(url);
    if(request.status=== 200)
        var quotes = await request.json();
    else{
        alert("failed to get the quote ... press ok and redice")
        throw new Error("failed to get the quote");
    }
    id.innerHTML =`ADVICE #${quotes.slip.id}`;
    quote.innerHTML =`"${quotes.slip.advice}"`;
}
dice.addEventListener("click",get_quote);
