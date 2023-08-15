import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
    return (<div className='navbar'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/cat-fact">Cat Facts</Link>
        <Link className='link' to="/age-predictor">Age Predictor</Link>
        <Link className='link' to="/task-list">Tasks</Link>
        <Link className='link' to="/register">Sign Up</Link>
    </div>)
}