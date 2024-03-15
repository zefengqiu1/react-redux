export const Page = {
  Home: '/',
  Experiences: '/experiences', // table
  NewExperience: '/experiences/new', // create page
  ExperienceDetail: '/experiences/:id', // detail page
}

export const getLinkableUrl = (url: string) => {
  return `${url}`;
}