import glamorous from 'glamorous'

export const Container = glamorous.div({
  display: 'flex'
})

export const Line = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const Circle = glamorous.div({
  backgroundColor: '#1d1d1f',
  borderRadius: '1000px',
  height: '8px',
  margin: '5px 0',
  minHeight: '8px',
  minWidth: '8px',
  width: '8px'
})

export const Bar = glamorous.div({
  backgroundColor: '#1d1d1f',
  height: '100%',
  width: '2px'
})

export const Body = glamorous.div(
  {
    fontSize: '14px',
    lineHeight: '28px',
    marginBottom: '50px',
    marginLeft: '30px'
  },
  props => ({
    marginBottom: props.lastChild ? '0' : '50px'
  })
)

export const Title = glamorous.div({
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '-2px'
})

export const Subtitle = glamorous.div({
  color: '#999',
  fontSize: '14px',
  marginBottom: '15px'
})
