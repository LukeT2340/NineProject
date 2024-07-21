import { useRef } from "react";
import ArticleOne from './components/ArticleOne';
import ArticleTwo from "./components/ArticleTwo";
import ArticleThree from "./components/ArticleThree";
import ArticleFour from "./components/ArticleFour";
import ArticleFive from "./components/ArticleFive";
import ArticleSix from "./components/ArticleSix";
import ArticleSeven from "./components/ArticleSeven";
import ArticleEight from "./components/ArticleEight";
import ArticleNine from "./components/ArticleNine";
import ArticleTen from "./components/ArticleTen";
import ArticleEleven from "./components/ArticleEleven";
import ArticleTwelve from "./components/ArticleTwelve";
import ArticleThirteen from "./components/ArticleThirteen";

// Google Pixel 6 advertisement webpage
const App = () => {
  const pageEndRef = useRef(null); // References bottom of webpage

  return (
    <>
      <div>
        <main className="flex flex-col space-y-20 h-auto font-sans" style={{ 'margin-top': '44px'}}>
          <ArticleOne pageEndRef={pageEndRef} />
          <ArticleTwo />
          <ArticleThree />
          <ArticleFour />
          <ArticleFive />
          <ArticleSix />
          <ArticleSeven />
          <ArticleEight />
          <ArticleNine />
          <ArticleTen />
          <ArticleEleven />
          <ArticleTwelve />
          <ArticleThirteen />
          <div ref={pageEndRef}/>
        </main>
      </div>
    </>
  )
}

export default App
