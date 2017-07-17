import glamorous from 'glamorous'
import { container } from '../../lib/mixins'
import { screens } from '../../lib/constants'

export const Container = glamorous.div({
  backgroundColor: '#ffffff',
  borderTop: '3px solid #22BAD9'
})

export const Wrapper = glamorous.div({
  ...container,
  borderBottom: '1px dashed #d0d0d0',
  paddingBottom: '30px',
  paddingTop: '30px'
})

export const Content = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  [`@media (min-width: ${screens.small})`]: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

export const Info = glamorous.div({
  marginBottom: '30px',
  [`@media (min-width: ${screens.small})`]: {
    marginBottom: 0
  }
})

export const Heading = glamorous.h1({
  fontSize: '22px',
  fontWeight: 900,
  marginBottom: '10px'
})

export const Subheading = glamorous.h2({
  fontSize: '16px',
  fontWeight: 'normal'
})

export const Contact = glamorous.div({
  fontSize: '14px',
  lineHeight: '24px'
})

export const A = glamorous.a({
  transition: 'color .3s',
  ':hover': {
    color: '#d9226e',
    transition: 'color .3s'
  }
})

export const SocialIcons = glamorous.div({
  alignItems: 'center',
  display: 'flex',
  marginTop: '12px'
})

export const IconLink = glamorous.a({
  alignItems: 'center',
  display: 'flex',
  marginRight: '25px'
})

export const Image = glamorous.img({
  width: '22px'
})
