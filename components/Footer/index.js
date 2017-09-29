import { Container, A } from './styles'

function Footer() {
  return (
    <Container>
      <div>
        <span>
          This is a universally rendered, GraphQL powered web page. Learn how it
          was built{' '}
          <A href="https://medium.com/apollo-stack/whats-next-js-for-apollo-e4dfe835d070">
            here.
          </A>
        </span>
      </div>
    </Container>
  )
}

export default Footer
