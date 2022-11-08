import './App.css';
import {  
  BrowserRouter,
  Routes,  
  Route,  
  Link
} from"react-router-dom";

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
      <h1>Welcome to React Router</h1>
    </header>
    <BrowserRouter>
    <div className='App-navi'>
      <nav>
        <ul>
            <Link to="/">Home</Link>{' '}
            <Link to="/about">About</Link>{' '} 
            <Link to="/contact">Contact</Link>{' '} 
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </BrowserRouter>
  </div>
  );
}

function Home() {
  return <h2>This is home page</h2>;
}

function About() {
  return <h2>This is about page</h2>;
}

function Contact() {
  return <h2>Contact address</h2>;
}

function NotFound() {
  return <h2>Not Found</h2>;
}

export default App;
