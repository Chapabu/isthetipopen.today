import { FunctionalComponent, h } from 'preact';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { isTheTipOpen } from '../services/openingTimes';
import { Banner } from './Banner/Banner';
import { OpeningTimes } from './OpeningTimes/OpeningTimes';

const isSSR = typeof window === undefined;

export const App: FunctionalComponent = () => {
  const tipState = isTheTipOpen(new Date());

  return (
    <div className="app">
      <main class="center flow">
        <Banner bannerText={tipState.isOpenToday ? 'Yup' : 'Nope'} />
        {tipState.isOpenToday && (
          <OpeningTimes openingTimes={tipState.openingTimes} />
        )}
        <p>
          You can find out more about Maresfield tip{' '}
          <a
            href="https://www.eastsussex.gov.uk/environment/rubbishandrecycling/recyclingsites/escc-maresfieldhwrs/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          , but be careful; it&apos;s a wild ride!
        </p>
      </main>

      <Footer />
    </div>
  );
};
