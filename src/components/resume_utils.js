import moment from "moment";

const getTenureLength = (startDate, endDate) => {
  const monthDiff = endDate.diff(startDate, "months") + 1; // add one to match with LinkedIn
  const years = endDate.diff(startDate, "years");
  const months = monthDiff - years * 12;
  // case where we have exactly one year's worth of months
  if (months === 12) {
    return [years + 1, 0];
  }
  return [years, months];
};

const generateStringFromDates = (years, months) => {
  const yearString = years > 1 ? "years" : "year";
  if (months === 0) {
    return years > 0 ? `${years} ${yearString} ` : "";
  }
  const monthString = months > 1 ? "mos" : "mo";
  return (
    (years > 0 ? `${years} ${yearString} ` : "") + `${months} ${monthString}`
  );
};

export const getTenureString = (start, end) => {
  const startString = `${start.split(" ")[0].slice(0, 3)}-${
    start.split(" ")[1]
  }`;
  const startDate = moment.utc(startString, "MMM-YYYY");
  if (!end) {
    const today = moment.utc(new Date(), "MMM-YYYY");
    const [years, months] = getTenureLength(startDate, today);
    return generateStringFromDates(years, months);
  }
  const endString = `${end.split(" ")[0].slice(0, 3)}-${end.split(" ")[1]}`;
  const endDate = moment.utc(endString, "MMM-YYYY");
  const [years, months] = getTenureLength(startDate, endDate);
  return generateStringFromDates(years, months);
};

export const getImgData = (name, photoData) => {
  const splitNameString = name.split(" ");
  let logo = "";
  switch (splitNameString[0]) {
    case "Needham":
      logo = photoData.allImageSharp.nodes[0].fixed.src;
      break;
    case "Tufts":
      logo = "//logo.clearbit.com/tufts.edu";
      break;
    case "Brazilian":
      logo = "//logo.clearbit.com/verdeamarelo.org";
      break;
    default:
      logo = `//logo.clearbit.com/${name.replace(/\W/g, "")}.com`;
  }
  return {
    logo: logo,
    alt: `${name} Logo`,
  };
};
