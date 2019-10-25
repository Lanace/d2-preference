import React from 'react';
import {Typography} from '@material-ui/core'

import grey from '@material-ui/core/colors/grey';

class Footer extends React.Component {
 
  render () {
    const style = {
      background: grey[200],
      paddingTop: '32px',
      paddingBottom: '32px',
      backgroundBlendMode: 'overlay',
      backgroundPositionY: 'center',
      backgroundPosition: 'left',
      backgroundSize: '300px',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <footer style={style}>
        <Typography variant="h6" align="center" gutterBottom>Naver D2 Preference</Typography>
        <section>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Naver D2 Session별 선호도 통계</Typography>
        </section>
      </footer>
    )
  }
}

export default Footer;
