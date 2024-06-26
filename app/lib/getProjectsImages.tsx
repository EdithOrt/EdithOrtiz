import ops1 from '@/public/projects/ops/ops01.png'
import ops2 from '@/public/projects/ops/ops02.png'
import ops3 from '@/public/projects/ops/ops03.png'
import ops4 from '@/public/projects/ops/ops04.png'
import ops5 from '@/public/projects/ops/ops05.png'
import ops6 from '@/public/projects/ops/ops06.png'
import ops7 from '@/public/projects/ops/ops07.png'
import ops8 from '@/public/projects/ops/ops08.png'
import ops9 from '@/public/projects/ops/ops09.png'
import ops10 from '@/public/projects/ops/ops10.png'
import ops11 from '@/public/projects/ops/ops11.png'
import ops12 from '@/public/projects/ops/ops12.png'
import ops13 from '@/public/projects/ops/ops13.png'
import ops14 from '@/public/projects/ops/ops14.png'
import ops15 from '@/public/projects/ops/ops15.png'
import ops16 from '@/public/projects/ops/ops16.png'
import ops17 from '@/public/projects/ops/ops17.png'
import ops18 from '@/public/projects/ops/ops18.png'
import ops19 from '@/public/projects/ops/ops19.png'
import ops20 from '@/public/projects/ops/ops20.png'
import ops21 from '@/public/projects/ops/ops21.png'
import ops22 from '@/public/projects/ops/ops22.png'
import ops23 from '@/public/projects/ops/ops23.png'
import ops24 from '@/public/projects/ops/ops24.png'

import cme1 from '@/public/projects/cme/cme1.png'
import cme2 from '@/public/projects/cme/cme2.png'
import cme3 from '@/public/projects/cme/cme3.png'
import cme4 from '@/public/projects/cme/cme4.png'
import cme5 from '@/public/projects/cme/cme5.png'
import cme6 from '@/public/projects/cme/cme6.png'
import cme7 from '@/public/projects/cme/cme7.png'
import cme8 from '@/public/projects/cme/cme8.png'

import toroto1 from '@/public/projects/torotomx/toroto1.png'
import toroto2 from '@/public/projects/torotomx/toroto2.png'
import toroto3 from '@/public/projects/torotomx/toroto3.png'
import toroto4 from '@/public/projects/torotomx/toroto4.png'
import toroto5 from '@/public/projects/torotomx/toroto5.png'
import toroto6 from '@/public/projects/torotomx/toroto6.png'
import toroto7 from '@/public/projects/torotomx/toroto7.png'
import toroto8 from '@/public/projects/torotomx/toroto8.png'
import toroto9 from '@/public/projects/torotomx/toroto9.png'
import toroto11 from '@/public/projects/torotomx/toroto11.png'

import clipboard1 from '@/public/projects/y-clipboard/y-clipboard1.png'
import clipboard2 from '@/public/projects/y-clipboard/y-clipboard2.png'
import clipboard3 from '@/public/projects/y-clipboard/y-clipboard3.png'
import clipboard4 from '@/public/projects/y-clipboard/y-clipboard4.png'
import clipboard5 from '@/public/projects/y-clipboard/y-clipboard5.png'
import clipboard6 from '@/public/projects/y-clipboard/y-clipboard6.png'
import clipboard8 from '@/public/projects/y-clipboard/y-clipboard8.png'
import clipboard9 from '@/public/projects/y-clipboard/y-clipboard9.png'
import clipboard10 from '@/public/projects/y-clipboard/y-clipboard10.png'
import clipboard11 from '@/public/projects/y-clipboard/y-clipboard11.png'

import { ProjectImage } from './types'

