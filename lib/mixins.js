import { screens } from './constants'

export const container = {
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  [`@media (min-width: ${screens.small})`]: {
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: screens.small
  },
  [`@media (min-width: ${screens.medium})`]: {
    maxWidth: screens.medium
  },
  [`@media (min-width: ${screens.large})`]: {
    maxWidth: screens.large
  }
}
