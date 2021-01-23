import React from 'react';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';

import globalStyle from '../Styles/globalStyle';

const Contact = () => {
  const style = globalStyle();
  return (
    <>
      <Container
        className={style.articles}
      >

        <Typography variant="h1" gutterBottom>This is the Contact page</Typography>
        <Typography variant="h2" gutterBottom>This is the Contact page subtitle and section title</Typography>
        <Typography variant="h3" gutterBottom>This is the article tagline. It will be scattered in as quotes and various other tagline data</Typography>
        <Typography variant="h3" gutterBottom>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae feugiat semper, magna ligula eleifend risus, nec convallis est mi eu mauris. Quisque sit amet placerat sapien. Nam convallis tempor tristique. Fusce rhoncus est sed odio tincidunt, quis fringilla dolor fermentum. Donec consectetur nec ligula sed laoreet. Vestibulum a fringilla massa. Sed et lorem est. Proin ultricies ultricies quam vitae luctus. Suspendisse vulputate nulla ac rutrum fermentum. Nunc ut hendrerit tortor. In sapien erat, rutrum vitae condimentum facilisis, convallis et sem. Aliquam pulvinar quam in mi mattis, congue fermentum turpis volutpat. Aliquam erat volutpat. Morbi a sollicitudin elit, vitae consectetur ex. Mauris non enim id leo viverra laoreet elementum vitae felis. Quisque facilisis fermentum mi sed sodales.

Phasellus eu mauris quis urna suscipit tincidunt a et metus. Nullam egestas leo est, a placerat risus tincidunt non. Curabitur dignissim, elit in aliquet lacinia, lectus massa imperdiet mauris, eget molestie tortor tellus ac libero. Proin eget urna dui. In dictum ligula id massa sodales rutrum. Suspendisse potenti. Nullam posuere, tellus vel auctor bibendum, velit felis pulvinar libero, a consequat magna quam gravida lacus.

Aliquam erat volutpat. Nullam laoreet ante at turpis feugiat, in pretium tellus rhoncus. Nulla sit amet risus non ligula vulputate volutpat. Praesent faucibus sodales euismod. Nunc sed eros lectus. Donec maximus odio bibendum, consectetur mauris nec, fringilla leo. Nullam arcu massa, fermentum non turpis ac, consectetur dapibus leo.

Curabitur laoreet mauris ut magna molestie, eu faucibus mi venenatis. Pellentesque vestibulum augue mauris, ut aliquet eros feugiat nec. Nunc ut tempor sapien, ut rhoncus eros. Vivamus quam nulla, sollicitudin eget sem et, tincidunt vestibulum est. In sed posuere lectus, ut cursus felis. Integer id malesuada diam. Cras rutrum, velit id cursus consectetur, odio nisl tristique mi, vitae consequat lacus augue in diam. Proin pharetra ligula neque. Praesent dignissim id neque vitae interdum. Sed quis luctus quam, id posuere nisi. Nunc sed dolor dolor. Duis posuere nisi risus, a dapibus dui dapibus vitae. Aliquam vulputate vehicula dictum.

Ut pharetra nisl eu nisi mattis posuere ut vel nibh. Nunc sed vestibulum diam. Nunc iaculis molestie diam, id rutrum sapien efficitur ut. Curabitur vitae eros tincidunt, lacinia leo non, lacinia nisl. Cras et quam in nibh interdum cursus. Vestibulum eu tincidunt est. Duis aliquet est et diam commodo, et bibendum diam condimentum. Mauris condimentum mauris sed dignissim consectetur. Vivamus tincidunt, eros vel sodales aliquet, ligula leo vehicula turpis, id consequat purus diam quis velit. Mauris quis interdum dui, rutrum blandit velit.
        </Typography>

      </Container>
    </>
  );
};

export default Contact;
