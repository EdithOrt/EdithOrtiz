import styles from '@/app/page.module.scss'
import AboutMeContainer from './ui/aboutMeContainer'
import ContactForm from './ui/contactForm'
import ProjectsContainer from './ui/projectsContainer'
import SkillsContainer from './ui/skillsContainer'
import HomeContainer from './ui/homeContainer'

export default function Home() {
  return (
    <main className={styles.body}>
      <div className={styles.center}>
        <HomeContainer />
        <ProjectsContainer />
        <SkillsContainer />
        <AboutMeContainer />
        <ContactForm />
      </div>
    </main>
  )
}