const getProjectsImages = (
  projectID: string
): Array<ProjectImage> => {
  let images = [
    {
      url: ops1,
      id: 'ops1',
      title: 'Sing in'
    }
  ]
  switch (projectID) {
    case 'ops-dasboard':
      images = [
        {
          url: ops1,
          id: 'ops1',
          title: 'Sing in'
        },
        {
          url: ops2,
          id: 'ops2',
          title: 'General view'
        },
        {
          url: ops3,
          id: 'ops3',
          title: 'General view relevan documents'
        },
        {
          url: ops4,
          id: 'ops4',
          title: 'Export KPIs functionality'
        },
        {
          url: ops5,
          id: 'ops5',
          title:
            'Activity map with preview layers'
        },
        {
          url: ops6,
          id: 'ops6',
          title: 'Activity map sidepanel'
        },
        {
          url: ops7,
          id: 'ops7',
          title: 'Timeline section'
        },
        {
          url: ops8,
          id: 'ops8',
          title: 'Risks section'
        },
        {
          url: ops9,
          id: 'ops9',
          title: 'Photoblog section'
        },
        {
          url: ops10,
          id: 'ops10',
          title: 'Photoblog modal'
        },
        {
          url: ops11,
          id: 'ops11',
          title: 'Team section'
        },
        {
          url: ops12,
          id: 'ops12',
          title: 'CMS layers section'
        },
        {
          url: ops13,
          id: 'ops13',
          title: 'Modal edit document layer'
        },
        {
          url: ops14,
          id: 'ops14',
          title: 'Modal edit layer attributes'
        },
        {
          url: ops15,
          id: 'ops15',
          title: 'Success edit layer'
        },
        {
          url: ops16,
          id: 'ops16',
          title: 'Responsive sing in'
        },
        {
          url: ops17,
          id: 'ops17',
          title: 'Responsive general view'
        },
        {
          url: ops18,
          id: 'ops18',
          title: 'Rsponsive activity map section'
        },
        {
          url: ops19,
          id: 'ops19',
          title: 'Dropdonws activity map section'
        },
        {
          url: ops20,
          id: 'ops20',
          title:
            'Detail dropdowns activity map section'
        },
        {
          url: ops21,
          id: 'ops21',
          title: 'Responsive photoblog section'
        },
        {
          url: ops22,
          id: 'ops22',
          title:
            'Responsive detail photoblog section'
        },
        {
          url: ops23,
          id: 'ops23',
          title: 'Responsive team section'
        },
        {
          url: ops24,
          id: 'ops24',
          title: 'Responsive risks section'
        }
      ]
      break

    case 'cme':
      images = [
        {
          url: cme1,
          id: 'cme1',
          title: 'Sing in'
        },
        {
          url: cme2,
          id: 'cme2',
          title:
            'Success token sent to user email message'
        },
        {
          url: cme3,
          id: 'cme3',
          title: 'Preview email sent'
        },
        {
          url: cme4,
          id: 'cme4',
          title: 'Activity data request view'
        },
        {
          url: cme5,
          id: 'cme5',
          title: 'Activity data request view'
        },
        {
          url: cme6,
          id: 'cme6',
          title:
            'Modal to view notifications and manage comments'
        },
        {
          url: cme8,
          id: 'cme7',
          title: 'Modal form'
        },
        {
          url: cme7,
          id: 'cme8',
          title: 'Resume form answered'
        }
      ]

      break

    case 'toroto':
      images = [
        {
          url: toroto1,
          id: 'toroto1',
          title: 'Hero'
        },
        {
          url: toroto2,
          id: 'toroto2',
          title: 'Home component'
        },
        {
          url: toroto3,
          id: 'toroto3',
          title: 'Project map home'
        },
        {
          url: toroto9,
          id: 'toroto9',
          title: 'Component home'
        },
        {
          url: toroto4,
          id: 'toroto4',
          title: 'Component home'
        },
        {
          url: toroto5,
          id: 'toroto5',
          title: 'Carousel'
        },
        {
          url: toroto6,
          id: 'toroto6',
          title: 'Blog cards'
        },
        {
          url: toroto7,
          id: 'toroto7',
          title: 'About Toroto'
        },
        {
          url: toroto8,
          id: 'toroto8',
          title: 'Team cards'
        },
        {
          url: toroto11,
          id: 'toroto11',
          title: 'Projects map'
        }
      ]
      break

    case 'y-clipboard':
      images = [
        {
          url: clipboard1,
          id: 'clipboard1',
          title: 'Initial view'
        },
        {
          url: clipboard2,
          id: 'clipboard2',
          title: 'Text saved'
        },
        {
          url: clipboard3,
          id: 'clipboard3',
          title: 'Add favorites'
        },
        {
          url: clipboard4,
          id: 'clipboard4',
          title: 'Delete text saved'
        },
        {
          url: clipboard5,
          id: 'clipboard5',
          title:
            'Modal to confirm delete all texts'
        },
        {
          url: clipboard6,
          id: 'clipboard6',
          title: 'Responsive initial view'
        },
        {
          url: clipboard8,
          id: 'clipboard7',
          title: 'Responsive add favorites'
        },
        {
          url: clipboard9,
          id: 'clipboard8',
          title: 'Responsive delete a text'
        },
        {
          url: clipboard10,
          id: 'clipboard9',
          title: 'Responsive delete all texts'
        },
        {
          url: clipboard11,
          id: 'clipboard10',
          title: 'Previw document downloaded'
        }
      ]
      break
  }

  return images
}
export default getProjectsImages
