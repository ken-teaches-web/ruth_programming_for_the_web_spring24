// select empty div and assign to a variable
// put an h1 inside of it
// create a new element
const myEmptyDiv = document.querySelector("#myEmptyDiv");
const heading = document.createElement('h1');
heading.innerHTML = 'Hello class! It is a snowy day!';
heading.style.cursor = 'pointer'
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'magenta';
}

