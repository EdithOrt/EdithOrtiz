'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '@/app/ui/styles/projects.module.scss'
import ProjectItem from './projectItem'

const ProjectsContainer = () => {
  const projectsList = [
    {
      title: 'Operations Dashboard',
      description:
        "Dashboard to monitoring ecological restoration projects. I colaborated with the front end of the CMS to allow data update, I colaborate on all front end sections of the Dahsboard. \n\n Within this the data is displayed with highcharts graphs, activity map with mapbox, KPI's, period filters, image gallery, risk table, functionality to export documents in PDF for periods of your choice, document center categorized by folders and more features that allow companies to have all the necessary about the progress of each project. \n\n The project has been used by big companies like Coca-cola and Pachama, its previous versions has bee used by AB InBev.",
      id: 'ops-dasboard',
      technologies: [
        {
          name: 'Javascript',
          id: 'javascript'
        },
        {
          name: 'HTML',
          id: 'html'
        },
        {
          name: 'CSS',
          id: 'css'
        },
        {
          name: 'Sass',
          id: 'sass'
        },
        {
          name: 'React js',
          id: 'react'
        },
        {
          name: 'Next js',
          id: 'nextjs'
        },
        {
          name: 'GraphQL',
          id: 'graphql'
        },
        {
          name: 'Git',
          id: 'git'
        },
        {
          name: 'GitLab',
          id: 'gitlab'
        },
        {
          name: 'Boostrap',
          id: 'boostrap'
        },
        {
          name: 'Mapbox',
          id: 'mapbox'
        },
        {
          name: 'Docker',
          id: 'docker'
        },
        {
          name: 'Highcharts',
          id: 'highcharts'
        }
      ]
    },
    {
      title: 'Carbon monitoring engineering',
      description:
        'Dashboard to manage Toroto accounts interested in measuring your CO₂ emissions agruped into three scopes as applicable for each particular case. \n\n In this dashboard companies answer forms in and agile way to make it easier and more efficient all work flow from data collection delivery of documents containing the until measurement. \n\n To speed up the development, the tool called CODA was used as a CMS where the Key Account Managers upload, receive and manipulate all data to deliver to the company. \n\n This dashboard has been used in Italy and México.',
      id: 'cme',
      technologies: [
        {
          name: 'Javascript',
          id: 'javascript'
        },
        {
          name: 'HTML',
          id: 'html'
        },
        {
          name: 'CSS',
          id: 'css'
        },
        {
          name: 'Sass',
          id: 'sass'
        },
        {
          name: 'React js',
          id: 'react'
        },
        {
          name: 'Next js',
          id: 'nextjs'
        },
        {
          name: 'Git',
          id: 'git'
        },
        {
          name: 'GitLab',
          id: 'gitlab'
        },
        {
          name: 'CODA',
          id: 'coda'
        },
        {
          name: 'Docker',
          id: 'docker'
        }
      ]
    },
    {
      title: 'toroto.com',
      description:
        'Collaboration to develop the redesign of the official Toroto site. I developed the front end of the following sections and components: projects, about Toroto, navbar, and some home components, all of this in responsive.',
      id: 'toroto',
      technologies: [
        {
          name: 'Javascript',
          id: 'javascript'
        },
        {
          name: 'HTML',
          id: 'html'
        },
        {
          name: 'CSS',
          id: 'css'
        },
        {
          name: 'Sass',
          id: 'sass'
        },
        {
          name: 'React js',
          id: 'react'
        },
        {
          name: 'Next js',
          id: 'nextjs'
        },
        {
          name: 'GraphQL',
          id: 'graphql'
        },
        {
          name: 'Git',
          id: 'git'
        },
        {
          name: 'GitLab',
          id: 'gitlab'
        },
        {
          name: 'Mapbox',
          id: 'mapbox'
        },
        {
          name: 'Docker',
          id: 'docker'
        }
      ]
    },
    {
      title: 'Your clipboard',
      description:
        'Independient project. Its principal objetive is provide a place to save relevant text copied from clipboard, offering the option to manager the save texts as most convenient, with options to download all these texts or only the favorites, copy each text you need, and/or delete each o all data. All this while page is active in your browser. Page ready for all devices.',
      id: 'y-clipboard',
      technologies: [
        {
          name: 'Javascript',
          id: 'javascript'
        },
        {
          name: 'Typescript',
          id: 'typescript'
        },
        {
          name: 'HTML',
          id: 'html'
        },
        {
          name: 'CSS',
          id: 'css'
        },
        {
          name: 'React js',
          id: 'react'
        },
        {
          name: 'Next js',
          id: 'nextjs'
        },
        {
          name: 'Git',
          id: 'git'
        },
        {
          name: 'Github',
          id: 'github'
        },
        {
          name: 'Tailwind',
          id: 'tailwind'
        },
        {
          name: 'Figma',
          id: 'figma'
        }
      ]
    }
  ]

  return (
    <section
      className={styles.main}
      id='projects'
    >
      {projectsList?.map(project => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          id={project.id}
        />
      ))}
    </section>
  )
}

export default ProjectsContainer
