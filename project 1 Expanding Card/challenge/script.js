// // 1. Select all panels
// // 2. Loop through each panel
// // 3. Add click event listener
// // 4. When clicked:
// // 5 Remove 'active' class from all panels
// // 6 Add 'active' class to clicked panel






// const panels = document.querySelectorAll('.panel');


// panels.forEach(panel => {
  

//   panel.addEventListener('click', () => {
    

//     removeActiveClasses();

//     panel.classList.add('active');
//   });
// });

// function removeActiveClasses() {
//   panels.forEach(panel => {
//     panel.classList.remove('active');
//   });
// }


// // what you learned 

// // 1. DOM Manipulation

// // How to select elements using querySelectorAll()
// // Difference between querySelector() (single) vs querySelectorAll() (multiple)
// // Understanding NodeList vs Array

// // 2. Event Handling

// // How addEventListener() works
// // Click events and user interactions
// // Event-driven programming concept

// // 3. CSS Class Manipulation

// // classList.add() - adding classes dynamically
// // classList.remove() - removing classes
// // How JavaScript controls CSS (separation of concerns)

// // 4. Looping & Iteration

// // forEach() method for NodeLists
// // How to loop through multiple elements
// // Executing code for each item in a collection

// // 5. Functions

// // Creating reusable functions (removeActiveClasses())
// // When and why to separate code into functions
// // Function scope and organization






// // Challenge

// // Add keyboard navigation (← → to move between cards)

// // Add animation when switching



















const panels = document.querySelectorAll('.panel');
let activeIndex = 0; // Track active panel

// 🖱️ Handle click on panels
panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    setActivePanel(index);
  });
});

function setActivePanel(index) {
  removeActiveClasses();
  panels[index].classList.add('active');
  activeIndex = index;

  // 🎵 Play click sound
  const sound = document.getElementById('click-sound');
  sound.currentTime = 0; // rewind to start
  sound.play();

  // 🌫️ Fade animation for title
  const title = panels[index].querySelector('h3');
  title.classList.add('fade');

  // Remove fade class after animation finishes (so it can replay later)
  title.addEventListener('animationend', () => {
    title.classList.remove('fade');
  });
}

// Remove active from all
function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove('active'));
}

// 🎹 Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    activeIndex = (activeIndex + 1) % panels.length; // next
    setActivePanel(activeIndex);
  } else if (e.key === 'ArrowLeft') {
    activeIndex = (activeIndex - 1 + panels.length) % panels.length; // previous
    setActivePanel(activeIndex);
  }
});
