import glamorous from 'glamorous'
import { screens } from '../../lib/constants'

export const Container = glamorous.div({
  flex: '50%',
  marginBottom: '50px',
  [`@media (min-width: ${screens.medium})`]: {
    ':last-child': {
      marginBottom: 0,
      marginLeft: '50px'
    }
  }
})
