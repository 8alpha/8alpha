import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

import { linkedIn } from "../resources/vector-graphics";

const Modal = styled(ReactModal)`
  margin: 20rem auto;
  width: 70%;
  border: 2px solid var(--primary-color);
  padding: 10px;

  h2 {
    font-size: var(--h2-font-size);
    color: var(--primary-color);
  }

  p {
    font-size: var(--p-font-size);
    color: var(--secondary-color);
  }
`;

const Image = styled(Img)`
  width: 25%;
  float: left;
`;

ReactModal.setAppElement(`#___gatsby`);

const MemberModal = ({ member, intl }) => {
  const [showModal, toggleShow] = useState(true);

  const handleCloseModal = event => {
    /* event.preventDefault(); */
    toggleShow(false);
  };

  return (
    <Modal
      isOpen={showModal}
      contentLabel={member.name}
      style={{
        content: {
          backgroundColor: "#001824"
        }
      }}
    >
      <Link to="/team/">
        <button onClick={handleCloseModal}>Close Modal</button>
      </Link>
      <Image fluid={member.image.childImageSharp.fluid} alt={member.name} />
      <a href={`https://www.linkedin.com/in/${member.linkedIn}`}>{linkedIn}</a>
      <h2>{intl.formatMessage({ id: member.name })}</h2>
      <h2>{intl.formatMessage({ id: member.jobTitle })}</h2>
      <p>{intl.formatMessage({ id: member.biography.concat("P1") })}</p>
      <p>{intl.formatMessage({ id: member.biography.concat("P2") })}</p>
      <p>{intl.formatMessage({ id: member.biography.concat("P3") })}</p>
    </Modal>
  );
};

MemberModal.propTypes = {
  member: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default MemberModal;
