import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return(
    <motion.nav className="navbar navbar-light container-fluid" 
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5 }}
    >   
        <ul className="navbar-nav">
            <li className="nav-item">
                Home
            </li>
        </ul>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar" >
            <ul className="navbar-nav p-4" >
                <li className="nav-item">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/intro' className="nav-link">Products</NavLink>
                </li>
            </ul>
        </div>
        </button>
    </motion.nav>
  )
}


