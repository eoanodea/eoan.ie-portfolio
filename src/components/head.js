import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultImage: image
          twitterUsername
        }
      }
    }
  `);

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  // Schema.org structured data for Person
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Eoan O\'Dea',
    alternateName: 'eoanodea',
    url: siteUrl,
    image: `${siteUrl}/images/me.jpeg`,
    description:
      'Irish software engineer, trainer and PhD student in green software and software architecture, focusing on sustainable software systems and energy-efficient microservice architectures.',
    jobTitle: [
      'PhD Student in Software Engineering and Green IT',
      'Software Engineer Trainer',
      'Managing Director, WebSpace',
    ],
    email: 'mailto:hello@eoan.ie',
    nationality: {
      '@type': 'Country',
      name: 'Ireland',
    },
    homeLocation: {
      '@type': 'Place',
      name: 'L\'Aquila, Italy',
    },
    affiliation: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Università degli Studi dell\'Aquila',
        sameAs: 'https://www.univaq.it/',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Groningen',
        sameAs: 'https://www.rug.nl/',
      },
      {
        '@type': 'Organization',
        name: 'FrAmeLab Software Architecture and Engineering Laboratory',
        sameAs: 'https://framelab.team',
      },
      {
        '@type': 'Organization',
        name: 'WebSpace',
        url: 'https://web-space.ie/',
      },
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Dún Laoghaire Institute of Art, Design and Technology (IADT)',
        sameAs: 'https://iadt.ie/',
      },
    ],
    knowsAbout: [
      'Green software',
      'Green IT',
      'Software sustainability',
      'Energy-efficient software systems',
      'Software architecture',
      'Microservices',
      'Web development',
      'Mobile development',
      'Flutter',
      'React',
      'Vue.js',
    ],
    sameAs: [
      'https://www.linkedin.com/in/eoanodea',
      'https://github.com/eoanodea',
      'https://scholar.google.com/citations?user=MSJdQmQAAAAJ',
      'https://orcid.org/0009-0009-0469-1092',
      'https://conf.researchr.org/profile/ecsa-2025/eoanodea',
      'https://conf.researchr.org/profile/ictss-2025/eoanodea',
      'https://archive.onshow.iadt.ie/2021/student/eoan-odea/',
      'https://www.researchgate.net/profile/Eoan-Odea',
      'https://www.framelab.team/rushmore_teams/eoan-odea/',
    ],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />

      {/* JSON-LD Schema for Person */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
