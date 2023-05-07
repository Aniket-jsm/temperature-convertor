
let CelciusInput = document.querySelector('#Celcius > input')
let FahrenheitInput= document.querySelector('#Fahrenheit >input')
let KelvinInput= document.querySelector('#Kelvin >input')

let btn= document.querySelector('.button button')


function roundNumber(number){

    return Math.round(number*100)/100

}

/* celcius to fahrenheit and kelvin */


CelciusInput.addEventListener('input',function(){
    let cTemp=parseFloat(CelciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let KTemp=cTemp+273.15

    FahrenheitInput.value=roundNumber(fTemp)
    KelvinInput.value=roundNumber(KTemp)

})

/* fahrenheit to celcius and kelvin */


FahrenheitInput.addEventListener('input',function(){
    let fTemp=parseFloat(FahrenheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let KTemp=(fTemp-32)*(5/9)+273.15

    CelciusInput.value=roundNumber(cTemp)

    KelvinInput.value=roundNumber(KTemp)

})

/* kelvin to celcius and fahrenheit */


KelvinInput.addEventListener('input',function(){
    let KTemp=parseFloat(KelvinInput.value)
    let cTemp=KTemp-273.15
    let fTemp=(KTemp-273.15)*(9/5)+32

    CelciusInput.value=roundNumber(cTemp)

    FahrenheitInput.value=roundNumber(fTemp)

})

btn.addEventListener('click',()=>{

    CelciusInput.value=""
    FahrenheitInput.value=""
    KelvinInput.value=""
})