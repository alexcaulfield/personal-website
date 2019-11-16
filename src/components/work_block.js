import React from 'react'
import { 
  Item, 
  Header, 
  Button 
} from 'semantic-ui-react';

const getImgData = name => {
  return {
    logo: `//logo.clearbit.com/${name}.com`,
    alt: `${name} Logo`
  }
}

const getTenureLength = (startDate, endDate) => {
  const monthDiff = endDate.getMonth() - startDate.getMonth()
  const yearDiff = endDate.getYear() - startDate.getYear()
  return monthDiff + (yearDiff * 12) + 1 // adding one to match up with LinkedIn data, they round up
}

const getTenureString = (start, end) => {
  const startDate = new Date(start);
  if (!end) {
    const today = new Date();
    return `${getTenureLength(startDate, today)} mos`
  }
  const endDate = new Date(end);
  return `${getTenureLength(startDate, endDate)} mos`;
}

const WorkBlock = ({workData}) => {
  const {
    name,
    position,
    startdate,
    enddate,
    city,
    state,
    details,
    tags,
  } = workData.node

  const {
    logo,
    alt
  } = getImgData(name)

  const detailsArray = details.split(/\n/g)
  const tagsArray = tags.split(', ')
  return (
    <div>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={logo} alt={alt}/>
          <Item.Content>
            <Item.Header as='a'>{position}</Item.Header>
            <Item.Meta><Header size='small'>{name}</Header></Item.Meta>
            <Item.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {getTenureString(startdate, enddate)} </Item.Meta>
            <Item.Meta>{city}, {state}</Item.Meta>
            {detailsArray.map(detail => {
              return <Item.Description>{detail}</Item.Description>
            })}
            <Item.Extra>
              <Button.Group basic>
                {tagsArray.map(tag => {
                  return <Button>{tag}</Button>
                })}
              </Button.Group>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <br />
    </div>
  )
}

export default WorkBlock