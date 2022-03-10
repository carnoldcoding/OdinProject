//Query selectors use CSS Selectors to query HTML elements through JS
//You can alter elements once they've been selected
const header = document.querySelector('.header');
header.style.color = "lightpink";
header.style.cssText = `
    font-size: 2rem; 
    padding: .5rem 1rem; 
    background: rgb(100,100,100);
    border-radius: 1rem;
    box-shadow: 0 0 5px 2px black;
    transition: all .2s ease;
    `;

//Event listeners, can change styles, content, and are the main way that
//Elements have actions attached to them
header.addEventListener("click", () => {
    header.classList.toggle('active');
    header.textContent = "clicked";
})

//Create your own nested elements in JS before publishing to the DOM.
const div = document.createElement('div');
const child = document.createElement('div');
child.textContent = "hello";
div.appendChild(child);

// adds class "new" to your new div
div.classList.add('new');                                      

// removes "new" class from div
div.classList.remove('new');                                   

// if div doesn't have class "active" then add it, or if
// it does, then remove it
div.classList.toggle('active');                                
