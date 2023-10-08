export interface PropsTheme {
  children: React.ReactNode;
}

export interface PropsElementList {
  textElement: string;
  link: string;
}

export interface PropsModal {
  active: boolean;
  setActive: Function;
  message: string;
}

export interface SvgIcon {
  className?: SVGAnimatedString;
}

export interface Skill {
  title: string;
  elements: [];
}

export type TDescription = {
  title_site_start: string;
  title_site_marker: string;
  title_site_end: string;
  subtitle_site: string;
  button_write_me: string;
};

export type TFooter = {
  developer_text: string;
  design_text: string;
  media: string;
  text_copyright: string;
};

export type TContacts = {
  title_contacts: string;
  message_contacts: string;
  title_links: string;
};

export type TAboutMe = {
  title: string;
  subtitle: string;
  my_photo: string;
  descriptionMe: string[];
  button_more: string;
};

export type TSkills = {
  title_skills: string;
  skills: [];
};

export type TFacts = {
  title_facts: string;
  facts: string[];
};

export type TWorks = {
  title: string;
  subtitle: string;
  title_big_projects: string[];
  button_more: string;
  big_projects: TWork[];
  title_small_projects: string;
  small_projects: TWork[];
  button_open: string;
  button_details: string;
  link_all_projects: string;
  button_hidden: string;
};

export type TWork = {
  name: string;
  description: string;
  technologies: string[];
  link_git: string;
  link_site: string;
  images: string[];
  title_aim: string;
  aim: string;
  title_requirements: string;
  requirements: string;
  year_created: string;
  title_year: string;
};
