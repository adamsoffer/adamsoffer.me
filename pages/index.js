import { css } from 'glamor'
import Main from '../lib/layout'
import Masthead from '../components/Masthead'
import Footer from '../components/Footer'
import withData from '../lib/apollo'

css.global('body', {
  backgroundColor: '#fff'
})

export default withData(props => (
  <Main>
    <Masthead removeBorderBottom={true} />
    {/* <Footer /> */}
  </Main>
))
