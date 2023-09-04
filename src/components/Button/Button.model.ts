import { type MouseEventHandler } from 'react';

export interface ButtonProps {
  $buttonType: ButtonType;
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  ERROR = 'error',
}