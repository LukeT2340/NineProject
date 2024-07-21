// Eleventh section of webpage
const ArticleEleven = () => {
    return (
        <article className="pt-12 flex flex-col md:flex-row md:w-4/5 text-dark-gray bg-white items-center self-center h-auto">
        <section className="md:w-1/2 flex flex-col items-center">
            <p className="md:w-1/2 leading-relaxed text-xl md:pt-10 pt-0 text-lg md:mx-0 mx-10 mb-10 md:mb-0 font-medium">
            Leading this mission is Florian Koenigsberger, Google’s Image Equity Lead in New York. With his own background in photography, Koenigsberger was well aware of the limitations of many cameras in portraying people with darker skin tones.
            <br/>
            <br/>
            He spent the better part of a year speaking to a cross-section of photographers, cinematographers and engineers to find out what gains could be made. “One of the biggest technical decisions we made was to listen to experts who don’t build camera technology, but who specifically have built their careers around accurately and beautifully depicting and representing communities of colour,” he says.
            </p>
        </section>
        <section className="md:order-2 order-1 md:w-1/2 w-full md:mb-0 mb-12">
            <div className="relative bg-light-gray md:right-0 left-10 mx-10 md:mx-0 md:w-3/4">
            <img className="relative right-10 bottom-10" src="/images/ArticleImage11.png" alt="A girl with afro posing for the camera"></img>
            </div>
        </section>

        </article>
    )
}

export default ArticleEleven