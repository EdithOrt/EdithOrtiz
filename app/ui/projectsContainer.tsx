import styles from '@/app/ui/styles/projects.module.scss'
import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'
import metaregistry1 from '@/public/projects/metaregistry.png'

const ProjectsContainer = () => {
  return (
    <section className={styles.main}>
      <article
        className={styles.projectContainer}
      >
        <div className={styles.titleContainer}>
          <Title />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Title />
          </div>

          <Paragraph />
        </div>

        <div className={styles.carouselContainer}>
          <Image
            src={metaregistry1}
            alt='Project image'
            width={350}
            height={176}
          />
        </div>
      </article>

      <article className={styles.technologies}>
        <p>Technologies</p>

        <div>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </article>
    </section>
  )
}

export default ProjectsContainer
