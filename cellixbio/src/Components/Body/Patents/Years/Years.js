import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
function Years(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="YearsContainerh2">
                <h2 className="Yearsh2">Cellix Bio's Patents Yearwise (2022 to 2009)</h2>
            </div>
            <div className='ButtonsContainer'>
                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        {/* <Link to="/PatentsDashboard"></Link> */}
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2022
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button className='' onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2021
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2020
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2019
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2018
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2017
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2016
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2015
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2014
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2013
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2012
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2011
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2010
                        </Button>
                </div>

                <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                        <Button onClick={() => navigate('/PatentsDashboard')} variant="dark" size="lg">
                            2009
                        </Button>
                </div>
            </div>

            {/* <div>
                <button onClick={() => navigate('/PatentsDashboard')}>Click me</button>
            </div> */}
        </div>
    );
}
export default Years;