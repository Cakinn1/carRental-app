import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type RootState = {
  auth: {
    user: string | null;
    email: string | null;
  };
};

export type signupState = {
  signupModalOpen: boolean;
};

// Home Props

export interface HomePlanInfoProps {
  title: string;
  image: string;
  paragraph: string;
}
export type Cars = {
  car1: string;
  car2: string;
  car3: string;
  car4: string;
  car5?: string;
  car6?: string;
  placeholder: string;
  color: string;
  icon: IconDefinition;
  showDatePicker?: boolean;
  image?: IconDefinition;
};

export interface HomeTitleProps {
  title: string;
  paragraph: string;
  paragraph2?: string;
}

export interface HomeRentalButtonProps {
  title: string;
  handleButton: (value: string) => void;
  selected: boolean;
}
