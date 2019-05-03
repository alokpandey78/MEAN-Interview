## API
## <BrowserRouter>
```
    import { BrowserRouter } from 'react-router-dom'
<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App/>
</BrowserRouter>

<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```
## <HashRouter>
    basename: string
    getUserConfirmation: func
    hashType: string
    children: node
    ```
    <HashRouter basename="/calendar"/>
    <Link to="/today"/> // renders <a href="#/calendar/today">
    ```
## <Link>
    to: string
    to: object
    replace: bool
    innerRef: function
    others
```
    Provides declarative, accessible navigation around your application.
    <Link to='/courses?sort=name'/>
    <Link to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true }
    }}/>
```
## <NavLink>
    activeClassName: string
    activeStyle: object
    exact: bool
    strict: bool
    isActive: func
    location: object

    A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
```
    <NavLink
    to="/faq"
    activeStyle={{
        fontWeight: 'bold',
        color: 'red'
    }}
    >FAQs</NavLink>
```
# <Prompt>
## <MemoryRouter>
    initialEntries: array
    initialIndex: number
    getUserConfirmation: func
    keyLength: number
    children: node

    A <Router> that keeps the history of your “URL” in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.

## <Redirect>
    to: string
    to: object
    push: bool
    from: string
    exact: bool
    strict: bool

    ```
    import { Route, Redirect } from 'react-router'

    <Route exact path="/" render={() => (
    loggedIn ? (
        <Redirect to="/dashboard"/>
    ) : (
        <PublicHomePage/>
    )
    )}/>
    ```

## <Route>
    Route render methods
    Route props
    component
    render: func
    children: func
    path: string
    exact: bool
    strict: bool
    location: object
    sensitive: bool

    ```
    import { BrowserRouter as Router, Route } from 'react-router-dom'

    <Router>
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={NewsFeed}/>
    </div>
    </Router>
    ```

## <Router>
    history: object
    children: node
    <StaticRouter>
    basename: string
    location: string
    location: object
    context: object
    children: node
```
    The common low-level interface for all router components. Typically apps will use one of the high-level routers instead:
<BrowserRouter>
<HashRouter>
<MemoryRouter>
<NativeRouter>
<StaticRouter>
```
## <StaticRouter>
```
A <Router> that never changes location.
<StaticRouter basename="/calendar">
  <Link to="/today"/> // renders <a href="/calendar/today">
</StaticRouter>
```
## <Switch>
    location: object
    children: node
Renders the first child <Route> or <Redirect> that matches the location.
```
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```
## history
    history is mutable
# location
    match
    null matches
## matchPath
    pathname
    props
## withRouter
    Component.WrappedComponent
    wrappedComponentRef: func