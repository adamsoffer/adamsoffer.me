import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../Header'
import ErrorMessage from '../ErrorMessage'
import {
  Container,
  Wrapper,
  Content,
  Info,
  Heading,
  Subheading,
  Contact,
  A,
  SocialIcons,
  IconLink,
  Image
} from './styles'

function Masthead({
  removeBorderBottom,
  data: {
    error,
    User: {
      fullName,
      jobTitle,
      address,
      city,
      state,
      zip,
      phone,
      email,
      summary
    }
  }
}) {
  if (error) return <ErrorMessage message="Error loading posts." />
  return (
    <Container>
      <Wrapper>
        <Content>
          <Info>
            <Heading>{fullName}</Heading>
          </Info>
          <SocialIcons>
            <IconLink href="https://github.com/adamsoffer" target="_blank">
              <Image src="/static/github.svg" />
            </IconLink>
            <IconLink href="https://medium.com/@adamsoffer" target="_blank">
              <Image src="/static/medium.svg" />
            </IconLink>
            <IconLink href="https://twitter.com/adamsoffer" target="_blank">
              <Image src="/static/twitter.svg" />
            </IconLink>
          </SocialIcons>
        </Content>
      </Wrapper>
      <Header removeBorderBottom={removeBorderBottom} summary={summary} />
    </Container>
  )
}

const user = gql`
  query User {
    User(id: "cj56wddmoobkg01211crifmwc") {
      id
      address
      city
      state
      fullName
      email
      phone
      summary
      zip
      jobTitle
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(user)(Masthead)
