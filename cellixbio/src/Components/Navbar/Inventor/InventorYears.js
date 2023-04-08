import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NoInternetConnection from '../../Body/NoInternetConn';

function InventorYears(){
    const [yearsCount, setYearsCount] = useState([]);
    useEffect(() => {
        const fetchData  = async () => {
            try {
                const res = await axios.get('https://backend.cellixbio.info/allyearcount');
                setYearsCount(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return(
        <>
            <div className="YearsContainerh2">
                <h2 className="Yearsh2">Mahesh Kandula's World Wide Patents ({new Date().getFullYear()} to 2009)</h2>
            </div>
            
            <NoInternetConnection>
                <div className='yearscontainer'>
                    {
                        yearsCount && yearsCount.map((item, index) => (
                            <div className="YearsButtonContainer" key={index}>
                                <Button className='yearbtn' variant="dark" size="lg">
                                    <Link className='YearsLinks' to={`/PatentsDashboard/${item.year}`}>{item.year}<p className='yearp'>Patents: {item.count}</p></Link>
                                </Button>
                            </div>
                        ))
                    }
                </div>
            </NoInternetConnection>
        </>
    );
}

export default InventorYears;