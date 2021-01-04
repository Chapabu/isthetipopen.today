import { FunctionalComponent, h } from 'preact';
import { OpeningTimes as OpeningTimesType } from '../../services/openingTimes';

interface OpeningTimesProps {
  openingTimes: OpeningTimesType;
}

function makeTimeHumanReadable(date: Date): string {
  return date
    .toLocaleString('en-GB', { hour: 'numeric', hour12: true })
    .replace(' ', '');
}

export const OpeningTimes: FunctionalComponent<OpeningTimesProps> = ({
  openingTimes
}) => {
  const localeStringOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    hour12: true
  };

  return (
    <h2 className="opening-times">
      <time dateTime={openingTimes.open.toLocaleString()}>
        {makeTimeHumanReadable(openingTimes.open)}
      </time>
      &nbsp;&mdash;&nbsp;
      <time dateTime={openingTimes.closed.toLocaleString()}>
        {makeTimeHumanReadable(openingTimes.closed)}
      </time>
    </h2>
  );
};
