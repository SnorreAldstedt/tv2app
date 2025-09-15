import { useLocation } from "react-router-dom";
import MovieComponent from "./components/MovieComponent";
import { useEffect } from "react";
import './style.css';

function Moviepage() {
    const location = useLocation();
    const { movie } = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <MovieComponent movie={movie} />;
}

export default Moviepage;