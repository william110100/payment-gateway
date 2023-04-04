import styled from "styled-components";

export const StyledTextarea = styled.div`
  background-color: transparent;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 2rem;
  transition: background-color 0.2s ease;

  .default {
    border: 1px solid #b4b4b4;
    width: auto;
  }

  .floatingInput:focus {
    border-color: #b4b4b4;
    outline: none;
  }

  .floating:hover,
  .floating:focus-within {
    border-color: #b4b4b4;
  }

  .floatingInput {
    border: 1px solid #b4b4b4;
    font-size: 16px;
    transition: border-color 0.2s ease;
    padding: 30px 16px 8px;
  }

  .floatingInput::placeholder {
    color: #ffffff;
  }

  .floatingLabel {
    display: block;
    position: relative;
    max-height: 0;
    font-weight: 500;
    pointer-events: none;
  }

  .floatingLabel::before {
    color: #b4b4b4;
    content: attr(data-content);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    left: 1rem;
    position: relative;
  }

  .floatingLabel::after {
    bottom: 1rem;
    content: "";
    height: 0.1rem;
    position: absolute;
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    opacity: 0;
    left: 0;
    top: 100%;
    margin-top: -0.1rem;
    transform: scale3d(0, 1, 1);
    width: 100%;
  }

  .floatingInput:focus + .floatingLabel::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
    border-color: #b4b4b4;
  }

  .floatingInput:placeholder-shown + .floatingLabel::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }

  .floatingLabel::before,
  .floatingInput:focus + .floatingLabel::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }

  .floatingInput:focus + .floatingLabel::before {
    border-color: #b4b4b4;
    color: #b4b4b4;
  }

  .invalid {
    border: 1px solid #ff8a00;

    ::after {
      content: "X";
      padding-right: 1rem;
      color: #ff8a00;
    }
  }

  .valid {
    border: 1px solid #1bd97b;

    ::after {
      content: "✓";
      padding-right: 1rem;
      color: #1bd97b;
    }
  }
`;
