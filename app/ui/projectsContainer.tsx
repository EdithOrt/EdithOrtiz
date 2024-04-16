'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from '@/app/ui/styles/projects.module.scss'
import ProjectItem from './projectItem'

import metaregistry1 from '@/public/projects/metaregistry.png'

const ProjectsContainer = () => {
  const projectsList = [
    {
      title: 'Operations Dashboard',
      description:
        'Dahsboard para monitorear proyectos de restauración ecológica. He colaborado con el front end del CMS que permite la subida de datos, así como también colaboré de forma muy activa en la realización del front end del Dahsboard en el cual se visualizan los datos por medio de gráficas en highcharts, mapa de actividad con mapbox, indicadores de avance, filtros con periodos, galería de imagénes, tabla de riesgos, funcionalidad para exportar documentos en PDF por periodos a elección, centro de documentos categorizados por carpetas y más funcionalidades que permiten a las empresas tener toda la información necesaria sobre el avance de cada proyecto. Este proyecto ha sido usado por grandes empresas como Coca-cola y Pachama, así como su versión anterior ha sido utilizada por Grupo Modelo.',
      id: 'ops-dasboard',
      images: [
        { url: metaregistry1, id: 'meta1' }
      ]
    },
    {
      title: 'Carbon monitoring engineering',
      description:
        'Dashboard para manejar que cuentas de Toroto interesadas en medir sus emisiones de gases efecto invernadero agrupadas en tres alcances según aplique para cada caso particular. Donde las empresas contesta de forma ágil fomularios para facilitar y eficientar todo el flujo de trabajo desde la recolección de datos hasta la entrega de documentos que contiene dicha medición. Para agilizar su desarrollo se utilizó como CMS la herramienta llamada CODA en la cual los Key Account Manager sube, reciben y manipulan todos los datos para entregar al cliente. Esta plataforma ya ha sido usada en Italia y México.',
      id: 'cme',
      images: [
        { url: metaregistry1, id: 'meta1' }
      ]
    },
    {
      title: 'Metaregistry',
      description:
        'Projecto demo donde su objetivo es centralizar y transparentizar los datos de la venta de bonos de carbono por medio de teselas, donde un bono de carbono equivale a una tesela en el territorio donde se emiten dichos bonos. La forma de volver segura esta infromación es por mediod de la blockchain devolviendo contratos únicos por cada bono de carbono vendido. En este proyecto colaboré desde el diseño en Figma hasta el front end del proyecto. La demo ha sido de sumo interés para empresas externas y podría desarrollarse algo más completo dentro de Toroto en un futuro.',
      id: 'metaregisty',
      images: [
        { url: metaregistry1, id: 'meta1' }
      ]
    },
    {
      title: 'Your clipboard',
      description:
        'Proyecto realizado de forma independiente. Su objetivo principal es proporcionar un lugar donde guardar texto relevante copiado en el portapapeles, ofreciiendo la opción de gestionar como más te convenga los textos guardados, con las opciones de descargar todos estos textos o los más destacados, eliminar uno por uno o todos, y/o copiar solo un texto guardado. Todo esto mientras la pestaña se encuentre aciva. Plataforma lista para todos los dispositivos.',
      id: 'y-cipboard',
      images: [
        { url: metaregistry1, id: 'meta1' }
      ]
    }
  ]
  return (
    <section
      className={styles.main}
      id='projects'
    >
      {projectsList?.map(project => (
        <ProjectItem />
      ))}
    </section>
  )
}

export default ProjectsContainer
