import Image from 'next/image'
import main from '@/app/styles/main.module.scss'
import ButtonAction from './ui/buttons/buttonAction'
import ButtonIcon from './ui/buttons/buttonIcon'
import ButtonScroll from './ui/buttons/buttonScroll'
import ButtonText from './ui/buttons/buttonText'
import AboutMeContainer from './ui/aboutMeContainer'
import ContactForm from './ui/contactForm'
import Icon from './ui/icon'
import Paragraph from './ui/paragraph'
import Logo from './ui/logo'
import ProjectsContainer from './ui/projectsContainer'
import SkillsContainer from './ui/skillsContainer'
import Title from './ui/title'

export default function Home() {
  return (
    <main className={main.body}>
      <div className={'styles.center'}>
        <ButtonAction />
        <ButtonIcon />
        <ButtonScroll />
        <ButtonText />

        <AboutMeContainer />
        <ContactForm />
        <Icon />
        <Logo />
        <Paragraph />
        <ProjectsContainer />
        <SkillsContainer />
        <Title />
      </div>
    </main>
  )
}
