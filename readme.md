
### 6. Answer the following questions clearly:


1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans-1: We use these methods because in JavaScript we often need to find and manipulate elements in the DOM . Different methods exist because each has its own purpose.

2. How do you **create and insert a new element into the DOM**?

Ans-2: It can be made basically three step:
       step-1: Use document.createElement(tagName)
       step-2: I can set text, classes, ids, etc.
       step-3: And last i use a methods like (appendChild) etc.

3. What is **Event Bubbling** and how does it work?

Ans-3: When an event happens on an element, it first runs on that element and then automatically propagates upward through its parent elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans-4: Event Delegation id a  technique where you add an event listener to a parent element to handle events on its child elements using event bubbling — useful for better performance and handling dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans-5: preventDefault()- stops the default browser action. 

stopPropagation()- stops the event from bubbling up to parent elements.
