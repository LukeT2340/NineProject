import { React, useRef, RefObject } from "react";

const App = () => {
  const pageEndRef = useRef(null);

  return (
    <>
      <div>
        <main className="flex flex-col" style={{ "margin-top": "44px" }}>
          <ArticleOne pageEndRef={pageEndRef} />
          <ArticleTwo />
          <ArticleThree />
          <ArticleFour />
          <div ref={pageEndRef} />
        </main>
      </div>
    </>
  )
}

interface ArticleOneProps {
  pageEndRef: RefObject<HTMLDivElement>;
}

const ArticleOne: React.FC<ArticleOneProps> = ({ pageEndRef }) => {
  const handleScrollButtonClicked = () => {
    if (pageEndRef.current) {
      pageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <article className="pb-12 flex md:flex-row flex-col bg-white md:m-0 m-8 h-auto items-center justify-between md:w-full lg:w-10/12">
      <section className="order-2 md:order-2 md:me-12 md:w-8/12 w-full">
        <img src="./src/assets/images/article/ArticleImage1.png" alt="Picture of woman laying on grass"></img>
      </section>

      <section className="order-1 md:order-2 flex flex-col justify-center md:items-start items-center font-sans md:w-4/12 sm:w-6/12 w-10/12 md:text-left text-center">
          <div className="flex items-center md:self-start">
            <span className="mr-3 text-base md:inline hidden">In collaboration with</span>
            <div className="text-center">
              <p className="p-0 text-dark-gray font-medium text-base md:hidden inline-block">ADVERTISING FEATURE</p>
              <img className="md:w-40 w-50" src="./src/assets/images/icons/Pixel6Icon.png" alt="Google Pixel 6 Icon" />
            </div>
          </div>
          <h1 className="text-7xl font-bold text-dark-gray my-4">A new camera for a new age</h1>
          <p className="md:hidden inline-block text-base p-2">In collaboration with Google</p>
          <p className="text-lg leading-13 p-2">With the new Pixel 6 smartphone, Google has designed a camera with a diverse range of skin tones in mind.</p>
          <button onClick={handleScrollButtonClicked} className="text-lg bg-light-green p-5 rounded-md md:block hidden hover:opacity-80 mt-3">Scroll for more</button>
      </section>
    </article>
  )
}

const ArticleTwo = () => {
  return (
    <article className="py-12 flex md:flex-row flex-col bg-white md:m-0 m-8 h-auto items-center self-center justify-center mx-10 md:w-4/5">
        <section className="md:w-1/2 flex flex-col items-center">
          <p className="md:w-1/2 leading-relaxed text-xl">
            Growing up, model and dancer Ragavi Ragavan didn’t often see pictures of people who look like her. “As a young person, I was very impressionable, as most young people are. I was looking for permission to be myself and looking for people that look like me – 
  it was difficult,” she recalls.
          </p>
          <p className="md:w-1/2 leading-relaxed text-xl">
            With around one in four Australians born overseas and another 800,000 identifying as First Nations (Australian Bureau of Statistics), Ragavan’s experience is far from unique. So, when the opportunity came up for her to take part in a photoshoot for Getty Images, she jumped at the chance. 
          </p>
        </section>
        <section className="md:w-2/5 flex flex-col items-center">
          <img src="./src/assets/images/article/ArticleImage2.png" alt="Picture of girl sitting on the grass"></img>
        </section>
    </article>
  )
}

const ArticleThree = () => {
  return (
    <article className="py-12 flex md:flex-row flex-col bg-white md:m-0 m-8 h-auto items-center self-center justify-center mx-10 md:w-4/5">
      <section className="md:w-7/12 flex flex-col items-center relative">
        <div className="relative bg-lighter-green md:right-0 right-10">
            <img className="relative left-10 top-10" src="./src/assets/images/article/ArticleImage3.png" alt="Picture of girl sitting on the grass" />
        </div>
      </section>
      <section className="md:w-1/2 flex flex-col items-center">
        <p className="md:w-1/2 leading-relaxed text-xl mt-12">
        “As soon as they said Getty, I said yes. 
        It means I get to represent people that look like me – South Asian with curly hair, big eyes, a big smile. You don’t always get to see that in the Australian media. It was really important for me to be part of that.”
        </p>
      </section>
    </article>
  )
}

const ArticleFour = () => {
  return (
    <article className="flex md:flex-row flex-col bg-light-orange  h-auto items-center self-center justify-center w-full">
      <section className="md:w-1/2 flex flex-col items-center">
        <h1 className="text-7xl text-dark-gray italic w-5/12 font-medium font-sans">
          “I was looking 
          for people that 
          look like me – 
          it was difficult.”
        </h1>
        <p>– Ragavi Ragavan</p>
      </section>
      <section className="md:w-1/2 flex flex-col items-center">
        <img src="./src/assets/images/article/ArticleImage4.png" alt="Picture of girl sitting on the grass" />
      </section>
    </article>
 )
}

export default App
