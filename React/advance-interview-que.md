## Typechecking With PropTypes
As your app grows, you can catch a lot of bugs with typechecking. 
PropTypes exports a range of validators that can be used to make sure the data you receive is valid
```
    import PropTypes from 'prop-types';

    class Greeting extends React.Component {
    render() {
        return (
        <h1>Hello, {this.props.name}</h1>
        );
    }
    }

    Greeting.propTypes = {
    name: PropTypes.string
    };
```
## Static Type Checking
Static type checkers like ```Flow and TypeScript``` identify certain types of problems before you even run your code
we recommend using Flow or TypeScript instead of PropTypes

npm install --save-dev flow
npm install --save-dev typescript

## what is Refs and the DOM
Refs provide a way to access DOM nodes or React elements created in the render method.
When to Use Refs
```
Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
```

Creating Refs
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```
Accessing Refs
const node = this.myRef.current;

## what is Uncontrolled Components
In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

## Optimizing Performance
Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance

## can React work Without ES6
Normally you would define a React component as a plain JavaScript class:
```
If you don’t use ES6 yet, you may use the create-react-class module instead:
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```
## React Without JSX
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
```
 this code written with JSX:
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```
can be compiled to this code that does not use JSX:
```
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```
## Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## Fragments
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

## Higher-Order Components
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

``` a higher-order component is a function that takes a component and returns a new component.```
## Render Props
The term “render prop” refers to a simple technique for sharing code between React components using a prop whose value is a function.

```
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```


