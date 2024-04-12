import styles from '@/app/ui/styles/skills.module.scss'
import Paragraph from './paragraph'
import Title from './title'
import { SVGComponent } from './svgComponent'

const skillsList = [
  { name: 'Javascript', id: 'javascript' },
  { name: 'Typescript', id: 'typescript' },
  { name: 'HTML5', id: 'html' },
  { name: 'CSS3', id: 'css' },
  { name: 'Sass', id: 'sass' },
  { name: 'React js', id: 'react' },
  { name: 'Next js', id: 'nextjs' },
  { name: 'Tailwind', id: 'tailwind' },
  { name: 'GraphQL', id: 'grapql' },
  { name: 'Git', id: 'git' },
  { name: 'Github', id: 'github' },
  { name: 'GitLab', id: 'gitlab' },
  { name: 'Boostrap', id: 'boostrap' },
  { name: 'Firebase', id: 'firebase' },
  { name: 'HTML5', id: 'materialui' },
  { name: 'JQuery', id: 'jquery' },
  { name: 'Mapbox', id: 'mapbox' },
  { name: 'Vercel', id: 'vercel' },
  { name: 'Docker', id: 'docker' },
  { name: 'Highcharts', id: 'highcharts' },
  { name: 'Notion', id: 'notion' },
  { name: 'Coda', id: 'coda' },
  { name: 'Miró', id: 'miro' },
  { name: 'Asana', id: 'asana' },
  { name: 'Trello', id: 'trello' },
  { name: 'Illustrator', id: 'illustrator' },
  { name: 'Photoshop', id: 'photoshop' },
  { name: 'Adobe XD', id: 'xd' }
]

const SkillsContainer = () => {
  return (
    <div
      className={styles.main}
      id='skills'
    >
      <section className={styles.section}>
        <Title text='SKILLS' />

        <article
          className={`${styles.content} ${styles.skills}`}
        >
          {skillsList.map(skill => (
            <div
              key={skill.id}
              className={styles.skillContainer}
            >
              <SVGComponent
                icon={skill.id}
                width='24'
                height='24'
              />

              <p className={styles.skillName}>
                {skill.name}
              </p>
            </div>
          ))}
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
          <Paragraph text='Technical English' />

          <Paragraph text='Native Spanish' />
        </article>
      </section>
    </div>
  )
}

export default SkillsContainer
