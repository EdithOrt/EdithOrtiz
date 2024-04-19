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
        'Dahsboard para monitorear proyectos de restauración ecológica. He colaborado con el front end del CMS que permite la subida de datos, así como también colaboré de forma muy activa en la realización del front end del Dahsboard en el cual se visualizan los datos por medio de gráficas en highcharts, mapa de actividad con mapbox, indicadores de avance, filtros con periodos, galería de imagénes, tabla de riesgos, funcionalidad para exportar documentos en PDF por periodos a elección, centro de documentos categorizados por carpetas y más funcionalidades que permiten a las empresas tener toda la información necesaria sobre el avance de cada proyecto. Este proyecto ha sido usado por grandes empresas como Coca-cola y Pachama, así como su versión anterior ha sido utilizada por Grupo Modelo.',
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
        'Dashboard para manejar que cuentas de Toroto interesadas en medir sus emisiones de gases efecto invernadero agrupadas en tres alcances según aplique para cada caso particular. Donde las empresas contesta de forma ágil fomularios para facilitar y eficientar todo el flujo de trabajo desde la recolección de datos hasta la entrega de documentos que contiene dicha medición. Para agilizar su desarrollo se utilizó como CMS la herramienta llamada CODA en la cual los Key Account Manager sube, reciben y manipulan todos los datos para entregar al cliente. Esta plataforma ya ha sido usada en Italia y México.',
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
        'Colaboración para elaborar el rediseño del sitio oficial, donde apoyé en la realización de las siguientes secciones: projects, about toroto, nabvar y algunos componentes del home todo en responsive.',
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
        'Proyecto realizado de forma independiente. Su objetivo principal es proporcionar un lugar donde guardar texto relevante copiado en el portapapeles, ofreciiendo la opción de gestionar como más te convenga los textos guardados, con las opciones de descargar todos estos textos o los más destacados, eliminar uno por uno o todos, y/o copiar solo un texto guardado. Todo esto mientras la pestaña se encuentre aciva. Plataforma lista para todos los dispositivos.',
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
