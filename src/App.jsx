import { createContext, useEffect, useState } from 'react'
import './App.css'
import Frontpage from './pages/frontpage';
import FeedView from './pages/frontpage/components/FeedView';
import { Routes, Route } from 'react-router-dom'

export const ContentContext = createContext();

function App() {
  //const [count, setCount] = useState(0)
  const [movieFeedContent, setMovieFeedContent] = useState({});
  const apiUrl = "/api/v4/feeds/page_01jwxh2p1me02sbhyxmht24cbp" // Correct proxy path

  const getContent = useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(apiUrl);
      const jsonContent = await response.json();
      setMovieFeedContent(jsonContent)
      //console.log(jsonContent)
    }
    fetchContent();

  }, [])
  console.log(movieFeedContent)

  return (
    <>
      <header></header>

      <ContentContext.Provider value = {{movieFeedContent, setMovieFeedContent, apiUrl, getContent}}>
        <Routes>
          <Route path="/" element = {<Frontpage/>}/>
        </Routes>
      </ContentContext.Provider>
    </>
  )
}

export default App
