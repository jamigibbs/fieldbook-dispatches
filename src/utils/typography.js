import Typography from 'typography'
import stowLakeTheme from 'typography-theme-stow-lake'

stowLakeTheme.overrideThemeStyles = () => ({
  a: {
    color: '#000000',
    textDecoration: 'underline'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  }
})

const typography = new Typography(stowLakeTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
