(DOM) is an application programming interface (API) for manipulating HTML documents.
DOM manipulation involves using JavaScript to interact with and Access, modify, create, and remove elements and attributes, i.e., dynamically change this structure.

Node = elements, attributes, texts, comments, and so on.

1. const functionality = document.getElementById('myId')
Returns a live single HTML Element object (<div id="newDiv">) and If no element, returns null. A live object that updates automatically when the document changes
Eg.:
<ul id='nameList'>
    js inserts list here
</ul> 
<script>
const names = ["Rohan", "Anil", "Rohit", "Sugam"];
const nameList = document.getElementById("nameList");
names.forEach((name) => {
const listItem = document.createElement("li");
listItem.textContent = name;
nameList.appendChild(listItem);
});
</script>

2. getElementsByName() selects elements by their name attribute.
   Returns a live NodeList (in case of getElementByName only NodeList is live.) of elements with a specified name(<input type="" name="myValue">). If no element, returns Empty NodeList. NodeList an array-like object, not array object.

3. getElementsByTagName(tagName): Select elements by their tag name(<p>, <html>, etc.). Returns live HTMLCollection. If no element, returns Empty HTMLColllection

4. const elements = document.getElementsByClassName('myClass'); Returns a live HTMLCollection with class name(<p class="para">). If no element, returns empty HTMLCollection

#CSS Selectors

1. const element = document.querySelector('.myClass') Selects the first 1 element that matches the CSS selector. Return Null if empty
{
Eg.:
<div class="myClass">
<p>Existing Paragraph 1</p>
</div>
<script>
// Select all <div> elements with the class 'myClass'
const divs = document.querySelector('.myClass');
// Create a new <p> element
const newPara = document.createElement('p');
newPara.textContent = "It's a newly added paragraph";
//parent.appendChild(newPara)
divs.appendChild(newPara)
console.log(newPara)
</script>
}

2. const elements = document.querySelectorAll('div.myClass'); Selects all elements that match the CSS selector. Returns a static NodeList. A change in the document isn't reflected in the NodeList.

const newElement = document.createElement('div');

#Change/Manipulating Contents of DOM Elements

1. innerHTML: Gets or sets the HTML content of an element. It's not considered secured, may cause potential security risks
   element.innerHTML = '<p>New HTML content</p>';

2. textContent: Gets or sets the text content of an element. Returns text as it appears in the markup
   element.textContent = 'New Text is added here.';

3. innerText: Returns the text as it appears on the screen
   element.innerText = 'This is added line through DOM.'

{
Eg:

<p>Key =<span style="display: none;">     ABC123<span></p>
<script>
const para = document.querySelector('p');
console.log("innerHTML: ", para.innerHTML)
console.log("innerText: ", para.innerText)
console.log("textContent: ", para.textContent)
</script>
Output:
innerHTML: Key =<span style="display: none;"> ABC123<span></span></span>
innerText: Key = ,
textContent: Key = ABC123,
}

parentElement.appendChild(newElement): appendChild doesn't directly work with NodeList and HTMLCollection like querySelectorAll, getElementsByClassName, getElementsByTagName. Let's say with all plural data.
Eg: document.body.appendChild(newPara)

And appendChild directly work with singular data like querySelector, getElementById (individual DOM nodes)
Eg.: dadParagraph.appendChild(sonParagraph)

parentElement.insertBefore(newElement, existingElement);

parentElement.removeChild(childElement);

#Element.getAttribute()
= to get the value of an existing attribute on an element. Accepts an argument (the name of the attribute) and returns the value of the attribute. If the attribute passed to it as an argument does not exist on the element, the method will return null.
Eg.:
<img src="image.jpg" alt="An example image">

<script>
const imageElement = document.querySelector('img')
console.log(imageElement.getAttribute('src'))
//Output: image.jpg
</script>

#Element.setAttribute()
= to set or change the attribute of an element. The method takes in two arguments. The first argument is the name of attribute you want to change, and the second is the new value you want to give the attribute.
Eg.:
<img src="image.jpg" alt="An example image">

<script>const imageElement = document.querySelector('img')
console.log("BEFORE:", imageElement.getAttribute('src'))
imageElement.setAttribute('src', 'new-image.jpg')
console.log("AFTER:", imageElement.getAttribute('src'))
//Output:
BEFORE: image.jpg
AFTER: new-image.jpg
</script>

#Element.hasAttribute() : Returns true or false

#const parent = element.parentNode;
{

 <div class="container">
    <p class="full-text">
        <i id="italics">Some italicized text</i>
    </p>
  </div>
const it = document.getElementById('italics')
console.log(it.parentNode)
console.log(it.parentNode.parentNode)
}

#classList = read-only property that returns a live DOMTokenList collection of the class attributes of the element

<div id="gift-box" class="hide">🎁</div>
<button id="click-btn">Show the box</button>
<script>
const gift = document.getElementById('gift-box')
const btn = document.getElementById('click-btn')
btn.addEventListener('click', ()=>[
  gift.classList.remove('hide')
])
</script>

#HTMLElement.style

<h1>I love JavaScript</h1>
<script>
const par = document.querySelector('h1')
par.style.color = 'white'
par.style.backgroundColor = 'green'
</script>

#const child = element.childNodes; returns a NodeList of all the child nodes within the selected elements. includes elements and non-element nodes like text nodes, comment nodes, and so on.

#const children = element.children; returns an HTML collection of only the child elements (element nodes) of the selected objects. It will not include any non-element nodes like texts or comments.

#element.firstChild, lastChild, firstElementChild,lastElementChild
{
Eg.:

 <div id="container">
    A text node
    <p>Some paragraph</p>
    <!-- This is a comment -->
    <span>Span Element</span>
  </div>
<script>
const container = document.getElementById('container');
const containerChildNodes = container.childNodes;
const containerChildren = container.children;
console.log(containerChildNodes);
console.log(containerChildren);
console.log("FIRST CHILD:", container.firstChild)
console.log("LAST CHILD:", container.lastChild)
console.log("FIRST ELEMENT: ", container.firstElementChild)
console.log("LAST ELEMENT:", container.lastElementChild)
</script>
//Output: 
NodeList(7) [text, p, text, comment, text, span, text]
HTMLCollection(2) [p, span]
FIRST CHILD: "A text node"
LAST CHILD: #text
FIRST ELEMENT: <p>Some paragraph</p>
LAST ELEMENT: <span>Span Element</span>
}

#const next = element.nextSibling;
#const prev = element.previousSibling;
nextElementSibling
previousElementSibling

Eg.:
{

<div>
<p id="one">First paragraph</p>
text node
<p id="two">Second paragraph</p>
another text node
<p id="three">Third paragraph</p>
<p id="four">Fourth paragraph</p>

  </div>
<script>
const paragraphTwo = document.getElementById('two')
console.log("nextSibling: ", paragraphTwo.nextSibling)
console.log("nextElementSibling: ", paragraphTwo.nextElementSibling)
console.log("previousSibling: ", paragraphTwo.previousSibling)
console.log("previousElementSibling: ", paragraphTwo.previousElementSibling)
</script>
//Output:
another text node
<p id="two">Second paragraph</p>
text node
<p id="one">First paragraph</p>
}

#Event Handling = An event listener is a method that lets you know when an event has taken place, An event handler is a response to the event. It's a function that runs when an event occurs.
{
<button id="loginBtn">Login</button>

<script>
const y = document.getElementById("loginBtn");
y.addEventListener("click", function () { //MouseEvents-keyboardEvents: click,dbclick,mouseover,keydown,keypress
  console.log("Button clicked.");
});
</script>

}
