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