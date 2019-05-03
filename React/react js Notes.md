### component
    Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
    2 types of component
    * class component
    * functional component

### class component
```
Are es6 class
class Hello extends Component{
   render(){
      return <div>Hello {this.props.name}</div>
   }
}
```
### functional component
    are function
    functional component is to accept props as an argument and return valid JSX.
    better performance , no state or lifecycle method
    Functional components are easier to read, debug, and test. They offer performance benefits, decreased coupling,
    and greater reusability.

```
function Hello(props){
   return <div>Hello {props.name}</div>
}
```

### Pure function
    The function always returns the same result if the same arguments are passed in.It does not depend on any state,
    or data, change during a program’s execution.
    The function does not produce any observable side effects such as network requests, input and output devices, 
    or data mutation.
    -Making a HTTP request
    -Mutating data
    -Printing to a screen or console
    -DOM Query/Manipulation
    -Math.random()
    -Getting the current time

```
function priceAfterTax(productPrice) {
 return (productPrice * 0.20) + productPrice;
}
```
### Impure function

```
var tax = 20;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice; 
}
```

### Pure component
```
functional component is a good example of a pure component
React.PureComponent
Hello = () => {
  return <h1>Hello</h1>;
}
```

### stateless component
    they are easy to write, understand, and test, and you can avoid the this keyword

### statefull component
```
Stateful components are always class components
Stateful components have a state that gets initialized in the constructor.
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

### Controlled component
    Don'tmaintain therir own state
    Data is controlled by parent component
    took current value through props and notifi changes via callback

### Uncontrolled component
    maintain there own state
    data is controlled by DOM
    ref are used to get their current value

### props vs state
Topics                                     | State  | Props
-----------------------------------------  | ----   | ------
Receive intial value from parent Component | yes    |   yes
Parent component can change value          | no     |   yes
Set default value inside component         | yes    |   yes
Change inside component                    | yes    |   no
Set intial value of child component        | yes    |   yes
Change inside child component              | no     |   yes

### create react app
    npx create-react-app my-app
    cd my-app
    npm start

### Real DOM vs Virtual dom
Real DOM	                           |   Virtual  DOM
----------------------------------  |   ---------------
It updates slow.	                  |   It updates faster.
Can directly update HTML.           |   Can’t directly update HTML.
Creates a new DOM if element updates|	  Updates the JSX if element updates.
DOM manipulation is very expensive. |   DOM manipulation is very easy.
Too much of memory wastage.	      |   No memory wastage.

### angular vs react

### jsx
    This funny tag syntax is neither a string nor HTML.
    It is called JSX, and it is a syntax extension to JavaScript
    Embedding Expressions in JSX
    JSX is an Expression Too
    Specifying Attributes with JSX
    Specifying Children with JSX
    JSX Prevents Injection Attacks
    JSX Represents Objects


### life cycle
    Four phases of a React component
    Initialization
    Mounting
    Update
    Unmounting

### setState
    It will use this.setState() to schedule updates to the component local state:

### forceUpdate

### refs

### imutable 

    cannot change

### mutable 
   that can be change
   only objects and arrays are mutable, not primitive values.

### webpack
    webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable
     of transforming, bundling, or packaging just about any resource or asset.

    Webpack is a popular module bundling system built on top of Node.js. It can handle not only combination and minification of
     JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

### lazy loading

### HOC higer order component
    Are pure function
    custome compoenent  which wraps another component
    They accept dynamically provided child component
    Do not modify input component
    Do not copy any behaviour from input component

### redux saga vs thunk

### reselect

### react context