let url = "https://api.adviceslip.com/advice";


async function quote() {
    const response = await fetch(url);
    const quotes = response.json().then(text=>{
        return text
    });
}

let q = quote();



