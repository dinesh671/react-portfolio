import './App.scss';
import  { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact />} />
          <Route path='Projects' element={<Projects/>}/>


        </Route>
      </Routes>
    </>
  );
}

export default App;
