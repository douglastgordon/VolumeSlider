const slider = document.getElementById('slider')
const sliderWidth = getComputedStyle(slider).width
const sliderWidthValue = parseInt(sliderWidth.slice(0, sliderWidth.length -2))
const container = document.getElementById('slider-container')

slider.addEventListener('mousedown', mouseDown, false)
window.addEventListener('mouseup', mouseUp, false)


function mouseUp(){
  window.removeEventListener('mousemove', divMove, true)
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true)
}

function divMove(e) {
  const containerLeftMarginValue = container.getBoundingClientRect().left;
  const newMargin = containerLeftMarginValue - e.clientX
  console.log(containerLeftMarginValue)
  console.log(e.clientX)
  console.log(newMargin)
  if (newMargin >= sliderWidthValue){ return }
  slider.style.margin = `0px 0px 0px -${newMargin}px`
}
