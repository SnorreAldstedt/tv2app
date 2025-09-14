import { ContentContext } from "../../App"
import { useContext } from "react"
import { useLocation } from "react-router-dom";
import './style.css'

function Moviepage(){

    const location = useLocation();
    const { movie } = location.state;
    console.log(movie)

    const imageLink = movie?.image?.src ? movie.image.src :  "none";
    const imagePoster = imageLink ? imageLink+"?location=moviePoster" : "none"

    const {movieFeedContent} = useContext(ContentContext);
    return (
        <section className="main" style= {{
            background: `linear-gradient(to bottom, rgba(26,0,51,0.5) 0%, #110021ff 70%), url(${imageLink+"?width=1920"})`,
            backgroundSize: "contain"}}>
            {/*<img className="movie-image" src={imageLink+"?width=1920"} alt={movie.title}/>*/}
            <div className="info-movie-div">
                <div className="text-info">
                    <h2>{movie?.title ? movie.title : "Loading movie"}</h2>
                    <p className="price-tag">
                        {movie.labels && movie.labels.length > 0 ? movie.labels[0].text : ""}
                    </p>
                    <br/>
                    <p>{movie?.description ? movie.description : "Loading movie"}</p>
                </div>
                <div className="image-poster-info" style={{backgroundImage: `url(${imagePoster})`, }}>
                </div>
            </div>
        </section>
    )
}

export default Moviepage;