import './Navbar.css';

export default function Navbar()
{
    return(
       <div className='navbar'>
       <a href="/" className='item'>Home</a>
      <a href="/about" className='item'>Products</a>
      <a href="/contact" className='item'>Contact Us</a>
      <a href ="/contact" className='item'>Login</a>
      <a href="/contact" className='item'>Sign up</a>
      
        
       </div>
    );
}