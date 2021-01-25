import React from 'react';
// import {Route} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

import globalStyle from '../Styles/globalStyle';

const SampleCard = () => {
  const classes = globalStyle();
  return (
    <Box className={classes.cardHolder}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.cardTitle}>
              This is the entry Title
            </Typography>
            <CardMedia
              className={classes.cardMedia}
              image='https://learn.g2.com/hubfs/What_is_Information_Technology.jpg'
              title='Techblog Image'
            />
            <Typography className={classes.cardTagline}>
              This is the entry tagline. It runs on a bit longer than the title
            </Typography>
            <Typography className={classes.cardSummary}>
              This is the entry summary. It will at most be about a paragrarph.
              It will consist of the first paragraph from the entry. This
              will serve as a bit of a sample for what the entry is about.
              It will also cut off after x character. I will decide what x
              is later.
            </Typography>
            <Typography className={classes.cardDate}>01/01/2021</Typography>
            <Typography></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SampleCard;
