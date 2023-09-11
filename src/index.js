import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Homepage/Homepage';
import Contact from './view/Contact/Contact';



function App()
{
  
    
  const path =window.location.pathname;
    switch(path){
      case "/":
         return <Home/>
    
      case "/contact":
          return <Contact/>
      default :
         return <h2>Invalid Path</h2>

    }
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  </>

);


 


