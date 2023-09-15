import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"; 
import Contact from './Contacts';
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import NoPage from './NotPageFound';

export default function App() {
  return (
    <><h1 align='center' > ! ** WELCOME** ! </h1>
    <p align='center'>SUBTITLE</p>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter></>
  );
}
