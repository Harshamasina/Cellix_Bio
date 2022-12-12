import Desc from "./Desc";
import GoToTopButton from "./Years/GoToTopButton";
import SearchPatents from "./Years/SearchPatents";
import Years from "./Years/Years";

function Patents(){
    return(
        <>
            <Desc></Desc>
            <SearchPatents></SearchPatents>
            <Years></Years>
            <GoToTopButton></GoToTopButton>
        </>
    );
}
export default Patents;