import Image from "next/image"

/* Import icons */
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import codepenIcon from "../../assets/icons/codepen.svg";

export default function Home() {
  return (
    <>
      <nav className="border-b border-asphalt | flex justify-between items-center | p-2 | sticky top-0 z-2 | bg-desert">
        <span className="text-1xl font-bold">Axel González</span>
        <ul className="flex justify-evenly items-center">
          <li className="mr-3"><a href="#about" className="hover:text-blue-600">About</a></li>
          <li className="mr-3"><a href="#works" className="hover:text-blue-600">Works</a></li>
          <li className=""><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      <main>

        <section id="about" className="px-4 py-16 | bg-asphalt | text-desert text-center">
          <span>My name is</span>
          <h1 className="text-4xl font-bold | mt-5">Axel Gonzalez</h1>
          <button className="mt-7 | bg-desert | text-asphalt font-bold | p-2 | rounded-xl">I’m a frontend
            developer</button>
        </section>

        <section className="px-4 py-20 | text-center">
          <div>
            <h2 className="mb-2 | font-medium">Who i am <br></br> <span className="font-bold text-2xl">Hello</span></h2>
            <p>I'm a junior frontend developer. I like to use <b>MERN</b> as my main stack and other CSS libraries
              like <b>Bootstrap</b> or <b>TailwindCSS</b></p>
          </div>
        </section>

        <section id="works" className="px-4 py-8 | text-center text-desert | bg-asphalt">
          <h2 className="text-3xl font-bold">Works</h2>
          <h3 className="text-lg font-bold">Awesome projects</h3>

          <div className="mt-5">
            <p className="animate-bounce">I'm still working on create awesome projects, come later to see more 👀</p>
          </div>
        </section>

        <section id="contact" className="px-4 py-12 | text-center">
          <h2 className="text-3xl font-bold | mb-6">Contact</h2>
          <div className="flex | justify-around">
            <a href="https://www.linkedin.com/in/davidaxel121/" target="_blank">
              <Image width={36} height={40} className="animate-pulse hover:animate-none ease-in duration-300" priority src={linkedinIcon} alt="Twitter icon" />
            </a>
            <a href="https://twitter.com/axelgonzalezdev" target="_blank">
              <Image width={36} height={40} className="animate-pulse hover:animate-none ease-in duration-300" priority src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://codepen.io/axel-gonzalez-dev" target="_blank">
              <Image width={36} height={40} className="animate-pulse hover:animate-none ease-in duration-300" priority src={codepenIcon} alt="Twitter icon" />
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
