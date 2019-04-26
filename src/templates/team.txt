import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";

import SectionMenu from "../components/SectionMenu.js";

import group from "../images/about-us.png";

import nickDivehall from "../images/partners/nick-divehall.png";
import alexKelley from "../images/partners/alex-kelley.png";
import markLindon from "../images/partners/mark-lindon.png";
import lukePeterson from "../images/partners/luke-peterson.png";
import reubenTucker from "../images/partners/reuben-tucker.png";

import johnDoe from "../images/advisors/john-doe.png";

import Layout from "../components/layout";

const partners = [
  { photo: nickDivehall, path: "/team/partners/nick-divehall/" },
  { photo: alexKelley, path: "/team/partners/alex-kelley/" },
  { photo: markLindon, path: "/team/partners/mark-lindon/" },
  { photo: lukePeterson, path: "/team/partners/luke-peterson/" },
  { photo: reubenTucker, path: "/team/partners/reuben-tucker/" },
];

const advisors = [{ photo: johnDoe, path: "/team/advisors/john-doe" }];

const aboutUs = [{ photo: group, path: "/team/about-us" }];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  /* border-style: solid;
    * border-color: green; */
`;

const Bio = styled.div`
  /* border-style: solid;
    * border-color: blue; */
  color: white;
  flex-basis: 56%;
  h2 {
    font-size: 2.25rem;
  }

  p {
    font-size: 2rem;
  }
`;

const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 44%;
  /* border-style: solid;
    * border-color: red; */
`;

const Photo = styled.div`
  margin-top: 2rem;
  margin-right 2rem;
`;

const StyledPhotoLink = styled(Link)`
  border-bottom: 2px solid #22292f;
  text-decoration: none;
  &:hover {
    /* border-bottom: 2px solid white; */
  }
`;

/* Photo Fragment will render  partners, advisors, or group */
const PhotoMenu = ({ images }) => (
  <Photos>
    {images.map(image => (
      <StyledPhotoLink to={image.path} key={image.path}>
        <Photo>
          <img src={image.photo} />
        </Photo>
      </StyledPhotoLink>
    ))}
  </Photos>
);

PhotoMenu.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

const RenderPhotos = ({ section }) => {
  switch (section) {
    case "about-us":
      return <PhotoMenu images={aboutUs} />;
    case "partners":
      return <PhotoMenu images={partners} />;
    case "advisors":
      return <PhotoMenu images={advisors} />;
  }
};

RenderPhotos.propTypes = {
  section: PropTypes.string,
};

const teamMenu = [
  { path: `/team/about-us/`, name: `About Us` },
  { path: `/team/partners/nick-divehall/`, name: `Partners` },
  { path: `/team/advisors/john-doe/`, name: `Advisors` },
];

const Team = ({ data }) => {
  const team = data.team;

  return (
    <Layout>
      <SectionMenu menu={teamMenu} />
      <Wrapper>
        <RenderPhotos section={team.frontmatter.section} />
        <Bio dangerouslySetInnerHTML={{ __html: team.html }} />
      </Wrapper>
    </Layout>
  );
};

Team.propTypes = {
  data: PropTypes.object,
};

export const bioQuery = graphql`
  query($slug: String!) {
    team: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        section
        title
      }
      html
    }
  }
`;

export default Team;
