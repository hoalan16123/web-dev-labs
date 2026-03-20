## Code Review Exercise

Write your code review here in markdown format.

### Issue #1: Accessibility

The current close button relies only on a visual icon "x" to tell the user what it does. 
Because there is no actual text inside the button, screen readers will just read it as a blank or "empty" button, 
which creates an accessibility issue for people that are visually impaired.

To fix this, an aria-label attribute needs to be added to the <button> tag, which tells the screen readers
what its function is: "close popup window." Additionally, adding a title attribute also adds
a visual text popup for users that hover over the 'x' icon with their mouse/cursor.

Initial code:

<button class="close-popup-button">
    <i class="fa-solid fa-xmark"></i>
</button>

After fix:

<button class="close-popup-button"
aria-label="close popup window"
title="close popup window"
>
    <i class="fa-solid fa-xmark"></i>

</button>

This goes for 2/3 of the close popup buttons, but I'm not sure if those count as separate "issues".

### Issue #2: Form Submit and Reset Buttons Not Working

The "submit" and "reset" inputs are located in a div outside of the <form id="RequestInfo" class="content-container form"> element.
The submit button only triggers the submit event of its parent form. But because these buttons are outside the form tags, 
clicking "submit" and "reset" does nothing. 

To fix this, we must move the buttons inside the <form> closing tag.

Initial code:

<form id="RequestInfo" class="content-container form">
.
.
.
</form>
<div
    class="form space-evenly-distributed-row-container form-buttons-container"
>
    <input class="form-button" type="submit" value="submit" />
    <input class="form-button" type="reset" value="reset" />
</div>


After fix:

<form id="RequestInfo" class="content-container form">
.
.
.
<div
    class="form space-evenly-distributed-row-container form-buttons-container"
>
    <input class="form-button" type="submit" value="submit" />
    <input class="form-button" type="reset" value="reset" />
</div>
</form>



### Issue #3 Code Correctness/Optimization with Brittle DOM Traversal

Using .parentElement.parentElement.parentElement is very problematic, because while in this situation it is working,
it collapses if there are any structural changes within this section, as the current method relies very heavily
on the HTML nesting. 
If there are any structure changes like adding a div for styling, the script will fail to find the correct element.

TO fix this, use .closest(".popup-section-container"). This is a better method because it searches up the DOM tree for the specific class, 
allowing the code to still work if there are any changes in structure.

Additionally, the same issue is in the more info buttons, where they also use .parentElement, when the best
course of action would be also to use closest(), but I'm also not sure if that counts as a separate issue.
It does also still rely on .nextElementSibiling.


-----For closing popup------
Initial code:
const popupSection =
      event.currentTarget.parentElement.parentElement.parentElement;

Updated code:
const popupSection = event.currentTarget.closest(
      ".popup-section-container"
    );


 
-----For opening more info button-----
Initial code:
    const popupSection =
      event.currentTarget.parentElement.nextElementSibling;
Updated code:
    const popupSection =
      event.currentTarget.closest(".card").nextElementSibling;


### Issue #4 Accessibility with Input Text

When clicking the Name, Username, Email, and Phone Number, it doesn't automatically
allow you to type into its associated text box. This is less accessible as it requires the user
to manually find the text box. To fix this, using the label class and for properties allow it to be 
all associated together.

Initial code: (Each in their own <p class="label-input-group form-element-container">)

<span class="form-label">Name</span>

<span class="form-label">Username</span>

<span class="form-label">Email</span>

<span class="form-label">Phone Number</span>

Updated code: (Each in their own <p class="label-input-group form-element-container">)
<label class="form-label" for="name">Name</label> 

<label class="form-label" for="username">Username</label> 

<label class="form-label" for="email">Email</label> 

<label class="form-label" for="phone-number">Phone Number</label>
