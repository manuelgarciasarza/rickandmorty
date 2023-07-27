import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Favorites from "./components/favorites/favorite"
import Cards from './components/cards/Cards';
import About from "./components/about/about.jsx";
import Nav from './components/nav/nav.jsx';
import Detail from './components/detail/detail';
import Form from "./components/form/form.jsx"

import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   function logOut(){
      setAccess(false)
      navigate("/")
   }

   function onSearch(dato) {
        
        axios(`http://localhost:3001/character/${dato}`).then((response) => {
          if (response.data.name) {
            setCharacters((oldChars) => [...oldChars, response.data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        }).catch((err) => alert(err.response.data.error) );
      
   }

   const onRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
   };  

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== id);
      setCharacters(filteredCharacters);
   }; 

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav logOut={logOut} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            {access && (
               <>
                  <Route path="/home" element={<Cards 
                     onSearch={onSearch} 
                     onRandom={onRandom}
                     characters={characters} 
                     setCharacters={setCharacters} 
                     onClose={onClose} 
                     />}/>
                  <Route path="/about" element={<About />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="/favorites" element={<Favorites />} />
               </>
            )}
         </Routes>
      </div>
   );
}

export default App;

{/* <Nav onSearch={onSearch} onRandom={onRandom} />
<Cards characters={characters} setCharacters={setCharacters} onClose={onClose} /> */}