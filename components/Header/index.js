import { Container, Wrapper, Heading, Summary, Body, Skills, TagList, Tag } from './styles'

function Header ({ summary }) {
  return (
    <Container>
      <Wrapper>
        <Summary>
          <Heading>Summary</Heading>
          <Body>{summary}</Body>
        </Summary>
        <Skills>
          <Heading>Skills</Heading>
          <TagList>
            <Tag>React</Tag>
            <Tag>Javascript</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Node.js</Tag>
            <Tag>Git</Tag>
            <Tag>MySQL</Tag>
            <Tag>NoSQL</Tag>
            <Tag>UX/UI Design</Tag>
            <Tag>Sketch</Tag>
            <Tag>Photoshop</Tag>
            <Tag>CSS</Tag>
            <Tag>HTML</Tag>
            <Tag>Docker</Tag>
            <Tag>Solidity</Tag>
          </TagList>
        </Skills>
      </Wrapper>
    </Container>
  )
}

export default Header
