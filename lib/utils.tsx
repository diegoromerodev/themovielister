export const calculateAge = (dateToCompare: Date): string => {
  const dateRange = new Date().getTime() - dateToCompare.getTime();
  const numberOfDays = dateRange / 8.64e7;
  if (numberOfDays < 1) {
    const ageInHours = Math.round(numberOfDays * 24);
    return `${ageInHours} hour${ageInHours >= 2 || !ageInHours ? "s" : ""}`;
  }
  return `${Math.round(numberOfDays)} day${numberOfDays >= 1.5 ? "s" : ""}`;
};

export const camelCaseToCapitalize = (camelCaseStr: string): string => {
  debugger;
  const breakPoints: number[] = [];
  camelCaseStr.split("").forEach((char, index) => {
    if (char.toLowerCase() !== char) breakPoints.push(index);
  });
  if (!breakPoints.length) {
    return camelCaseStr[0].toUpperCase() + camelCaseStr.slice(1);
  }
  let lastSplitPoint = 0;
  const resultingStr = breakPoints.reduce(
    (capStr: string, bp: number): string => {
      let currStr;
      if (bp && bp === lastSplitPoint + 1) {
        currStr = capStr;
      } else {
        const newCapitalizedSection = camelCaseStr.slice(lastSplitPoint, bp);
        currStr = `${capStr} ${newCapitalizedSection[0].toUpperCase()}${newCapitalizedSection.slice(
          1
        )}`;
      }
      lastSplitPoint = bp;
      return currStr;
    },
    ""
  );
  return resultingStr.trim();
};
