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

   var email = "manuelgarciasarza@gmail.com"
   var password = "asd123"

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function login(user){
      if (user.email === email && user.password === password){
         setAccess(true);
         navigate("/home")
      }
   }

   function logOut(){
      setAccess(false)
      navigate("/")
   }

   function onSearch(id) {
      
      const isExistingCharacter = characters.some((character) => character.id === id);
      
      if (isExistingCharacter) {
        window.alert('¡El personaje ya existe!');
      } else {
        
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        });
      }
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