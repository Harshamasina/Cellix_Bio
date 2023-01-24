import Desc from "./Desc";
import SearchPatents from "./Years/SearchPatents";
import Years from "./Years/Years";
import { Helmet } from 'react-helmet';

function Patents(){
    return(
        <>
            <Helmet>
                <title>Patents | Cellix Bio</title>
                <meta name="description" content="World Wide Patents filed by Cellix Bio"/>
                <meta name="keywords" content="cellix bio World Wide patents, Cellix Bio Patents, cellix bio pharma World Wide patents" />
            </Helmet>
            <Desc></Desc>
            <SearchPatents></SearchPatents>
            <Years></Years>
        </>
    );
}
export default Patents;