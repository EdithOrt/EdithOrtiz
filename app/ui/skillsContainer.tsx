import styles from '@/app/ui/styles/skills.module.scss'
import Paragraph from './paragraph'
import Title from './title'

const SkillsContainer = () => {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <Title text='SKILLS' />

        <article
          className={`${styles.content} ${styles.skills}`}
        >
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </article>
      </section>

      <section className={styles.section}>
        <Title text='SOFTSKILLS' />

        <article
          className={`${styles.content} ${styles.softskills}`}
        >
          <Paragraph text='SoftSkill' />
          <Paragraph text='SoftSkill' />
          <Paragraph text='SoftSkill' />
          <Paragraph text='SoftSkill' />
          <Paragraph text='SoftSkill' />
        </article>
      </section>

      <section className={styles.section}>
        <Title text='LANGUAGE' />

        <article
          className={`${styles.content} ${styles.language}`}
        >
          <Paragraph text='Inglés nivel técnico' />

          <Paragraph text='Español nativo' />
        </article>
      </section>
    </div>
  )
}

export default SkillsContainer
