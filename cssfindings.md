Responsive vs Mobile-first design



"Responsive Design" is the strategy of making a site that "responds" to the browser and device that it is being shown on... by looking awesome no matter what.

Media queries are the most powerful tool for doing this. Let's take our layout that uses percent widths and have it display in one column when the browser is too small to fit the menu in the sidebar:
```css
@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media screen and (max-width:599px) {
  nav li {
    display: inline;
  }
}
```


Mobile First: Begin the design process with mobile devices in mind, expanding out to tablet and desktop sizes.

http://metamonks.com/wp-content/uploads/responsive-vs-mobile-first-webdesign-022-1024x689.png



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

