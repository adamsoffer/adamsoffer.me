import { Container, Line, Circle, Bar, Body, Title, Subtitle } from './styles'

function Bullet ({ title, subtitle, description, startDate, endDate, firstChild, lastChild }) {
  if (!endDate) {
    endDate = 'Present'
  }
  return (
    <Container>
      <Line firstChild={firstChild}>
        <Circle />
        <Bar />
      </Line>
      <Body lastChild={lastChild}>
        <Title>{title}</Title>
        <Subtitle>{subtitle} | {startDate} - {endDate}</Subtitle>
        {description}
      </Body>
    </Container>
  )
}

export default Bullet
