import moment from "moment"

const getTenureLength = (startDate, endDate) => {
  const monthDiff = endDate.diff(startDate, "months")
  const years = endDate.diff(startDate, "years")
  const months = monthDiff - years * 12
  return [years, months]
}

const generateStringFromDates = (years, months) => {
  const yearString = years > 1 ? "year" : "yr"
  const monthString = months > 1 ? "mos" : "mo"
  return (
    (years > 0 ? `${years} ${yearString} ` : "") + `${months} ${monthString}`
  )
}

export const getTenureString = (start, end) => {
  const startDate = moment(start)
  if (!end) {
    const today = moment()
    const [years, months] = getTenureLength(startDate, today)
    return generateStringFromDates(years, months)
  }
  const endDate = moment(end)
  const [years, months] = getTenureLength(startDate, endDate)
  return generateStringFromDates(years, months)
}

export const getImgData = (name, photoData) => {
  const splitNameString = name.split(" ")
  let logo = ""
  switch (splitNameString[0]) {
    case "Needham":
      logo = photoData.allImageSharp.nodes[0].fixed.src
      break
    case "Tufts":
      logo = "//logo.clearbit.com/tufts.edu"
      break
    case "Brazilian":
      logo = "//logo.clearbit.com/verdeamarelo.org"
      break
    default:
      logo = `//logo.clearbit.com/${name.replace(/\W/g, "")}.com`
  }
  return {
    logo: logo,
    alt: `${name} Logo`,
  }
}
