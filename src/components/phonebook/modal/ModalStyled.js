import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  .Modal {
    position: relative;
    background-color: #fff;
    width: calc(100vw - 20px);
    max-height: calc(100vh - 24px);

    @media (min-width: 768px) {
      max-width: 600px;
    }
  }

  .modal_icon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modal_btn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;

      & .modal_icon {
        fill: #7c41c5;
      }
    }
  }
`;
export default Overlay;
