import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, Routes, Route } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Home from "./Home";
import PT from "./PT";
import About from "./About";
import IP from "./IP";
import Pipeline from "./Pipeline";
import Leadership from "./Leadership";
import Contact from "./Contact";
import Logo from "./Logo";
import Patents from "../Body/Patents/Patents";
import { useState } from 'react';

function NavBar() {

        const [search, setSearch] = useState({
            searchTerm: {searchNumber: ''}
        });
        let updateSearch = (event) => {
            setSearch({
                ...search,
                searchTerm: {
                    ...search.searchTerm,
                    [event.target.name] : event.target.value
                }
            })
        };
        let searchClick = (event) => {
            event.preventDefault();
            console.log(search.searchTerm);
        }
        return (
            <div>
                <div>
                
                    <Navbar bg="dark" variant={"dark"} expand="lg" sticky="top"><Logo></Logo>
                        <Navbar.Brand href="#">
                           
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-xxl-0"
                                style={{ maxHeight: '100%' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/About">About</Nav.Link>
                                <Nav.Link as={Link} to="/Patents">Patents</Nav.Link>
                                <Nav.Link as={Link} to="/PT">Platform Technologies</Nav.Link>
                                <Nav.Link as={Link} to="/IP">Intellectual Property</Nav.Link>
                                <Nav.Link as={Link} to="/Pipeline">Pipeline</Nav.Link>
                                <Nav.Link as={Link} to="/Leadership">Leadership</Nav.Link>
                                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>

                            </Nav>
                           
                            <Form className="Navform">
                                <Form.Control
                                onChange={updateSearch}
                                type="search"
                                placeholder="Enter WIPO Number"
                                className="me-2 Navform"
                                aria-label="Search"
                                />
                                <Button classname="Navbutton" variant="outline-secondary" size="sm" onClick={searchClick}>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path='/Home' element = {<Home></Home>}></Route>
                        <Route path='/About' element = {<About></About>}></Route>
                        <Route path='/Patents' element = {<Patents></Patents>}></Route>
                        <Route path='/PT' element = {<PT></PT>}></Route>
                        <Route path='/IP' element = {<IP></IP>}></Route>
                        <Route path='/Pipeline' element = {<Pipeline></Pipeline>}></Route>
                        <Route path='/Leadership' element = {<Leadership></Leadership>}></Route>
                        <Route path='/Contact' element = {<Contact></Contact>}></Route>
                        <Route path='*' element={<Home></Home>}></Route>
                    </Routes>
                </div>
            </div>
        );
    }
export default NavBar;
