// Fourth section of webpage
const ArticleFour = () => {
    return (
        <article className="flex md:flex-row flex-col bg-light-orange h-auto items-center self-center justify-center w-full">
        <section className="md:w-1/2 flex flex-col md:items-center items-start md:ml-0 ml-10 m-20 ">
            <h1 className="text-6xl text-dark-gray italic w-5/12 font-medium">
            “I was looking 
            for people that 
            look like me – 
            it was difficult.”
            </h1>
            <p className="text-dark-gray text-2xl italic w-5/12 font-medium p-0 pt-5">– Ragavi Ragavan</p>
        </section>
        <section className="md:w-1/2 flex flex-col items-center">
            <img src="/images/ArticleImage4.png" alt="Girl with curly hair smiling at the camera" />
        </section>
        </article>
    )
}

export default ArticleFour