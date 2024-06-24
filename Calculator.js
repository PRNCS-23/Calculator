// ACCESING ALL BUTTON BY THEIR CLASS AND ID 

// ALL CLEAR BUTTON AND PREVIOUS BUTTON
const AC = document.querySelector('#AC') 
const Prev = document.querySelector('#Prev')

// ARITHMETIC OPERATORS
const PlusMinus = document.querySelector('#PlusMinus')
const Division = document.querySelector('#Division')
const Multiplication = document.querySelector('#Multiplication')
const Minus = document.querySelector('#Minus')
const Plus = document.querySelector('#Plus')
const Percentage = document.querySelector('#Percentage')
const Decimal = document.querySelector('#Decimal')
const Equal = document.querySelector('#Equal')

// NUMBER
const Zero = document.querySelector('#Zero')
const One = document.querySelector('#One')
const Two = document.querySelector('#Two')
const Three = document.querySelector('#Three')
const Four = document.querySelector('#Four')
const Five = document.querySelector('#Five')
const Six = document.querySelector('#Six')
const Seven = document.querySelector('#Seven')
const Eight = document.querySelector('#Eight')
const Nine = document.querySelector('#Nine')

//DISPLAY
const Display = document.querySelector('#Display')

let Ans = []








// ADD EVENT LISTNER ON THE ALL THE BUTTON
const Btn0 = Zero.addEventListener('click',() => {
    Display.innerHTML = `${0}`
})
const Btn1 = One.addEventListener('click', () => {
    Display.innerHTML = `${1}`
})
const Btn2 = Two.addEventListener('click',() => {
    Display.innerHTML = `${2}`
})
const Btn3 = Three.addEventListener('click',() => {
    Display.innerHTML = `${3}`
})
const Btn4 = Four.addEventListener('click',() => {
    Display.innerHTML = `${4}`
})
const Btn5 = Five.addEventListener('click',() => {
    Display.innerHTML = `${5}`
})
const Btn6 = Six.addEventListener('click',() => {
    Display.innerHTML = `${6}`
})
const Btn7 = Seven.addEventListener('click',() => {
    Display.innerHTML = `${7}`
})
const Btn8 = Eight.addEventListener('click',() => {
    Display.innerHTML = `${8}`
})
const Btn9 = Nine.addEventListener('click',() => {
    Display.innerHTML = `${9}`
})


// PUSH ALL THESE ELEMENT ON ANS ARRAY AND DISPLAY THAT ARRAY ON DISPLAY