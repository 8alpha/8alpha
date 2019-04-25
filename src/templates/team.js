import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";

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

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

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
  flex-basis: 50%;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
  }
`;

const MenuItem = styled.div`
  flex-basis: 12%;
  font-weight: bold;
  font-size: 2.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const MenuFragment = ({ path, itemName }) => (
  <MenuItem>
    <StyledLink to={path} activeStyle={{ borderBottom: `2px solid white` }}>
      <>{itemName}</>
    </StyledLink>
  </MenuItem>
);

MenuFragment.propTypes = {
  path: PropTypes.string,
  itemName: PropTypes.string,
};

const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 45%;
  /* border-style: solid;
    * border-color: red; */
`;

const Photo = styled.div`
  padding-top: 2rem;
  padding-right 2rem;
`;

const StyledPhotoLink = styled(Link)`
  border-bottom: 2px solid #22292f;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

/* Photo Fragment will render  partners, advisors, or group */
const PhotoFragment = ({ images }) => {
  let i = 200;
  return (
    <Photos>
      {images.map(image => {
        i = i + 1;
        return (
          <Photo key={i}>
            <StyledPhotoLink to={image.path}>
              <img src={image.photo} />
            </StyledPhotoLink>
          </Photo>
        );
      })}
    </Photos>
  );
};

PhotoFragment.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

const RenderPhotos = ({ section }) => {
  switch (section) {
    case "about-us":
      return <PhotoFragment images={aboutUs} />;
    case "partners":
      return <PhotoFragment images={partners} />;
    case "advisors":
      return <PhotoFragment images={advisors} />;
  }
};

RenderPhotos.propTypes = {
  section: PropTypes.string,
};

const Team = ({ data }) => {
  const team = data.team;

  return (
    <Layout>
      <Menu>
        <MenuFragment path="/team/about-us/" itemName="About Us" />
        <MenuFragment
          path="/team/partners/nick-divehall/"
          itemName="Partners"
        />
        <MenuFragment path="/team/advisors/john-doe/" itemName="Advisors" />
      </Menu>
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
