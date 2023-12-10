export interface PropsTheme {
  children: React.ReactNode;
}

export interface PropsElementList {
  textElement: string;
  link: string;
  closeSidebar: Function;
}

export interface ILanguage {
  name: string;
  isLoading: boolean;
  data: Object;
  payload: string;
  type: string;
}

export interface IPropsModal {
  active: boolean;
  setActive: Function;
  details: TWork;
  text_button_hidden: string;
}

export interface IPropsWork {
  project: TWork;
  text_button_open: string;
  text_button_details: string;
  text_button_hidden: string;
}

export interface ICardSkill {
  key: number;
  element: {
    title: string;
    elements: string[];
  };
}

export interface SvgIcon {
  className?: SVGAnimatedString;
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
