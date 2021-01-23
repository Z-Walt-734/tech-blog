import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


import globalStyle from '../Styles/globalStyle';

const About = () => {
  const style = globalStyle();
  return (
    <>
      <Container
        className={style.articles}
      >

        <Typography variant="h1" gutterBottom>About The Coder</Typography>
        <Typography variant="h3" gutterBottom>Or: How I learned to stop worrying
        and convert coffee into code</Typography>
        <Typography variant="h4" gutterBottom>Experience</Typography>
        <Typography variant="body1" gutterBottom>
        Zach operated nuclear reactors for 8 years both land based and aboard
        submarines for 8 years before deciding that software and hardware
        engineering in the tech industry was a better future. After spending
        some time working for startups and attending college, Zach decided to
        shift direction to give back and now spends his free time awkwardly
        writing about pages about himself, and creating tutorials to educate
        others. He hopes to use these lessons to open the door to coding and
        tech design and inspire future tech leaders.
        </Typography>

      </Container>
    </>
  );
};

export default About;
