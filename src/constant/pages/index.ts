import { programs } from '../global';
import { routes } from '../routes';
import { v4 } from 'uuid';

const TOP_NAVIGATION = [
  { name: 'Home', href: routes.home },
  {
    name: programs.juniorInWebEngineering.label,
    href: routes.microCampLanding(programs.juniorInWebEngineering.slug),
  },
  {
    name: programs.beFrontendMaster.label,
    href: routes.microCampLanding(programs.beFrontendMaster.slug),
  },
  {
    name: programs.beBackendMaster.label,
    href: routes.microCampLanding(programs.beBackendMaster.slug),
  },
  { name: 'Contact us', href: routes.contactUs },
];

const PROGRAMS = [
  {
    image: 'boring_workshop.svg',
    imageAltText: '',
    title: 'The Boring Micro-Camp',
    content:
      '6 Weeks Bootcamp with hands-on project-building and placement assistance.',
    buttonText: 'Registration open',
    href: '/micro-camps',
  },
  {
    image: 'boring_workshop.svg',
    imageAltText: 'workshop',
    title: 'The Boring Workshop',
    content:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
    buttonText: 'Registration open',
    href: '/workshops',
  },
];

const SKILLS = [
  {
    title: `FrontEnd Engineering`,
    details: [
      {
        name: `ReactJS`,
        image: `reactjs.svg`,
        imageAltText: `ReactJS`,
      },
      {
        name: `NextJs`,
        image: `nextjs.svg`,
        imageAltText: `NextJS`,
      },
    ],
  },
  {
    title: `BackEnd Engineering`,
    details: [
      {
        name: `NodeJS`,
        image: `nodejs.svg`,
        imageAltText: `NodeJS`,
      },
      {
        name: `MongoDB`,
        image: `mongodb.svg`,
        imageAltText: `MongoDB`,
      },
    ],
  },
  {
    title: `Extra Skills`,
    details: [
      {
        name: `Figma`,
        image: `figma.svg`,
        imageAltText: `Figma`,
      },
      {
        name: `TypeScript`,
        image: `typescript.svg`,
        imageAltText: `Typescript`,
      },
    ],
  },
];

const USP = [
  {
    title: `Mentorship`,
    content: `You'll mentored by Industry Experts. From Code Review to 1:1, You'll be in touch them every week.`,
    image: `peer_learning.svg`,
    imageAltText: `mentorship`,
  },
  {
    title: `Peer Learning`,
    content: `You learn by practicing and also from your batchmates. Do Pair programming in our Discord community.`,
    image: `peer_learning.svg`,
    imageAltText: `peer learning`,
  },
  {
    title: `Weekend Workshop`,
    content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
    image: `peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
  {
    title: `Doubt Clearing Sessions`,
    content: `Clear all your doubts over weekend and discuss any issue you’re facing.`,
    image: `peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
];

const TESTIMONIALS = [
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
];

const FOOTER_NAVIGATION = [
  {
    title: `Our Products`,
    isShow: true,
    url_content: [
      {
        link_text: `Be A Frontend Master`,
        href: `#`,
      },
      {
        link_text: `Be A Backend Master`,
        href: `#`,
      },
      {
        link_text: `The Boring Workshop`,
        href: `#`,
      },
    ],
  },
  {
    title: `Company`,
    isShow: true,
    url_content: [
      {
        link_text: `About US`,
        href: `#`,
      },
      {
        link_text: `Contact Us`,
        href: `#`,
      },
      {
        link_text: `Refund Policy`,
        href: `#`,
      },
    ],
  },
  {
    title: `Resources`,
    isShow: false,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Connect With Us`,
    isShow: true,
    url_content: [
      {
        link_text: `Discord`,
        href: `#`,
      },
      {
        link_text: `Instagram`,
        href: `https://www.instagram.com/theboringeducation/`,
      },
    ],
  },
  {
    title: `Legal`,
    isShow: false,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
];

const FRONTEND_MICROCAMP_CURRICULUM = [
  {
    id: v4(),
    title: '8 Weeks',
    content: 'Duration',
  },
  {
    id: v4(),
    title: '1:1 Mentorship',
    content: 'Weekly Session with Mentors',
  },
  {
    id: v4(),
    title: 'Only Projects',
    content: 'Learn by Building',
  },
  {
    id: v4(),
    title: 'Code Review',
    content: 'Weekly code reviews by mentors',
  },
  {
    id: v4(),
    title: 'Tech Workshops',
    content: 'Workshops on Tech every weekend',
  },
  {
    id: v4(),
    title: 'Be Job Ready',
    content: 'Project & Resume to JOb, All in one',
  },
];

export {
  FOOTER_NAVIGATION,
  PROGRAMS,
  SKILLS,
  TESTIMONIALS,
  TOP_NAVIGATION,
  USP,
  FRONTEND_MICROCAMP_CURRICULUM,
};
