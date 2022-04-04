export const calculateAge = (dateToCompare: Date): string => {
  const dateRange = new Date().getTime() - dateToCompare.getTime();
  const numberOfDays = dateRange / 8.64e7;
  if (numberOfDays < 1) {
    const ageInHours = Math.round(numberOfDays * 24);
    return `${ageInHours} hour${ageInHours >= 2 || !ageInHours ? "s" : ""}`;
  }
  return `${Math.round(numberOfDays)} day${numberOfDays >= 1.5 ? "s" : ""}`;
};

export const fakeFn = () => {
  return true;
};
