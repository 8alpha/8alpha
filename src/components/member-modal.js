import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa/";
import Img from "gatsby-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { navigate } from "gatsby-plugin-intl";
import mousetrap from "mousetrap";

import { close, linkedIn, twitter } from "../resources/icons";

const Modal = styled(ReactModal)`
  border: 2px solid var(--primary-color);
  width: 70%;
  margin: 5rem auto;
  padding: 1.5rem;
  outline: 0;

  display: grid;
  grid-template-areas:
    "close close close close"
    "caretLeft photoSocial bioText caretRight";

  grid-template-columns: 0.5fr 3fr 7fr 0.5fr;
  grid-gap: 1.5rem;

  @media screen and (max-width: 599px) {
    margin: auto;
    width: 90%;
    grid-template-columns: 0.5fr 10fr 0.5fr;
    grid-template-areas:
      "caretLeft photoSocial caretRight"
      "caretLeft bioText caretRight"
      "close close close";
  }

  @media screen and (min-width: 1800px) {
    width: 40%;
    margin: 20rem auto;
  }
`;

const CloseIcon = styled.div`
  grid-area: close;
  cursor: pointer;
  margin-left: auto;

  @media screen and (max-width: 599px) {
    margin-bottom: 2rem;

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

const PhotoSocialBox = styled.div`
  grid-area: photoSocial;
`;

const CaretBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BioTextBox = styled.div`
  grid-area: bioText;
`;

const Image = styled(Img)`
  grid-area: photo;
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
  font-size: calc(var(--h2-font-size) * 0.9);
  color: var(--primary-color);
  letter-spacing: calc(var(--h2-letter-spacing) * 0.9);

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const Title = styled.div`
  font-size: calc(var(--h2-font-size) * 0.9);
  color: var(--primary-color);
  letter-spacing: calc(var(--h2-letter-spacing) * 0.9);

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const Bio = styled.div`
  font-size: calc(var(--p-font-size) * 0.9);
  color: var(--secondary-color);

  margin-top: 1vh;
  letter-spacing: calc(var(--p-letter-spacing) * 0.9);

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
  }
`;

ReactModal.setAppElement(`#___gatsby`);

const MemberModal = ({ member, intl }) => {
  const members = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const edges = members.allTeamJson.edges;

  const findCurrentMemberIndex = () =>
    edges.findIndex(x => x.node.slug === member.slug);

  const previous = event => {
    if (event) {
      event.stopPropagation();
    }

    const currentIndex = findCurrentMemberIndex();
    if (currentIndex || currentIndex === 0) {
      let previousMember;
      if (currentIndex - 1 === -1) {
        previousMember = edges[edges.length - 1].node.slug;
      } else {
        previousMember = edges[currentIndex - 1].node.slug;
      }
      navigate(`/team/${previousMember}/`);
    }
  };

  const next = event => {
    if (event) {
      event.stopPropagation();
    }

    const currentIndex = findCurrentMemberIndex();
    if (currentIndex || currentIndex === 0) {
      let nextMember;
      if (currentIndex + 1 === edges.length) {
        nextMember = edges[0].node.slug;
      } else {
        nextMember = edges[currentIndex + 1].node.slug;
      }
      navigate(`/team/${nextMember}/`);
    }
  };

  useEffect(() => {
    mousetrap.bind(`left`, () => previous());
    mousetrap.bind(`right`, () => next());
    mousetrap.bind(`space`, () => next());
  }, []);

  const biographyHTML = () => ({
    __html: intl.formatMessage({ id: member.biography }),
  });

  return (
    <Modal
      isOpen={true}
      contentLabel="MemberModal"
      style={{
        content: {
          maxHeight: `100%`,
          overflowY: `auto`,
          backgroundColor: `#001824`,
        },
      }}
    >
      <CloseIcon onClick={() => navigate("/")}>{close}</CloseIcon>
      <CaretBox css={{ gridArea: `caretLeft` }}>
        <FaCaretLeft
          css={{
            cursor: `pointer`,
            fontSize: `5rem`,
            color: `var(--primary-color)`,
            userSelect: `none`,
          }}
          onClick={e => previous(e)}
        />
      </CaretBox>
      <PhotoSocialBox>
        <Image fluid={member.image.childImageSharp.fluid} alt={member.name} />
        <div css={{ gridArea: `social` }}>
          <LinkedIn href={`https://www.linkedin.com/in/${member.linkedIn}`}>
            {linkedIn}
          </LinkedIn>
          {member.twitter !== "" && (
            <Twitter href={`https://twitter.com/${member.twitter}`}>
              {twitter}
            </Twitter>
          )}
        </div>
      </PhotoSocialBox>
      <BioTextBox>
        <Name lang={intl.locale}>
          {intl.formatMessage({ id: member.name })}
        </Name>
        <Title lang={intl.locale}>
          {intl.formatMessage({ id: member.jobTitle })}
        </Title>
        <Bio lang={intl.locale} dangerouslySetInnerHTML={biographyHTML()} />
      </BioTextBox>
      <CaretBox css={{ gridArea: `caretRight` }}>
        <FaCaretRight
          css={{
            cursor: `pointer`,
            fontSize: `5rem`,
            color: `var(--primary-color)`,
            userSelect: `none`,
          }}
          onClick={e => previous(e)}
        />
      </CaretBox>
    </Modal>
  );
};

MemberModal.propTypes = {
  member: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default MemberModal;
