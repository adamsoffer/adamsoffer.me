import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cj56sfx1sf97k0148st9l4wsd', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
}

export default withData(config)
