import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa/";
import Img from "gatsby-image";
import styled from "styled-components";
import { navigate, useStaticQuery, graphql } from "gatsby";
import mousetrap from "mousetrap";

import { close, linkedIn, twitter } from "../resources/vector-graphics";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const Modal = styled(ReactModal)`
  margin: 20rem auto;
  width: 70%;
  border: 2px solid var(--primary-color);
  padding: 1.5rem;
  outline: 0;

  display: grid;
  grid-template-areas:
    "close close close close"
    "caretLeft profilepic profiletext caretRight";

  grid-template-columns: 0.5fr 3fr 7fr 0.5fr;
  grid-gap: 1.5rem;
`;

const CloseButton = styled.div`
  grid-area: close;
  cursor: pointer;
  margin-left: auto;

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

const Caret = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .caretLeft {
    grid-area: caretLeft;
  }

  .caretRight {
    grid-area: caretRight;
  }
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
  grid-area: twitter;
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
  console.log(`render MemberModal`);

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

  const language = gatsbyIntlLanguage();

  return (
    <Modal
      isOpen={true}
      contentLabel="MemberModal"
      style={{
        content: {
          backgroundColor: `#001824`,
        },
      }}
    >
      <CloseButton onClick={() => navigate("/team/")}>{close}</CloseButton>
      <Caret className="caretLeft">
        <FaCaretLeft
          css={{
            cursor: `pointer`,
            fontSize: `50px`,
            color: `rgba(255,255,255,0.7)`,
            userSelect: `none`,
          }}
          onClick={e => previous(e)}
        />
      </Caret>
      <div css={{ gridArea: `profilepic` }}>
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
      <div css={{ gridArea: `profiletext` }}>
        <Name lang={language}>{intl.formatMessage({ id: member.name })}</Name>
        <Title lang={language}>
          {intl.formatMessage({ id: member.jobTitle })}
        </Title>
        <Bio lang={language} dangerouslySetInnerHTML={biographyHTML()} />
      </div>
      <Caret className="caretRight">
        <FaCaretRight
          data-testid="next-member"
          css={{
            cursor: `pointer`,
            fontSize: `50px`,
            color: `rgba(255,255,255,0.7)`,
            userSelect: `none`,
          }}
          onClick={e => previous(e)}
        />
      </Caret>
    </Modal>
  );
};

MemberModal.propTypes = {
  member: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default MemberModal;
