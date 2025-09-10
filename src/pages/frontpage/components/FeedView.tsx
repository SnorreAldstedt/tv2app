import { ContentContext } from "../../../App"
import { useContext } from "react"
import MovieView from "./MovieView";

function FeedView({ feed }) {
    // Optionally, you can still use ContentContext if needed
    // const { movieFeedContent } = useContext(ContentContext)
    function logFeed(){
        console.log(feed)
    }
    return (
        <>
            <h2 onClick={logFeed}>{feed.title}</h2>
            <ul className="movie_feed">
            {feed.content.map((movie, index) => (
                <li key= {index}>
                    <MovieView movie={movie} styles={feed.styles}/>
                </li>
            ))}
            </ul>
        </>
    )
}

export default FeedView;