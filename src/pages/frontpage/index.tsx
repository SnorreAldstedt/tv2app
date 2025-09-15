import FeedView from './components/FeedView'
import { ContentContext } from "../../App"
import { Key, useContext } from "react"
import './style.css'
import { Feed } from '../../classes/interfaces';

function Frontpage(){
    const {movieFeedContent} = useContext(ContentContext);
    return (
        <section className='main'>
            {Array.isArray(movieFeedContent.feeds) && movieFeedContent.feeds.length > 0 ? (
                movieFeedContent.feeds.map((feed: Feed, index: Key | null | undefined) => (
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