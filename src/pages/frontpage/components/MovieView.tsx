
function MovieView ({movie, styles}) {
    function logMovie(){
        console.log(movie)
    }
    const feedAspect = 
        styles?.layout?.aspect ? styles.layout.aspect.replace(":", "/") : '2/3';  
    
    const imageSrc = movie?.image?.src ? movie.image.src :  "none";

    const imageFittedSrc = feedAspect === '2/3' && imageSrc !== "none" ? imageSrc+"?location=moviePoster" : imageSrc;

    //console.log(imageSrc)
    //console.log(feedAspect)

    return(
        <div className="movie_card" onClick={logMovie} 
            style={{ 
                aspectRatio: feedAspect, 
                backgroundImage: `url(${imageFittedSrc})`,
                ...styles}}>
            {/*<p>{movie ? movie.title : "Movie"}</p>*/}
            {styles.layout.name === "buttons" || imageSrc ==="none"? (
                <p>{movie.title}</p>
            ) : null }
        </div>
    )
}
export default MovieView;