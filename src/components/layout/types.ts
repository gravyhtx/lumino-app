export interface ViewProps {
  title: string;
  component: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
}

export interface ModalProps {
  title: string;
  component: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
}

export interface MainProps {
  children?: React.ReactNode;
  views?: ViewProps[];
  modal?: ModalProps;
}

export interface ViewLink {
  name: string;
  icon?: React.ReactNode;
  notifications?: number;
  component?: React.ReactNode;
}