// Fifth section of webpage
const ArticleFive = () => {
    return (
        <article className="flex flex-col md:w-4/5 text-dark-gray bg-white items-center self-center h-auto md:mx-0 mx-10">
        <h1 className="text-6xl font-medium mb-5">
            Acknowledging the past
        </h1>
        <p className="md:w-1/2 leading-8 text-xl font-medium">
            Representing diversity is just one part of the story. As photographer Daphne Nguyen points out, technology also has a role to play in how images are actually photographed.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 md:space-y-0 space-y-10">
            <img className="w-full" src="/images/ArticleImage5a.png" alt="Man in blue shirt wearing a shiny silver necklace with a K symbol on it" />
            <img className="w-full" src="/images/ArticleImage5b.png" alt="Girl with frizzy hair" />
            <img className="w-full" src="/images/ArticleImage5c.png" alt="Man looking at camera with arms crossed" />
        </div>
        </article>
    )
}
  
export default ArticleFive