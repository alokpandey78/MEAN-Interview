SAAS Script

Variables
It represents the data such as numeric values, characters or memory addresses.
```
$txtcolor:#008000;
$fontSize: 20px;

p{
   color:$txtcolor;
   font-size:$fontSize;
}
```

## Operations
### Number Operations
```
$size: 25px;

h2{
   font-size: $size + 5;
}

h3{
   font-size: $size / 5;
}
```
### Color Operations
```
$color1: #333399;
$color2: #CC3399;

p{
   color: $color1 + $color2;
}
```
### String Operations
```
p {
   font-size: 5px + 10px;
}
```
### Boolean Operations
```
$age:20;
.bool {
   @if ($age > 10 and $age < 25) {
      color: green;
   }
}

output
.bool {
   color: green;
}
```
## Parantheses
```
p {
   font-size:  5px + (7px * 2);
   color:#ff0000;
}

output
p {
   font-size: 19px;
   color: #ff0000;
}

```
## Functions

## Interpolation

syntax #{$name}
```
p:after {
   content: "I have #{8 + 2} books on SASS!";
}
```
## & in SassScript
```
a {
   font-size: 20px;
   &:hover { background-color: yellow;}
}

output

a {
   font-size: 20px;
}
a:hover {
   background-color: yellow;
}
```
### Variable Defaults
```
$myval1: null;
$myval1: "Sass Developed by Natalie Weizenbaum and Chris Eppstein" !default;

p:after {
   content: $myval1;
}
```


