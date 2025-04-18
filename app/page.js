import Image from "next/image";
import "devicon";
import { skills, experiences } from "./config";
import JobDetails from "./components/JobDetails";

export default function Home() {
  const calculateYears = () => {
    const startDate = new Date(2013, 10);
    const currentDate = new Date();

    let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      yearsDifference--;
    }

    return yearsDifference;
  };

  const years = calculateYears();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Full Stack&nbsp;
          <code className="font-mono font-bold">Engineer</code>
        </p>
      </div>

      <div className="relative place-items-center before:absolute before:h-[100px] before:w-[80px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[80px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[160px] z-[-1] text-center">
        <h1 className="text-3xl md:text-4xl font-bold my-4">Sabin Chacko</h1>
        <p
          className={`m-0 md:mt-5 max-w-[95ch] text-sm opacity-50 my-2 md:m-0`}
        >
          {`I am Sabin Chacko, a seasoned Full-Stack Developer with ${years}+ years of expertise in designing and implementing robust web applications. Proficient in multiple PHP frameworks, including Laravel, Yii2, and CodeIgniter. Skilled in frontend technologies such as ReactJS and VueJS, with a solid background in AWS, REST APIs, and SOAP Web Services.`}
        </p>
        <p
          className={`m-0 md:mt-5 max-w-[95ch] text-sm opacity-50 my-2 md:m-0`}
        >
          {
            "Proven track record in leading teams, conducting tests, gathering requirements, optimizing application performance, and managing integrations (e.g., courier app to AD Police). Experienced in delivering demo sessions and overseeing deployments. Basic understanding of Python and Django, with a continuous drive to learn and adapt to new technologies."
          }
        </p>
        <p
          className={`m-0 md:mt-5 max-w-[95ch] text-sm opacity-50 my-2 md:m-0`}
        >
          {
            "Passionate about leveraging my technical and leadership skills to drive project success and contribute to innovative solutions."
          }
        </p>

        <p
          className={`m-0 md:mt-5 max-w-[95ch] text-sm opacity-50 my-2 md:m-0`}
        >
          {"Thank you for visiting my portfolio. 💜"}
        </p>
      </div>

      <div className="text-center mt-4">
        <h2 className={`text-2xl font-semibold my-4`}>skills</h2>

        <div className="relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600/20 via-gray-200/10 to-transparent">
          <ul className="flex gap-2 flex-wrap justify-center dark:bg-gray-800 p-4 rounded-lg">
            {skills.map((skill, i) => {
              return (
                <li className="list-inline-item mx-3 my-2" key={i}>
                  <i
                    className={skill.icon + " colored"}
                    style={{ fontSize: "220%" }}
                  >
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skill.name}
                    </p>
                  </i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="text-center mt-4  w-full md:w-3/4">
        <h2 className={`my-4 text-2xl font-semibold`}>Experience</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((experience, index) => {
            return (
              <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                key={index}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-100 dark:bg-gray-800 p-4 rounded border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col items-center justify-center space-x-2 mb-1">
                    <div className="font-bold text-slate-900 dark:text-slate-200">
                      {experience.company}
                    </div>
                    <div className="text-gray-500 flex justify-center text-sm ">
                      {experience.location}
                    </div>
                  </div>
                  <time className="font-caveat font-medium text-lime-600 dark:text-sky-200 text-sm">
                    {experience.years}
                  </time>
                  <div className="text-blue-400 dark:text-slate-400 font-bold text-sm md:text-normal">
                    {experience.mainTech.join(", ")}
                  </div>
                  <div className="text-sky-700 text-xs md:text-normal my-2">
                    {experience.technologies.join(", ")}
                  </div>
                  <JobDetails experience={experience} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-10 block md:flex justify-between text-center lg:max-w-5xl lg:w-full w-full lg:mb-0  lg:text-left mt-8">
        <a
          href="https://ae.linkedin.com/in/sabin-chacko?trk=people-guest_people_search-card"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 flex flex-col items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{" "}
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{" "}
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            StackOverflow{" "}
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
  );
}
