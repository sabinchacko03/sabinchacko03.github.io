import Image from 'next/image';
import 'devicon';
import { skills, experiences } from './config';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Web&nbsp;
          <code className="font-mono font-bold">Developer</code>
        </p>
      </div>

      <div className="relative place-items-center before:absolute before:h-[100px] before:w-[80px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[80px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[160px] z-[-1] text-center">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1 className='text-3xl md:text-4xl font-bold'>
          Sabin Chacko
        </h1>
        <p className={`m-0 md:mt-5 max-w-[95ch] text-sm opacity-50`}>
          {"👋 I'm Sabin Chacko. A Web Developer, ever since I started working with PHP Codeigniter in 2013. Later started using Laravel and worked on some major projects written in Laravel. Mostly worked as a Backend Developer handling REST and SOAP APIs, most of the times, with MySQL and MS SQL SERVER Databases. Knows ReactJS and Python. Thank you 💜"}
        </p>
      </div>

      <div className="text-center mt-4">

        <h2 className={`mb-3 text-2xl font-semibold`}>
          skills
        </h2>

        <div className="relative border rounded-lg border-gray-200 bg-gradient-to-b from-gray-200 to-gray-300 p-2">

          <ul className='flex gap-2 flex-wrap justify-center'>

            {skills.map((skill, i) => {

              return (
                <li className="list-inline-item mx-3" key={i}>
                  <i className={skill.icon + ' colored'} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skill.name}
                    </p>
                  </i>
                </li>
              )

            })}

          </ul>

        </div>

      </div>

      <div className='text-center mt-4'>

        <h2 className={`mb-3 text-2xl font-semibold`}>
          Experience
        </h2>
        <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
          {experiences.map((experience, index) => {
            return (
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" key={index}>
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                  </svg>
                </div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div class="flex items-center justify-center space-x-2 mb-1">
                    <div class="font-bold text-slate-900">{experience.company}</div>
                  </div>
                  <time class="font-caveat font-medium text-indigo-500 text-sm">{experience.years}</time>
                  <div class="text-slate-500 font-bold text-sm md:text-normal">{experience.mainTech.join(', ')}</div>
                  <div class="text-slate-500 text-sm md:text-normal">{experience.technologies.join(', ')}</div>
                  <div className='text-gray-700 flex justify-center text-sm mt-2'>
                    <svg className="w-6 h-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z" /></svg>
                    {experience.location}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-4">
        <a
          href="https://ae.linkedin.com/in/sabin-chacko?trk=people-guest_people_search-card"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            My LinkedIn profile
          </p>
        </a>

        <a
          href="https://github.com/sabinchacko03"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GIthub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Checkout my GitHub profile
          </p>
        </a>
        <a
          href="https://stackoverflow.com/users/3085642/sabin-chacko"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            StackOverflow{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            StackOverflow Activities
          </p>
        </a>
      </div>
    </main>
  )
}
