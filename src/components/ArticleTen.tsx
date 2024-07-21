// Tenth section of webpage
const ArticleTen = () => {
    return (
        <article className="flex md:flex-row flex-col bg-light-green h-auto items-center self-center justify-center w-full">
        <section className="order-2 md:order-1 md:w-1/2 flex flex-col items-center">
            <img src="/images/ArticleImage10.png" alt="Side image of woman" />
        </section>
        <section className="order-1 md:order-2 md:w-1/2 flex flex-col md:items-center md:ml-0 ml-10 m-20">
            <h1 className="text-6xl text-dark-gray italic md:w-5/12 font-medium">
            “I see this new 
            camera as such a 
            great tool to open 
            up the dialogue 
            about inclusion 
            from the lens.”
            </h1>
            <p className="text-dark-gray text-2xl italic w-5/12 font-medium p-0 pt-5">– Daphne Nguyen</p>
        </section>
        </article>
    )
}

export default ArticleTen