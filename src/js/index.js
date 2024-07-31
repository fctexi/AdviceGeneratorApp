// ----ELEMENTOS HTML----
const button = document.querySelector("button")
const advice = document.querySelector("p")

button.addEventListener("click", getAdvice)

async function getAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const json = await resposta.json()
    advice.innerText = `"${json.slip.advice}"`
}