import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from '@/app/ui/styles/projects.module.scss'

import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'
import metaregistry1 from '@/public/projects/metaregistry.png'
import ButtonAction from './buttons/buttonAction'

type ImagesType = { url: string; id: string }
type TechnologiesType = {
  name: string
  id: string
}

const ProjectItem = ({
  title,
  description,
  images,
  url,
  technologies
}: {
  title: string
  description: string
  images: Array<ImagesType>
  url?: string
  technologies: Array<TechnologiesType>
}) => {
  return (
    <>
      <article
        className={styles.projectContainer}
      >
        <div className={styles.titleContainer}>
          <Title text={title} />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Title text={title} />
          </div>

          <Paragraph text={description} />

          {url && (
            <div className={styles.button}>
              <ButtonAction
                text='Ver proyecto'
                disable={false}
                type='button'
              />
            </div>
          )}
        </div>

        <div className={styles.carouselContainer}>
          <Swiper
            navigation
            modules={[Navigation]}
            className='projectsSwiper'
          >
            {images?.map(image => (
              <SwiperSlide key={image.id}>
                <Image
                  src={image.url}
                  alt={image.id}
                  width={350}
                  height={176}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>

      <article className={styles.technologies}>
        <p className={styles.technologiesText}>
          Technologies
        </p>

        <div>
          {technologies?.map(technology => (
            <p key={technology.name}>
              {technology.name}
            </p>
          ))}
        </div>
      </article>
    </>
  )
}

export default ProjectItem
