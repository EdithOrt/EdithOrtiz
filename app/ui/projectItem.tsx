import { SwiperSlide, Swiper } from 'swiper/react'
import {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper/modules'
import styles from '@/app/ui/styles/projects.module.scss'

import Title from './title'
import Paragraph from './paragraph'
import Image from 'next/image'
import ButtonAction from './buttons/buttonAction'
import { SVGComponent } from './svgComponent'
import getProjectsImages from '../lib/getProjectsImages'

type ImagesType = { url: string; id: string }
type TechnologiesType = {
  name: string
  id: string
}

// autoplay={{ delay: 5000 }}

const ProjectItem = ({
  title,
  description,
  url,
  technologies,
  id
}: {
  title: string
  description: string
  url?: string
  technologies: Array<TechnologiesType>
  id: string
}) => {
  return (
    <div className={styles.projectItem}>
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
            pagination={{
              type: 'progressbar'
            }}
            navigation
            modules={[
              Navigation,
              Pagination,
              Autoplay
            ]}
            autoplay={{ delay: 5000 }}
            className='projectsSwiper'
          >
            {getProjectsImages(id)?.map(image => (
              <SwiperSlide key={image.id}>
                <div
                  className={
                    styles.carouselContent
                  }
                >
                  <div
                    className={
                      styles.imageContainer
                    }
                  >
                    <Image
                      src={image.url}
                      alt={image.title}
                    />
                  </div>

                  <p
                    className={styles.imageTitle}
                  >
                    {image.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>

      <article className={styles.technologies}>
        <p className={styles.technologiesText}>
          Technologies
        </p>

        <div
          className={styles.technologiesContainer}
        >
          {technologies?.map(technology => (
            <div
              className={styles.technologyItem}
              key={technology.id}
            >
              <SVGComponent
                icon={technology.id}
                key={technology.id}
                width='40'
                height='40'
              />

              <p
                className={styles.technologyText}
              >
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default ProjectItem
