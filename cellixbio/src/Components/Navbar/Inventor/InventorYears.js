import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NoInternetConnection from '../../Body/NoInternetConn';
import { ProgressBar } from  'react-loader-spinner';

function InventorYears(){
    const [yearsCount, setYearsCount] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData  = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/allyearcount`);
                setYearsCount(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(loading){
        return <div>
            <ProgressBar
                visible={true}
                borderColor = '#0E6E59'
                barColor = '#15B39D'
                wrapperClass='years-loading'

            />
        </div>
    }

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