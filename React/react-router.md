## URL Parameters

```
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 const ParamsExample = () => (
  <Router>
  <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
 </ul> 
 <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex}/>
    </div>
  </Router>
);
export default ParamsExample;
```
## Redirects (Auth)
```
 <Redirect to={{
            pathname: "/login",
            state: { from: props.location }
          }} />
```

## Custom Link

## Preventing Transitions

## No Match (404)

## Recursive Paths

## Sidebar

## Animated Transitions

## Ambiguous Matches

## Route Config

## Modal Gallery

## StaticRouter Context
