// Thirteenth section of webpage
const ArticleThirteen = () => {
    return (
        <article className="flex flex-col bg-lighter-orange justify-between items-center h-auto">
        <div className="my-12 flex md:flex-row flex-col md:w-4/5 justify-center items-center">
            <section className="flex flex-col md:w-1/2 md:mx-0 mx-10 items-center">
            <img className="md:w-40 w-50 md:inline hidden" src="./src/assets/images/icons/Pixel6Icon.png" alt="Google Pixel 6 Icon" />
            <h1 className="text-center text-7xl font-bold text-dark-gray my-4">
                Portraits photographed
                beautifully and authentically
            </h1>
            <p className="py-12 leading-relaxed text-2xl">
                Historically, camera technology has overlooked and excluded people with darker skin tones. Today’s cameras carry that same bias. Google and Nine’s portfolio of brands are helping improve the representation of diverse skin tones by producing image galleries for use across the Nine Network and Getty’s Refinery29 We Are Many collection.
            </p>
            <a className="mb-12 bg-light-orange px-12 py-4 rounded-md hover:cursor-pointer" href="https://en.wikipedia.org/wiki/Pixel_6">
                Learn more about Pixel 6
            </a>
            </section>
            <section className="flex flex-col md:w-2/3 lg:w-1/3 w-3/4 items-center">
            <img src="/images/ArticleImage13.png" alt="Group photo of four young people sitting on the grass " />
            <p className="p-0 text-dark-gray font-medium text-xl md:hidden inline-block">ADVERTISING FEATURE</p>
            <img className="md:w-40 w-50 md:hidden inline" src="/icons/Pixel6Icon.png" alt="Google Pixel 6 Icon" />
            </section>
        </div>
        <div>
            <p className="mb-12 text-dark-gray font-medium text-lg inline-block md:inline hidden">ADVERTISING FEATURE</p>
        </div>
        </article>
    )
}

export default ArticleThirteen