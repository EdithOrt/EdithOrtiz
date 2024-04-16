import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from '@/app/ui/styles/projects.module.scss'

import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'
import metaregistry1 from '@/public/projects/metaregistry.png'
import ButtonAction from './buttons/buttonAction'

const ProjectItem = () => {
  return (
    <>
      <article
        className={styles.projectContainer}
      >
        <div className={styles.titleContainer}>
          <Title text='Project Title' />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Title text='Project Title' />
          </div>

          <Paragraph
            text='Donec sodales, sapien auctor fermentum
      ullamcorper, risus lorem feugiat ligula, sed
      volutpat lacus risus vel dolor. Praesent vel
      justo nec neque dapibus imperdiet quis sit
      amet odio. Mauris eu metus eu ipsum
      facilisis finibus. Donec venenatis, mi a
      auctor imperdiet, nulla est pretium orci, at
      accumsan leo ex lobortis felis. Nulla id mi
      feugiat, scelerisque ligula ut, bibendum
      massa. Nam sagittis urna eget nunc
      vulputate, vel fermentum tortor imperdiet.
      Donec sed laoreet ligula, finibus luctus
      lectus.'
          />

          <div className={styles.button}>
            <ButtonAction
              text='Ver proyecto'
              disable={false}
              type='button'
            />
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <Swiper
            navigation
            modules={[Navigation]}
            className='projectsSwiper'
          >
            <SwiperSlide>
              <Image
                src={metaregistry1}
                alt='Project image'
                width={350}
                height={176}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={metaregistry1}
                alt='Project image'
                width={350}
                height={176}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={metaregistry1}
                alt='Project image'
                width={350}
                height={176}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </article>

      <article className={styles.technologies}>
        <p className={styles.technologiesText}>
          Technologies
        </p>

        <div>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </article>
    </>
  )
}

export default ProjectItem
