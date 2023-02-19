const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.']

const date = document.querySelector(".date")
const fact = document.querySelector(".fact")
let today = new Date().getDay()
console.log(today)
console.log(facts.length)


const someFunction = () => {
    if(today == 0){
        today = "niedziela"
    }
    randomNumber = Math.floor(Math.random()*(facts.length))
    console.log(randomNumber)
    date.textContent = `Dzisiaj jest ${today}`
    fact.textContent = `${facts[randomNumber]}`
}



document.addEventListener("dblclick", someFunction)

