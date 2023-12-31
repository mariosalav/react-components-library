import { DefaultTheme, css } from 'styled-components';
import { ButtonType, ButtonProps } from './Button.model';

export const buttonStyles = css<ButtonProps>(({ theme, $buttonType }) => {
  return `
  display: inline-block;
  cursor: pointer;
  background-color: ${setColor(theme, $buttonType)};
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: ${setColor(theme, 'white')};
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  padding: 10px 16px;
  position: relative;
  text-align: center;

  &:disabled {
    background-color: #cccccc;
  }

  &:hover {
    opacity: 0.8;
  }

  div.button-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      order: 1;
      margin-left: 0.4rem
    }

    &.only-icon {
      svg {
        margin-left: 0
      }
    }
  }
`;
});

function setColor(theme: DefaultTheme, buttonColor: ButtonType | string): string {
  return theme[buttonColor];
}
