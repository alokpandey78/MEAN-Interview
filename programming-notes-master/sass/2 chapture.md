Indented syntax.
 SCSS (Sassy CSS) = Many CSS and SCSS files use the extension .scss.
 Indented − This is older syntax and sometimes just called as SASS. the extension .sass.

## indented syntax
Multiline Selectors
 style.scss
.class1,
.class2{
   color:red;
}

## Sass - CSS Extensions
1	Nested Rules
It is a way of combining multiple CSS rules within one another.

2	Referencing Parent Selectors: &
It is the process of selecting parent selector by using the & character.

3	Nested Properties
It allows nesting of properties into other properties which leads to grouping of another related code.

4	Placeholder Selectors
Sass supports placeholder selector using class or id selector by making use of @extend directive.


## 1. Nested Rules Example

   ```
 <body>
      <div class = "container">
         <h1>My First Heading</h1>
         <p>It is a CSS pre-processor which helps to reduce repetition with CSS and save the time. </p>
         <p>It is more stable and powerful CSS extension language.</p>
         <div class = "box">
            <h1>My Second Heading</h1>
            <p>It is initially designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006.</p>
         </div>
      </div>
   </body>

.container{
   h1{
      font-size: 25px;
      color:#E45456;
   }
   
   p{
      font-size: 25px;
      color:#3C7949;
   }
}
   ```

## Sass - Referencing Parent Selectors

```
<body>
      <div class = "container">
         <h1>Example using Parent Selector</h1>
         <a href = "http://www.tutorialspoint.com/"> www.tutorialspoint.com </a>
      </div>
   </body>

   a {
   font-size: 20px;
   &:hover { background-color: yellow; }
}
```

## Sass - Nested Properties

```
<body>
      <div class = "container">
         <h1>Example using Nested Properties</h1>
         <p class = "line">SASS stands for Syntactically Awesome Stylesheet</p>
      </div>
   </body>

.line {
   font: {
      family: Lucida Sans Unicode;
      size:20px;
      weight: bold;
      variant: small-caps;
   }
}

OUTPUT
style.css
.line {
   font-family: Lucida Sans Unicode;
   font-size: 20px;
   font-weight: bold;
   font-variant: small-caps;
}
```

## Sass - Placeholder Selectors

```
 <body>
      <h1>First Heading</h1>
      <p class = "frst_para">It is a CSS pre-processor which helps to reduce repetition with CSS and save the time. </p>
      <h1>Second Heading</h1>
      <p class = "sec_para">It was initially designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006.</p>
   </body>

   .frst_para {
   color: green;
}
.sec_para {
   @extend .frst_para;
   font-size:20px;
}

output

.frst_para, .sec_para {
   color: green;
}
.sec_para {
   font-size: 20px;
}
```