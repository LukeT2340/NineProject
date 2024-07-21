// Third section of webpage
const ArticleThree = () => {
    return (
        <article className="pb-12 flex md:flex-row flex-col bg-white md:m-0 m-8 h-auto items-center self-center justify-center mx-10 md:w-4/5">
        <section className="md:w-7/12 flex flex-col items-center relative">
            <div className="relative bg-lighter-green md:right-0 right-10">
                <img className="relative left-10 top-10" src="./src/assets/images/article/ArticleImage3.png" alt="Picture of girl sitting on the grass" />
            </div>
        </section>
        <section className="md:w-1/2 flex flex-col items-center">
            <p className="md:w-1/2 leading-relaxed text-xl mt-12 font-medium">
            “As soon as they said Getty, I said yes. 
            It means I get to represent people that look like me – South Asian with curly hair, big eyes, a big smile. You don’t always get to see that in the Australian media. It was really important for me to be part of that.”
            </p>
        </section>
        </article>
    )
}

export default ArticleThree