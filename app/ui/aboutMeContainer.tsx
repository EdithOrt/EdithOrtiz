import styles from '@/app/ui/styles/aboutMe.module.scss'
import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'
import ButtonAction from './buttons/buttonAction'

const AboutMeContainer = () => {
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
          <Paragraph
            text='Curabitur semper maximus egestas. Aliquam erat volutpat. Etiam sodales sem vel interdum tempor. Ut at vestibulum tellus. Praesent efficitur arcu sit amet semper tempus. Morbi vel vulputate risus, sagittis posuere quam. Suspendisse et elit sed mi ultricies tempus. Donec nulla tellus, cursus pellentesque neque vel, condimentum aliquet nunc.
'
          />

          <div className={styles.button}>
            <ButtonAction
              text='Descarga mi CV'
              disable={false}
            />
          </div>
        </article>
      </section>

      <div className={styles.button}>
        <ButtonAction
          text='Descarga mi CV'
          disable={false}
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
