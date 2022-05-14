 


let slider = document.querySelectorAll(".slider")





const sliderWidth = ()=>{
  for(let i of slider){
    i.style.maxWidth = getComputedStyle(sliderBody).maxWidth;
  }
}
sliderWidth()   // ширины блока слайдер


const addAttribute = () => {
  let n = 1
  for(let i of slider){
    i.setAttribute('number-slider', n++)
  }
}
addAttribute() // добавление к слайдерам атрибута номера


function addDots(n) {
  for(let i = 0; i < n; i++){
    sliderDots.insertAdjacentHTML("afterbegin", '<div class="slider-dot"><span></span></div>')
  }
  
}
addDots(slider.length) // добавление pagination