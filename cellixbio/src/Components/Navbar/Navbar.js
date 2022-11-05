import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home";
import PT from "./PT";
import About from "./About";
import IP from "./IP";
import Pipeline from "./Pipeline";
import Leadership from "./Leadership";
import Contact from "./Contact";
import Logo from "./Logo";
import Patents from "../Body/Patents/Patents";
function Navbar(){
    return(
        <div>
            <div className="Navbar">
                <Logo></Logo>
                <Link className="link" to="/Home">Home</Link>
                <Link className="link" to="/About">About</Link>
                <Link className="link" to="/Patents">Patents</Link>
                <Link className="link" to="/PT">Platform Technology</Link>
                <Link className="link" to="/IP">Intellectual Property</Link>
                <Link className="link" to="/Pipeline">Pipeline</Link>
                <Link className="link" to="/Leadership">Leadership</Link>
                <Link className="link" to="/Contact">Contact</Link>
            </div>

            <Routes>
                <Route path='/Home' element = {<Home></Home>}></Route>
                <Route path='/About' element = {<About></About>}></Route>
                <Route path='/Patents' element = {<Patents></Patents>}></Route>
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