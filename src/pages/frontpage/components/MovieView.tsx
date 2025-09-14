
import { Link } from "react-router-dom";

function MovieView ({movie, styles}) {
    function logMovie(){
        //console.log(movie)
    }

    const feedAspect = 
        styles?.layout?.aspect ? styles.layout.aspect.replace(":", "/") : '2/3';  
    
    const imageSrc = movie?.image?.src ? movie.image.src :  "none";

    const imageAspectSrc = feedAspect === '2/3' && imageSrc !== "none" ? imageSrc+"?location=moviePoster" : imageSrc;

    const imageFittedSrc = feedAspect === '32/9' ? imageAspectSrc+'?width=800' : imageAspectSrc

    const id = movie?.gpid ? movie.gpid : "none"

    //console.log(imageSrc)
    //console.log(feedAspect)

    return(
        <Link to={`/movie/${id}`} state={{movie}}>
        <div className="movie_card" onClick={logMovie} 
            style={{ 
                aspectRatio: feedAspect, 
                backgroundImage: `url(${imageFittedSrc})`,
                ...styles}}>
            {/*<p>{movie ? movie.title : "Movie"}</p>*/}
            {styles.layout.name === "buttons" || imageSrc ==="none"? (
                <p>{movie?.title ? movie.title : "Movie"}</p>
            ) : null }
        </div>
        </Link>
    )
}
export default MovieView;