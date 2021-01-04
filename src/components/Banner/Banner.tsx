import { FunctionalComponent, h } from 'preact';

interface BannerProps {
  bannerText: string;
}

export const Banner: FunctionalComponent<BannerProps> = ({ bannerText }) => {
  return <h1 class="banner-text">{bannerText}</h1>;
};
