import styles from '@/app/ui/styles/projects.module.scss'
import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'

const ProjectsContainer = () => {
  return (
    <section className={styles.main}>
      <article>
        <div>
          <Title />

          <Paragraph />
        </div>

        <div>
          <Image
            src=''
            alt='Project image'
            width={750}
            height={367}
          />
        </div>
      </article>

      <article>
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
