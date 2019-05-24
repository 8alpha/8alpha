import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalStyle = styled.div`
    background: white;
    border-radius: 5;
    max-width: 500,
    max-height: 500,
    margin: 0 auto;
    padding 30
`;

const Modal = () => {
  createPortal(
    <div>
      <ModalStyle>This is my model</ModalStyle>
      <button>Close</button>
    </div>
  );
};

export default Modal;
