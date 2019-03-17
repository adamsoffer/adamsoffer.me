import {
  Container,
  Wrapper,
  Heading,
  Summary,
  Body,
  Skills,
  TagList,
  Tag
} from './styles'

function Header({ removeBorderBottom, summary }) {
  return (
    <Container removeBorderBottom={removeBorderBottom}>
      <Wrapper>
        <Summary>
          {/* <Heading>Summary</Heading> */}
          <Body>{summary}</Body>
        </Summary>
        {/* <Skills>
          <Heading>Interests</Heading>
          <TagList>
            <Tag>React</Tag>
            <Tag>Javascript</Tag>
            <Tag>Ethereum</Tag>
            <Tag>GraphQL</Tag>
            <Tag>UX/UI Design</Tag>
            <Tag>Futurism</Tag>
            <Tag>The Arts</Tag>
          </TagList>
        </Skills> */}
      </Wrapper>
    </Container>
  )
}

export default Header
