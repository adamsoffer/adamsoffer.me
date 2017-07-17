import { css } from 'glamor'
import Main from '../lib/layout'
import Masthead from '../components/Masthead'
import BulletListGroup from '../components/BulletListGroup'
import Footer from '../components/Footer'
import withData from '../lib/withData'

css.global('body', {
  backgroundColor: '#fff'
})

export default withData((props) => (
  <Main>
    <Masthead />
    <BulletListGroup />
    <Footer />
  </Main>
))
