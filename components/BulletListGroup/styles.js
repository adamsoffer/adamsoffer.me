import glamorous from 'glamorous'
import { container } from '../../lib/mixins'
import { screens } from '../../lib/constants'

export const Container = glamorous.div({
  ...container,
  borderBottom: '1px dashed #d0d0d0',
  paddingBottom: '45px'
})

export const Wrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  [`@media (min-width: ${screens.medium})`]: {
    flexDirection: 'row'
  }
})

export const Heading = glamorous.div({
  fontSize: '20px',
  fontWeight: '700',
  marginBottom: '30px',
  display: 'inline-block'
})
