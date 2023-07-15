import {
  MICROCAMPS,
  WORKSHOPS,
  beFrontendMasterSkills,
  juniorInWebEngineeringSkills,
  landingPageSkills,
  programs,
} from '@/constant';
// import workshops from '@/data/workshop';
import { PageSlug } from '@/interfaces';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
};

const formatTime = (time: number) => time.toString().padStart(2, '0');

// Get Workshop Page data
const getWorkshopPageData = (slug: PageSlug) =>
  WORKSHOPS.find((workshop) => workshop.meta.slug === slug);

// Get Microcamp Page data
const getMicrocampPageData = (slug: PageSlug) =>
  MICROCAMPS.find((microcamp) => microcamp.slug === slug);

// Skills
const getSkillsBySlug = (slug: PageSlug) => {
  const skillsBySlug = {
    '/': landingPageSkills,
    [programs.juniorInWebEngineering.slug]: juniorInWebEngineeringSkills,
    [programs.beFrontendMaster.slug]: beFrontendMasterSkills,
  };

  return skillsBySlug[slug];
};

export {
  formatDate,
  formatTime,
  getWorkshopPageData,
  getSkillsBySlug,
  getMicrocampPageData,
};
