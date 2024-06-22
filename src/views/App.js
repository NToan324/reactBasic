import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ToDoList from './ToDoLists/ToDoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Navigation/Nav';
import Home from './Example/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from './Example/MyComponent';
import ListUsers from './Users/ListUsers';
import DetailsListUsers from './Users/DetailsListUsers';

/*
2 Components: class components and functional components (function, arrow function)
*/
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/todo" element={<ToDoList />}>
            </Route>
            <Route path="/about" element={<MyComponent />}>
            </Route>
            <Route path="/user" element={<ListUsers />}>
            </Route>
            <Route path="/user/:id" element={<DetailsListUsers />}>
            </Route>
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        // Remove transition 
        />
      </div>
    </Router>
  );
}

export default App;
