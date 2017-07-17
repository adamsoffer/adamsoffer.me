import glamorous from 'glamorous'
import { container } from '../../lib/mixins'

export const Container = glamorous.div({
  ...container,
  display: 'flex',
  fontSize: '12px',
  lineHeight: '24px',
  justifyContent: 'space-between',
  paddingBottom: '45px',
  paddingTop: '45px'
})

export const A = glamorous.a({
  color: '#d9226e'
})
