// select all panels


const panels = document.querySelectorAll('.panel')


// loop

panels.forEach((panel)=>{
  panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active')
  })
})

// function to remove active class from each element

function removeActiveClasses(){
  panels.forEach(panel=>{
    panel.classList.remove('active')
  })
}

// add right arrow and left arrow 