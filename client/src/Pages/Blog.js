import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';

import {SampleCard} from '../Components';
import globalStyle from '../Styles/globalStyle';

// TODO: add these functions
// Go into a specified directory
//  Read md file
//  gather data for card
//  generate js (md -> Material-ui)
//  generate card
//  generate link (Route)
// repeat for every md file
//
//
// data map (filename, {img, h1, h3, body1, date(filename)})
// generate cards for map

const Blog = () => {
  const classes = globalStyle();
  return (
    <>
      <Container>
        <Typography variant='h1'>This is the Blog page</Typography>
        <Box component='div' className={classes.cardFlex}>
          <SampleCard />
          <SampleCard />
          <SampleCard />
          <SampleCard />
          <SampleCard />
        </Box>
      </Container>
    </>
  );
};

export default Blog;
