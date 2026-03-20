## Code Review Exercise

Write your code review here in markdown format.

### Issue #1: Accessibility

The issue, why this is an issue, and the solution:

The current close button relies entirely on a visual FontAwesome icon (fa-xmark) to tell the user what it does. Because there is no actual text inside the button, screen readers will just read it as a blank or "empty" button, which creates a major accessibility barrier for visually impaired users.

To fix this, we need to add an aria-label attribute to the <button> tag, which explicitly tells screen readers that its function is to "close the popup window." Additionally, adding a title attribute is a good UX practice, as it provides a visual tooltip for mouse users who hover over the "X" icon.

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
