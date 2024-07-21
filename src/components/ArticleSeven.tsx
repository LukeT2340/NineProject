// Seventh section of webpage
const ArticleSeven = () => {
    return (
        <article className="flex flex-col md:flex-row md:w-4/5 text-dark-gray bg-white items-center self-center mx-10 md:mx-0">
        <section className="md:order-1 order-2 flex md:w-1/2 justify-center">
            <img className="md:w-3/4" src="/images/ArticleImage7.png" alt="Girl in blue dress with black hair. Blue background"></img>
        </section>
        <section className="md:order-2 order-1 md:w-1/2 flex flex-col items-center mb-10 md:mb-0">
            <p className="md:w-1/2 leading-relaxed text-xl md:pt-10 pb-0 text-lg md:mx-0 mx-10 font-medium">
            The emulsion used to coat film stock varies 
            in its ability to accurately photograph darker skin tones, which is then compounded by the ways the colours are calibrated when photos are developed.

            Many of the same underlying biases have remained in digital photography. “Cameras that incorrectly expose skin tones are a troubling repeat of history, and play towards the erasure of entire groups of people,” Nguyen says. “They’re a prime example of companies not trying hard enough, creating a product that fails to perform its simplest purpose of correctly photographing an image.”  </p>
        </section>
        </article>
    )
}

export default ArticleSeven