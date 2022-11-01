import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home";
import PT from "./PT";
import About from "./About";
import IP from "./IP";
import Pipeline from "./Pipeline";
import Leadership from "./Leadership";
import Contact from "./Contact";
import Logo from "./Logo";
function Navbar(){
    return(
        <div>
            <div>
                <Logo></Logo>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/PT">Platform Technology</Link>
                <Link to="/IP">Intellectual Property</Link>
                <Link to="/Pipeline">Pipeline</Link>
                <Link to="/Leadership">Leadership</Link>
                <Link to="/Contact">Contact</Link>
            </div>

            <Routes>
                <Route path='/Home' element = {<Home></Home>}></Route>
                <Route path='/About' element = {<About></About>}></Route>
                <Route path='/PT' element = {<PT></PT>}></Route>
                <Route path='/IP' element = {<IP></IP>}></Route>
                <Route path='/Pipeline' element = {<Pipeline></Pipeline>}></Route>
                <Route path='/Leadership' element = {<Leadership></Leadership>}></Route>
                <Route path='/Contact' element = {<Contact></Contact>}></Route>
            </Routes>
        </div>
    )
}
export default Navbar;