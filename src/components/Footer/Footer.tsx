import { FunctionalComponent, h } from 'preact';

export const Footer: FunctionalComponent = () => {
  return (
    <footer role="contentinfo">
      <small>
        <p>
          Disclaimer: This might not be 100% accurate. Probably not even 80%. If
          you don&apos;t trust me, there&apos;s always{' '}
          <a
            href="http://letmegooglethat.com/?q=Is+Maresfield+tip+open+today%3F"
            target="_blank"
            rel="noreferrer"
          >
            Google
          </a>
          .
        </p>
      </small>
    </footer>
  );
};
