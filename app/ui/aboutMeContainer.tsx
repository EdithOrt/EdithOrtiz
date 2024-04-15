'use client'

import styles from '@/app/ui/styles/aboutMe.module.scss'
import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'
import ButtonAction from './buttons/buttonAction'

const AboutMeContainer = () => {
  const downloadFile = () => {
    const pdfPath = '/EDITH-ORTIZ-CV-en.pdf'

    // Create an anchor element
    const a = document.createElement('a')
    a.href = pdfPath
    console.log(a)
    a.download = 'document.pdf' // Set the filename

    // Programmatically trigger a click event on the anchor element
    a.click()
  }
  return (
    <section
      className={styles.main}
      id='aboutMe'
    >
      <div className={styles.title}>
        <Title text='EDITH ORTIZ CORTÉS' />
      </div>

      <section className={styles.content}>
        <div className={styles.title}>
          <Title text='EDITH ORTIZ CORTÉS' />
        </div>

        <div className={styles.photo}>
          <Image
            src=''
            alt='Edith Ortiz photography'
            width={113}
            height={324}
          />
        </div>

        <article className={styles.paragraph}>
          <Paragraph text='My professional goal is continuous complement my front end development experience with my graphic design degree to explore new technological possibilities to build highly functional and scalable interfaces for all users and that these interfaces solve problems strategically and brilliantly.' />

          <div className={styles.button}>
            <ButtonAction
              text='Descarga mi CV'
              disable={false}
              type='button'
              onClick={downloadFile}
            />
          </div>
        </article>
      </section>

      <div className={styles.button}>
        <ButtonAction
          text='Descarga mi CV'
          disable={false}
          type='button'
          onClick={downloadFile}
        />
      </div>

      <div className={styles.photo}>
        <Image
          src=''
          alt='Edith Ortiz photography'
          width={113}
          height={324}
        />
      </div>
    </section>
  )
}

export default AboutMeContainer
