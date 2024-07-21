import {  RefObject } from "react";

interface ArticleOneProps {
    pageEndRef: RefObject<HTMLDivElement>;
}

// First section of webpage
const ArticleOne: React.FC<ArticleOneProps> = ({ pageEndRef }) => {
    // Handle scroll button clicked (scrolls to bottom of webpage)
    const handleScrollButtonClicked = () => {
        if (pageEndRef.current) {
        pageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <article className="flex md:flex-row flex-col bg-white md:m-0 m-8 self-start items-center md:w-5/6 md:space-x-20">
        <img className="order-2 md:order-2 md:me-12 md:w-2/3" src="./src/assets/images/article/ArticleImage1.png" alt="Picture of woman laying on grass"/>
        <section className="order-1 md:order-2 flex flex-col justify-center md:items-start items-center lg:w-1/3 md:w-4/6 w-5/6 md:text-left text-center">
            <div className="flex items-center">
                <span className="mr-3 text-lg md:inline hidden">In collaboration with</span>
                <div className="text-center">
                <p className="p-0 text-dark-gray font-medium text-lg md:hidden inline-block">ADVERTISING FEATURE</p>
                <img className="md:w-40 w-50" src="./src/assets/images/icons/Pixel6Icon.png" alt="Google Pixel 6 Icon" />
                </div>
            </div>
            <h1 className="lg:text-8xl text-7xl font-bold text-dark-gray my-2">A new camera for a new age</h1>
            <p className="md:hidden inline-block text-base p-2">In collaboration with Google</p>
            <p className="text-lg leading-13 p-2 mb-2">With the new Pixel 6 smartphone, Google has designed a camera with a diverse range of skin tones in mind.</p>
            <button onClick={handleScrollButtonClicked} className="text-lg bg-light-green p-5 rounded-md md:block hidden hover:opacity-80">Scroll for more</button>
        </section>
        </article>
    )
}

export default ArticleOne