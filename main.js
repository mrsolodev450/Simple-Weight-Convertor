const btn = document.querySelector('.convert-btn')
const val = document.querySelector('.value')
const first_unit = document.querySelector('.first-unit')
const second_unit = document.querySelector('.second-unit')
const output = document.querySelector('.output')

btn.addEventListener('click', e=>{
  
  const value = val.value
  
  
  output.innerText = `${value}kg = ${value*1000}g`
})

