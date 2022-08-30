
import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import BlogLists from './Components/BlogLists';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [searchItem, setSearchItem] = useState('');

    const searchHandeler = (e) => {
      e.preventDefault();
      setSearchItem(e.target.value);
    }

  return (
    <div className="App">
        <Navbar/>
        <SearchBar searchHandeler = {searchHandeler} />
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">

            <Header/>    

             <BlogLists searchItem = {searchItem}  />  
            </div>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
