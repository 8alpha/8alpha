import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Img from "gatsby-image";
import styled from "styled-components";
import { push } from "gatsby";

import { close, linkedIn, twitter } from "../resources/vector-graphics";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const CloseButton = styled.div`
  cursor: pointer;
  float: right;

  @media screen and (max-width: 599px) {
    transform: scale(0.7);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(0.8);
    }
  }

  @media screen and (min-width: 600px) {
    transform: scale(0.8);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(0.9);
    }
  }

  @media screen and (min-width: 1200px) {
    transform: scale(1);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Modal = styled(ReactModal)`
  margin: 20rem auto;
  width: 70%;
  border: 2px solid var(--primary-color);
  padding: 1.5rem;
  outline: 0;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1.5rem;
`;

const Image = styled(Img)`
  margin-bottom: 1rem;
`;

const LinkedIn = styled.a`
  text-decoration: none;
  float: right;
  @media screen and (max-width: 599px) {
    transform: scale(0.7);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(0.8);
    }
  }

  @media screen and (min-width: 600px) {
    transform: scale(0.8);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(0.9);
    }
  }

  @media screen and (min-width: 1200px) {
    transform: scale(1);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Twitter = styled.a`
  text-decoration: none;
  float: right;
  padding-right: 1rem;
  @media screen and (max-width: 599px) {
    transform: scale(0.7);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(0.8);
    }
  }

  @media screen and (min-width: 600px) {
    transform: scale(0.8);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(0.9);
    }
  }

  @media screen and (min-width: 1200px) {
    transform: scale(1);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Name = styled.div`
  font-size: var(--h2-font-size);
  color: var(--primary-color);
  letter-spacing: var(--h2-letter-spacing);

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const Title = styled.div`
  font-size: calc(var(--h2-font-size) * 0.9);
  color: var(--primary-color);
  letter-spacing: var(--h2-letter-spacing);

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const Bio = styled.div`
  font-size: var(--p-font-size);
  color: var(--secondary-color);

  margin-top: 1vh;
  letter-spacing: var(--p-letter-spacing);
  font-weight: 100;

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
  }
`;

ReactModal.setAppElement(`#___gatsby`);

const MemberModal = ({ member, intl }) => {
  const [showModal, toggleShow] = useState(true);

  const biographyHTML = () => ({
    __html: intl.formatMessage({ id: member.biography }),
  });

  const handleClose = () => {
    toggleShow(false);
    push("/team/");
  };

  const language = gatsbyIntlLanguage();

  return (
    <Modal
      isOpen={showModal}
      contentLabel="MemberModal"
      style={{
        content: {
          backgroundColor: `#001824`,
        },
      }}
    >
      <div>
        <Image fluid={member.image.childImageSharp.fluid} alt={member.name} />
        <LinkedIn href={`https://www.linkedin.com/in/${member.linkedIn}`}>
          {linkedIn}
        </LinkedIn>
        {member.twitter !== "" && (
          <Twitter href={`https://twitter.com/${member.twitter}`}>
            {twitter}
          </Twitter>
        )}
      </div>
      <div>
        <CloseButton onClick={() => handleClose()}>{close}</CloseButton>
        <Name lang={language}>{intl.formatMessage({ id: member.name })}</Name>
        <Title lang={language}>
          {intl.formatMessage({ id: member.jobTitle })}
        </Title>
        <Bio lang={language} dangerouslySetInnerHTML={biographyHTML()} />
      </div>
    </Modal>
  );
};

MemberModal.propTypes = {
  member: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default MemberModal;
