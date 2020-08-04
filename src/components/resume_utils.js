const getTenureLength = (startDate, endDate) => {
  const monthDiff = endDate.getMonth() - startDate.getMonth() + 1; // adding one to match up with LinkedIn data, they round up
  const yearDiff = endDate.getFullYear() - startDate.getFullYear()
  return [
    yearDiff,
    monthDiff,
  ]
}

const generateStringFromDates = (years, months) => {
  const yearString = years > 1 ? 'year' : 'yr';
  const monthString = months > 1 ? 'mos' : 'mo';
  return (years > 0 ? `${years} ${yearString} ` : '') + `${months} ${monthString}`;
}

export const getTenureString = (start, end) => {
  const startDate = new Date(start);
  if (!end) {
    const today = new Date();
    const [years, months] = getTenureLength(startDate, today);
    return generateStringFromDates(years, months);
  }
  const endDate = new Date(end);
  const [years, months] = getTenureLength(startDate, endDate);
  return generateStringFromDates(years, months);
}

export const getImgData = (name, photoData) => {
  const splitNameString = name.split(' ')
  const logo = splitNameString.length > 1 ?
    (splitNameString[0] === 'Needham' ?
      photoData.allImageSharp.nodes[0].fixed.src :`//logo.clearbit.com/${splitNameString[0]}.edu`) 
    : `//logo.clearbit.com/${name}.com`;
  return {
    logo: logo,
    alt: `${name} Logo`
  }
}