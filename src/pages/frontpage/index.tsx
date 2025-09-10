import FeedView from './components/FeedView'
import { ContentContext } from "../../App"
import { useContext } from "react"
import './style.css'

function Frontpage(){
    const {movieFeedContent} = useContext(ContentContext);
    return (
        <section className='main'>
            <h1>TV 2 Case</h1>
            {Array.isArray(movieFeedContent.feeds) && movieFeedContent.feeds.length > 0 ? (
                movieFeedContent.feeds.map((feed, index) => (
                    <div key={index} className='feed'>
                        <FeedView feed={feed} />
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </section>
    )
}

export default Frontpage;