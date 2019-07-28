const list = document.querySelector('#our-list');
const addItem = document.getElementById('change-btn');
const ourHeadline = document.getElementById('our-headline');
var newItemCounter = 1;

list.addEventListener('click', activateItem);

// An arbitrarily named variable e, representing the element being clicked, is passed
// as an argument
function activateItem(e) {
    if (e.target.nodeName == 'LI') {
        // Changes the headline text to the e target
        ourHeadline.innerText = e.target.innerHTML;

        // Removes active class from entire list of items, which removes the beige background
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove('active');
        }
        
        // Adds active class to target list item, which changes background color to beige
        e.target.classList.add('active');
    }
}

addItem.addEventListener('click', createNewItem);

function createNewItem() {
    list.innerHTML += "<li>Something new " + newItemCounter + ".</li>"
    newItemCounter++;
}