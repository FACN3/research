BEM
Block, Element & Modifier

Is a naming system for classes within HTML and CSS.

Elements are children of Blocks, denoted by a double underscore "_ _"

Modifiers modify the state of an element or block

Blocks are standalone chunks of code that should be modular and contain their own sets of elements. Think of blocks as headers, sidebars, and footers—they are the major Lego pieces that you put together to build a website.

```html
1 <form class="sign-up-form">
2   <input type="text" class="sign-up-form__field--pink" value="name">
3   <input type="text" class="sign-up-form__field" value="email">
4   <input type="text" class="sign-up-form__field" value="username">
5   <input type="text" class="sign-up-form__field" value="phone">
6   <input type="password" class="sign-up-form__field">
7   <input type="submit" class="sign-up-form__button" value="name">
8 </form> 


```

https://css-tricks.com/bem-101/


HOW TO REFACTOR CSS

 
css dig
https://www.hongkiat.com/blog/code-optimization-series-refactoring-css/

1. Conduct an Initial Audit
2. Set Up a Manageable Plan
3. Track Progress
4. Stick to a Coding Style Guide
5. Set Up a Coherent File Structure
6. Get Rid of Unused and Duplicate Rules
7. Reduce Specificity
8. Weed Out !important Rules
9. Clean Out Magic Numbers and Hard Coded Values
10. Refactor Units and Values











