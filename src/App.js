// import { Component } from 'react';

import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import LightAnimation from './components/light-animation/light-animation.component';



const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  


  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
 

  return (
    <div className='App'>
      <h1 className='app-title'>Jasmine's Monsters Collection</h1>
      <SearchBox
        className='monsters-seach-box'
        placeholder='Search Monsters'
        onChangeHandler={onSearchChange} />   
     
  
      <CardList monsters={filteredMonsters} />
      <LightAnimation />
      
    </div>
  );


}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField:''
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       },
        
//       ));
//   }
//   onSearchChange = (event) => {
//       console.log(event.target.value);           
//       const searchField = event.target.value.toLocaleLowerCase();          
//       this.setState(
//         () => {
//           return { searchField};
//         });
//   }
  
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
  

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Jasmine's Monsters Collection</h1>
//         <SearchBox
//           className='monsters-seach-box'
//           placeholder='Search Monsters'
//           onChangeHandler={onSearchChange} />       
       
//         <CardList monsters={filterMonsters} />
        
//         <LightAnimation />

//       </div>
//     );

     
//   }
  
// }

export default App;
