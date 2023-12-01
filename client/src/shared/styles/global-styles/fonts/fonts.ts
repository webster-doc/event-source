import { css } from 'styled-components'

import RobotoLightTtf from '@fonts/roboto/Roboto-Light.ttf'
import RobotoRegularTtf from '@fonts/roboto/Roboto-Regular.ttf'
import RobotoMediumTtf from '@fonts/roboto/Roboto-Medium.ttf'

export const Fonts = css`
  @font-face {
    font-family: 'Roboto';
    src: local('☺'), url(${RobotoLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('☺'), url(${RobotoRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('☺'), url(${RobotoMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`
