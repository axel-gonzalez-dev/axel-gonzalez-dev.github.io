import Link from "next/link";

export default function Home() {

  const socialMediaLinks = [
    {
      url: 'https://www.linkedin.com/in/axel-gonzalez-dev/',
      name: 'Linkedin'
    },
    {
      url: 'https://twitter.com/axelgonzalezdev',
      name: 'Twitter'
    },
    {
      url: 'https://codepen.io/axel-gonzalez-dev',
      name: 'Codepen'
    },
    {
      url: 'https://www.codecademy.com/profiles/axel.gonzalez.dev',
      name: 'Codecademy'
    },
    {
      url: 'https://leetcode.com/axelgonzalezdev/',
      name: 'Leetcode'
    },
    {
      url: 'https://platzi.com/p/davidaxel121/',
      name: 'Platzi'
    },
    {
      url: 'https://www.udemy.com/user/david-axel-gonzalez-flores/',
      name: 'Udemy'
    },
    {
      url: 'https://github.com/axel-gonzalez-dev',
      name: 'Github'
    }
  ]

  return (
    <main>

      <section id="hero" className="bg-desert dark:bg-asphalt | text-asphalt dark:text-desert text-center | min-h-[70vh] | flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold">Axel Gonzalez</h1>
          <p className="font-mono text-lg | mt-2">Frontend developer / QA Automation Tester</p>
          <a href="#about" type="button" className="block | mt-4 | p-2 | bg-asphalt dark:bg-desert | text-desert dark:text-asphalt hover:bg-gray-700 dark:hover:bg-gray-300 | font-bold | rounded-xl | cursor-pointer">About me</a>
        </div>
      </section>

      <section id="about" className="text-center | min-h-[60vh] | bg-gray-50 dark:bg-gray-900 | text-asphalt dark:text-desert | flex justify-center items-center | p-4 py-10">
        <div>
          <h2 className="mb-7 | font-bold | text-3xl">About me</h2>
          <p className="text-lg">I am a Frontend Developer & QA Automation, loves building responsive web apps & automating tests with React & Cypress JS</p>

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

      <section id="contact" className="min-h-[40vh] | bg-gray-50 dark:bg-gray-900 | text-asphalt dark:text-desert | p-4 py-10">
        <h2 className="text-3xl font-bold text-center | mb-20">Contact</h2>

        <div className="flex flex-col sm:justify-around sm:flex-row">
          <div>
            <p>Email:</p>
            <a className="block | text-lg font-semibold | mt-2 | hover:opacity-70" href="mailto:axel.gonzalez.dev@gmail.com">axel.gonzalez.dev@gmail.com</a>
          </div>
          <div className="mt-8 sm:mt-0">
            <p>Social media</p>

            <ul className="mt-2">
              {socialMediaLinks.map(({ url, name }) => (
                <li className="mt-1 | hover:opacity-70 | font-semibold"><a target="_blank" href={url}>{name}</a ></li>
              ))}
            </ul>

            <div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
