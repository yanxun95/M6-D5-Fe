import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <Router>

      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">
              <div className={Location.pathname === '/' ? 'nav-lick active' : 'nav-link'}>Home</div>
            </Link>
          </Nav>
        </Navbar>
        <header className="App-header">

          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          {/* <BookList books={fantasyBooks} /> */}
          {/* <Route path="/" exact render={(routerProps) => <BookList books={fantasyBooks} />} />
          <Route path="/register" exact render={(routerProps) => <Register />} /> */}
          <Route path="/" exact render={(routerProps) => <ProductList />} />
        </header>
      </div>
    </Router>

  )
}

export default App
