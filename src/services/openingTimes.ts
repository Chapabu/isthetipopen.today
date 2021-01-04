export type OpeningTimes = {
  open: Date;
  closed: Date;
};

type OpenDayState = {
  isOpenToday: true;
  openingTimes: OpeningTimes;
};

type ClosedDayState = {
  isOpenToday: false;
};

export type DayState = OpenDayState | ClosedDayState;

const isChristmasPeriod = (date: Date): boolean => {
  return (
    date.getMonth() === 11 && (date.getDate() === 25 || date.getDate() === 26)
  );
};

const isNewYearsDay = (date: Date): boolean => {
  return date.getMonth() === 0 && date.getDate() === 1;
};

const isChristmasEveOrNewYearsEve = (date: Date): boolean => {
  return (
    date.getMonth() === 11 && (date.getDate() === 24 || date.getDate() === 31)
  );
};

export const isTheTipOpen = (date: Date): DayState => {
  // Closed on Christmas Day, Boxing Day, and New Year's Day.
  if (isChristmasPeriod(date) || isNewYearsDay(date)) {
    return {
      isOpenToday: false
    };
  }

  const openState: OpenDayState = {
    isOpenToday: true,
    openingTimes: {
      open: new Date(),
      closed: new Date()
    }
  };

  // Zero out the time.
  openState.openingTimes.open.setHours(0, 0, 0, 0);
  openState.openingTimes.closed.setHours(0, 0, 0, 0);

  const month = date.getMonth();

  // April to September (8am - 5pm).
  if (month >= 3 && month <= 8) {
    openState.openingTimes.open.setHours(8);
    openState.openingTimes.closed.setHours(17);
  }

  // October to March (8am - 4pm, Sunday 9am - 4pm).
  if ((month >= 0 && month <= 2) || (month >= 9 && month <= 11)) {
    const isSunday = date.getDay() === 0;

    openState.openingTimes.open.setHours(!isSunday ? 8 : 9);
    openState.openingTimes.closed.setHours(16);
  }

  // Christmas Eve and New Year's Eve (close at 1pm).
  if (isChristmasEveOrNewYearsEve(date)) {
    openState.openingTimes.closed.setHours(12);
  }

  return openState;
};
