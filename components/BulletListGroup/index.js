import { gql, graphql } from 'react-apollo'
import moment from 'moment'
import { Container, Wrapper, Heading } from './styles'
import BulletList from '../BulletList'
import Bullet from '../Bullet'

function BulletListGroup({ data: { experiences, educations } }) {
  return (
    <Container>
      <Wrapper>
        <BulletList>
          <Heading>Experience</Heading>
          {experiences.map((experience, i) => {
            return (
              <Bullet
                key={experience.id}
                title={experience.jobTitle}
                subtitle={experience.companyName}
                description={experience.description}
                startDate={moment(experience.startDate).format(`MMM 'YY`)}
                endDate={getEndDate(experience.endDate)}
                firstChild={i === 0}
                lastChild={experiences.length - 1 === i}
              />
            )
          })}
        </BulletList>
        <BulletList>
          <Heading>Education</Heading>
          {educations.map((education, i) => {
            return (
              <Bullet
                key={education.id}
                title={`${education.degree} ${education.major}`}
                subtitle={education.schoolName}
                description={education.description}
                startDate={moment(education.startDate).format(`MMM 'YY`)}
                endDate={getEndDate(education.endDate)}
                firstChild={i === 0}
                lastChild={educations.length - 1 === i}
              />
            )
          })}
        </BulletList>
      </Wrapper>
    </Container>
  )
}

const allBullets = gql`
  query {
    experiences: allExperiences(orderBy: startDate_DESC) {
      id
      jobTitle
      companyName
      description
      startDate
      endDate
    }
    educations: allEducations(orderBy: startDate_DESC) {
      id
      schoolName
      degree
      major
      description
      startDate
      endDate
    }
  }
`

function getEndDate(endDate) {
  if (!endDate) {
    return 'Present'
  } else {
    return moment(endDate).format(`MMM 'YY`)
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allBullets)(BulletListGroup)
