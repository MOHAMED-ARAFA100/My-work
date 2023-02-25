let text=document.getElementById('data')
let todoitem=document.querySelector('.todoitem')
let allform=document.querySelector('form')

allform.addEventListener('submit',(e)=>{
    e.preventDefault()
    addtolist()
})

function addtolist(){
    let textadd=text.value
    let newdiv=document.createElement('div')
    newdiv.innerHTML=`<div class='doli'>
    <div class='check'>
    <img src='images/icon-check.svg'>
    </div>
    <p class='ps'>${textadd}</p>
    <button class='cross'>
    <img src='images/icon-cross.svg'
    </button>

  </div>
<div class='hr'><hr></div>
  
  `
  text.value=""
  todoitem.appendChild(newdiv)
  let close=newdiv.querySelector('.cross')
  close.addEventListener('click',(e)=>{
    newdiv.remove()
  })
  let check=newdiv.querySelector('.check')
  check.addEventListener('click',(e)=>{
    check.classList.toggle('icncmplte')
    newdiv.children[0].children[1].classList.toggle('complete')
  })

}

let sun=document.querySelector('.sun'),
    main=document.querySelector('.main'),
    body=document.querySelector("body");
    
sun.addEventListener('click',function mood(){
  this.classList.toggle('sun')
  if(this.classList.contains('sun')){
    this.src="images/icon-moon.svg";
    main.style.backgroundImage='url("images/bg-desktop-light.jpg")'
    body.style.backgroundColor="hsl(0, 0%, 98%)"
    
  }
  else{
    this.src="images/icon-sun.svg";
    main.style.backgroundImage='url("images/bg-desktop-dark.jpg")'
    body.style.backgroundColor="hsl(235,21%,11%)"
  }
})
