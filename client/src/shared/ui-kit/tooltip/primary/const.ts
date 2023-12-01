import {css} from "styled-components";
import {centerBlockInsideRelativeWrapper} from "@mixins";

export const placements = {
    ['top-left']: css`
    bottom: 100%;
    left: 0;
    margin-bottom: 5px;
  `,
    ['top-center']: css`
    bottom: 100%;
    margin-bottom: 5px;
    ${centerBlockInsideRelativeWrapper({axis: 'x'})}
  `,
    ['top-right']: css`
    bottom: 100%;
    right: 0;
    margin-bottom: 5px;
  `,
}