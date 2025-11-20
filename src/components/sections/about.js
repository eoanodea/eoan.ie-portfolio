import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: #fff;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Green IT',
    'Sustainable Software',
    'Software Architecture',
    'Microservices',
    'Energy-Aware Software Design',
    'Green Software Measurement',
    'Benchmarking',
    'Cloud Efficiency',
    'Resource Optimization',
    'Full-Stack Engineering',
    'Mentorship',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi there! I'm Eoan — a software engineer, researcher, and founder of{' '}
              <a href="https://web-space.ie" target="_blank" rel="noreferrer">
                WebSpace
              </a>
              .
            </p>

            <p>
              I started teaching myself web development back in 2016, which quickly led to founding
              WebSpace. Nine years later, I still run the company and work with an incredible team
              delivering modern, high-quality digital solutions for clients across Ireland and
              Europe.
            </p>

            <p>
              Alongside my industry work, I'm pursuing a PhD in Software Engineering &amp; Green IT,
              focusing on sustainable software systems and energy-efficient architectures. My
              research is jointly supervised across European universities and aims to help
              developers build software that is both scalable and environmentally responsible.
            </p>

            <p>
              I hold a first-class honours degree in Creative Computing from{' '}
              <a href="https://iadt.ie/" target="_blank" rel="noreferrer">
                IADT
              </a>
              , where I graduated as Student of the Year, and a Master's degree (cum laude) in
              Software Engineering &amp; Green IT from{' '}
              <a href="https://www.univaq.it/" target="_blank" rel="noreferrer">
                Università degli Studi dell'Aquila
              </a>
              .{' '}
            </p>

            <p>
              {' '}
              I teach and mentor emerging developers at institutions including{' '}
              <a href="https://www.univaq.it/" target="_blank" rel="noreferrer">
                Università degli Studi dell'Aquila
              </a>
              ,{' '}
              <a href="https://www.lewagon.com/" target="_blank" rel="noreferrer">
                Le Wagon Amsterdam
              </a>
              ,{' '}
              <a href="https://brightnetwork.co.uk/" target="_blank" rel="noreferrer">
                Bright Network
              </a>
              ,{' '}
              <a href="https://iadt.ie/" target="_blank" rel="noreferrer">
                IADT
              </a>
              , and{' '}
              <a href="http://www.bfei.ie/" target="_blank" rel="noreferrer">
                BFEI
              </a>
              .
            </p>

            <p>My Skills:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
