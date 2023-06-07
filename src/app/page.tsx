import Link from "next/link";

/* Import icons as JSX */
import LinkedinIcon from '../assets/icons/linkedin';
import TwitterIcon from '../assets/icons/twitter';
import CodepenIcon from '../assets/icons/codepen';
import CodecademyIcon from '../assets/icons/codecademy';
import LeetcodeIcon from '../assets/icons/leetcode';
import PlatziIcon from '../assets/icons/platzi';
import UdemyIcon from '../assets/icons/udemy';

export default function Home() {
  return (
    <>
      <main>

        <section id="hero" className="bg-desert dark:bg-asphalt | text-asphalt dark:text-desert text-center | min-h-[70vh] | flex justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold">Axel Gonzalez</h1>
            <p className="font-mono text-lg | mt-2">Frontend developer / QA Automation Tester</p>
            <a href="#about" type="button" className="mt-4 | p-2 | bg-asphalt dark:bg-desert | text-desert dark:text-asphalt hover:bg-gray-700 dark:hover:bg-gray-300 | font-bold | rounded-xl | cursor-pointer">About me</a>
          </div>
        </section>

        <section id="about" className="text-center | min-h-[60vh] | bg-gray-50 dark:bg-gray-900 | text-asphalt dark:text-desert | flex justify-center items-center | p-4 py-10">
          <div>
            <h2 className="mb-7 | font-bold | text-3xl">About me</h2>
            <p className="text-lg">I am a Frontend Develope & QA Automation with. Loves building responsive web apps & automating tests with React & Cypress JS</p>

            <div className="mt-20 | flex justify-around">
              <div>
                <h5 className="font-bold text-lg">Frontend</h5>

                <ul className="mt-5">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React JS</li>
                  <li>Bootstrap CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-lg">QA Automation Tester</h5>

                <ul className="mt-5">
                  <li>Cypress JS</li>
                  <li>Mocha JS</li>
                  <li>Jest</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-lg">Other skills</h5>

                <ul className="mt-5">
                  <li>AWS API Gateway</li>
                  <li>AWS Cognito</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="text-center | flex justify-center items-center | min-h-[50vh] | bg-desert dark:bg-asphalt | text-asphalt dark:text-desert | p-4">
          <div>
            <h2 className="mb-7 | font-bold | text-3xl">Projects</h2>

            <p className="animate-bounce">I am still working on create some awesome projects, come later to see more 👀</p>
          </div>
        </section>

        <section id="contact" className="text-center | flex justify-center items-center | min-h-[40vh] | bg-gray-50 dark:bg-gray-900 | text-asphalt dark:text-desert | p-4 py-10">
          <div className="min-w-full">
            <h2 className="text-3xl font-bold | mb-20">Contact</h2>

            <div className="grid grid-cols-3 gap-8 place-items-center">
              <Link href="https://www.linkedin.com/in/axel-gonzalez-dev/" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <LinkedinIcon />
              </Link>
              <Link href="https://twitter.com/axelgonzalezdev" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <TwitterIcon />
              </Link>
              <Link href="https://codepen.io/axel-gonzalez-dev" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <CodepenIcon />
              </Link>
              <Link href="https://www.codecademy.com/profiles/axel.gonzalez.dev" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <CodecademyIcon />
              </Link>
              <Link href="https://leetcode.com/axelgonzalezdev/" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <LeetcodeIcon />
              </Link>
              <Link href="https://platzi.com/p/davidaxel121/" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <PlatziIcon />
              </Link>
              <Link href="https://www.udemy.com/user/david-axel-gonzalez-flores/" target="_blank" className="animate-pulse hover:animate-none ease-in duration-300 | fill-asphalt dark:fill-desert">
                <UdemyIcon />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
