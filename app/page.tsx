import Image from 'next/image'
import styles from '@/app/page.module.scss'
import ButtonAction from './ui/buttons/buttonAction'
import ButtonIcon from './ui/buttons/buttonIcon'
import ButtonScroll from './ui/buttons/buttonScroll'
import ButtonText from './ui/buttons/buttonText'
import AboutMeContainer from './ui/aboutMeContainer'
import ContactForm from './ui/contactForm'
import Paragraph from './ui/paragraph'
import Logo from './ui/logo'
import ProjectsContainer from './ui/projectsContainer'
import SkillsContainer from './ui/skillsContainer'
import Title from './ui/title'

import HomeContainer from './ui/homeContainer'

export default function Home() {
  return (
    <main className={styles.body}>
      <div className={styles.center}>
        <HomeContainer />
        <ButtonAction />

        <AboutMeContainer />
        <ContactForm />
        <Paragraph />
        <ProjectsContainer />
        <SkillsContainer />
        <Title />
      </div>
    </main>
  )
}
