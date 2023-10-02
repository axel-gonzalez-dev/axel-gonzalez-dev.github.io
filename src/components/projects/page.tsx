import Link from 'next/link'
import { Project } from "./interfaces/project.interface"

interface Props {
    projects: Project[]
}

export default function Projects(props: Props) {

    return (
        <div className='grid grid-cols-2 gap-4 justify-items-strech'>
            {props.projects.map((project) => (
                <Link href={project.url} target='_blank' className="block p-6 bg-desert border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {project.technologies.map(tech => (
                            <>{tech} {tech === project.technologies.at(-1) ? "" : "- "}</>
                        ))}
                    </p>
                </Link>
            ))}
        </div>
    )
}