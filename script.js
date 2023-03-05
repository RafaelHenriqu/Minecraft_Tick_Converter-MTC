const Result = document.getElementById('Result')
 
Segundos.addEventListener('input',function(){
  Calcular()
})
 
  
Minutos.addEventListener('input',function(){
  Calcular()
})

 
Horas.addEventListener('input',function(){
  Calcular()
})
 
Dias.addEventListener('input',function(){
  Calcular()
})

function Calcular()
{
  const Segundos = document.getElementById('Segundos').value 
  const Minutos = document.getElementById('Minutos').value
  const Horas = document.getElementById('Horas').value
  const Dias = document.getElementById('Dias').value
  Result.innerHTML = Segundos * (20) + Segundos * 20 + Minutos * (60 * 20) + Horas * (60 * 60 * 20) + Dias * ( 60 * 60  *24 *20 )
 // Bonus
  if (Result.innerHTML== "NaN")
 {
 Result.innerHTML = "ERRO!"
 }
  
}
const Bt = document.getElementById('Bt')
const Fundo = document.getElementById('Fundo')
const Letras = document.querySelector('p')
Bt.addEventListener('click',function(){
if (Bt.innerHTML === "On")
{
  Fundo.style.backgroundImage ='none'  
  Bt.innerHTML = "Off"

}
else{
  Bt.innerHTML = "On" 
  
  Fundo.style.backgroundImage = 'Url(wallpaper.jpg)'


}

})

/*
  
  document.getElementById('seconds').value * 20 +      
  document.getElementById('minutes').value *(60 * 20) + 
  document.getElementById('hours').value *(60 * 60 * 20) + 
  document.getElementById('days').value *(60 * 60 * 24 * 20) + 
  document.getElementById('years').value *(60 * 60 * 24 * 365 * 20);
  
*/







