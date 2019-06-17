import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

import { linkedIn, close } from "../resources/vector-graphics";

const CloseButton = styled.button`
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  cursor: pointer;
  float: right;
`;

const Modal = styled(ReactModal)`
  margin: 20rem auto;
  width: 70%;
  border: 2px solid var(--primary-color);
  padding: 1.5rem;
`;

const ContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1.5rem;
`;

const PhotoBox = styled.div``;

const Image = styled(Img)`
  margin-bottom: 1rem;
  grid-area: photo;
`;

const LinkedIn = styled.a`
  text-decoration: none;
  float: right;
`;

const TextBox = styled.div``;

const Name = styled.div`
  font-size: var(--h2-font-size);
  color: var(--primary-color);
`;

const Title = styled.div`
  font-size: var(--h2-font-size);
  color: var(--primary-color);
`;

const Bio = styled.div`
  font-size: var(--p-font-size);
  color: var(--secondary-color);
`;

ReactModal.setAppElement(`#___gatsby`);

const MemberModal = ({ member, intl }) => {
  const [showModal, toggleShow] = useState(true);

  const handleCloseModal = () => {
    toggleShow(false);
  };

  const biographyHTML = () => ({
    __html: intl.formatMessage({ id: member.biography }),
  });

  return (
    <Modal
      isOpen={showModal}
      contentLabel={member.name}
      style={{
        content: {
          backgroundColor: "#001824",
        },
      }}
    >
      <ContentBox>
        <PhotoBox>
          <Image fluid={member.image.childImageSharp.fluid} alt={member.name} />
          <LinkedIn href={`https://www.linkedin.com/in/${member.linkedIn}`}>
            {linkedIn}
          </LinkedIn>
        </PhotoBox>
        <TextBox>
          <Link to="/team/">
            <CloseButton onClick={handleCloseModal}>{close}</CloseButton>
          </Link>
          <Name>{intl.formatMessage({ id: member.name })}</Name>
          <Title>{intl.formatMessage({ id: member.jobTitle })}</Title>
          <Bio dangerouslySetInnerHTML={biographyHTML()} />
        </TextBox>
      </ContentBox>
    </Modal>
  );
};

MemberModal.propTypes = {
  member: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default MemberModal;
