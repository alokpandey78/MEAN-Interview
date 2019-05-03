
## React.Component
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React.
    class Greeting extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
## ReactDOM
If you load React from a <script> tag, these top-level APIs are available on the ReactDOM global. If you use ES6 with npm, you can write import ReactDOM from 'react-dom'. If you use ES5 with npm, you can write 
    var ReactDOM = require('react-dom').

## ReactDOMServer
The ReactDOMServer object enables you to render components to static markup. Typically, it’s used on a Node server:

    // ES modules
    import ReactDOMServer from 'react-dom/server';
    // CommonJS
    var ReactDOMServer = require('react-dom/server');


## DOM Elements
React implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.

## SyntheticEvent
This reference guide documents the SyntheticEvent wrapper that forms part of React’s Event System. See the Handling Events guide to learn more.

```
Supported Events
React normalizes events so that they have consistent properties across different browsers.
The event handlers below are triggered by an event in the bubbling phase. To register an event handler for
the capture phase, append Capture to the event name; for example, instead of using onClick, you would use
onClickCapture to handle the click event in the capture phase.
    Clipboard Events
    Composition Events
    Keyboard Events
    Focus Events
    Form Events
    Mouse Events
    Selection Events
    Touch Events
    UI Events
    Wheel Events
    Media Events
    Image Events
    Animation Events
    Transition Events
    Other Events
```

## Test Utilities
Importing
import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm

```
Simulate
    renderIntoDocument()
    mockComponent()
    isElement()
    isElementOfType()
    isDOMComponent()
    isCompositeComponent()
    isCompositeComponentWithType()
    findAllInRenderedTree()
    scryRenderedDOMComponentsWithClass()
    findRenderedDOMComponentWithClass()
    scryRenderedDOMComponentsWithTag()
    findRenderedDOMComponentWithTag()
    scryRenderedComponentsWithType()
    findRenderedComponentWithType()

mockComponent()
mockComponent(
  componentClass,
  [mockTagName]
)
```
isElement()
isElement(element)

## JavaScript Environment Requirements
React 16 depends on the collection types Map and Set. If you support older browsers and devices which may not yet provide these natively (e.g. IE < 11) or which have non-compliant implementations (e.g. IE 11), consider including a global polyfill in your bundled application, such as core-js or babel-polyfill.


