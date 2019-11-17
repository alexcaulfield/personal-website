const getTenureLength = (startDate, endDate) => {
  const monthDiff = endDate.getMonth() - startDate.getMonth()
  const yearDiff = endDate.getYear() - startDate.getYear()
  return monthDiff + (yearDiff * 12) + 1 // adding one to match up with LinkedIn data, they round up
}

export const getTenureString = (start, end) => {
  const startDate = new Date(start);
  if (!end) {
    const today = new Date();
    return `${getTenureLength(startDate, today)} mos`
  }
  const endDate = new Date(end);
  return `${getTenureLength(startDate, endDate)} mos`;
}

export const getImgData = (name, photoData) => {
  const splitNameString = name.split(' ')
  const logo = splitNameString.length > 1 ?
    (splitNameString[0] == 'Needham' ? 
      photoData.allImageSharp.nodes[0].fixed.src :`//logo.clearbit.com/${splitNameString[0]}.edu`) 
    : `//logo.clearbit.com/${name}.com`;
  return {
    logo: logo,
    alt: `${name} Logo`
  }
}