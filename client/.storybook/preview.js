import { withGlobalStyle, withRouter, withTheme } from './decorators'
import { customViewports } from './const'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      radio: /color/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}

export const decorators = [withTheme, withGlobalStyle, withRouter]
