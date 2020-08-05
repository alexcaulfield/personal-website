import React from 'react';
import {
  Item,
  Card,
} from 'semantic-ui-react';
import {
  getTenureString,
  getImgData
} from "./resume_utils"
import WorkRole from "./work_role"

const WorkRoleContainer = ({
  place,
  startdate,
  enddate,
  city,
  state,
  roles,
}) => {
  const {
    logo,
    alt
  } = getImgData(place, {})

  return (
    <Item.Group divided>
      <Item>
        <Item.Image size='tiny' src={logo} alt={alt}/>
        <Item.Content>
          <Item.Header>{place}</Item.Header>
          <Item.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {getTenureString(startdate, enddate)} &#183; {city}, {state} </Item.Meta>
          <Card.Group>
            {roles.map(role => <WorkRole {...role} />)}
          </Card.Group>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default WorkRoleContainer;