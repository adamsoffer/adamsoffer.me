import glamorous from 'glamorous'
import { container } from '../../lib/mixins'
import { screens } from '../../lib/constants'

export const Container = glamorous.div(
  {
    ...container,
    borderBottom: '1px dashed #d0d0d0',
    paddingBottom: '45px',
    paddingTop: '45px',
    marginBottom: '45px'
  },
  props => (
    console.log('watt', props),
    {
      borderBottom: props.removeBorderBottom ? 0 : '1px dashed #d0d0d0'
    }
  )
)

export const Wrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [`@media (min-width: ${screens.medium})`]: {
    flexDirection: 'row'
  }
})

export const Heading = glamorous.div({
  fontSize: '20px',
  fontWeight: '700',
  marginBottom: '20px'
})

export const Body = glamorous.div({
  fontSize: '14px',
  lineHeight: '28px'
})

export const Summary = glamorous.div({
  display: 'block',
  marginBottom: '50px',
  [`@media (min-width: ${screens.medium})`]: {
    flex: '65%',
    marginBottom: 0,
    marginRight: '100px'
  }
})

export const Skills = glamorous.div({
  [`@media (min-width: ${screens.medium})`]: {
    flex: '35%'
  }
})

export const TagList = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap'
})

export const Tag = glamorous.span({
  backgroundColor: '#22BAD9',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '13px',
  padding: '4px 8px',
  marginBottom: '8px',
  marginRight: '8px',
  fontWeight: 600
})
