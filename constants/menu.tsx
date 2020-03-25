import ROUTES from './routes';

const { NEWS, WEATHER } = ROUTES;

interface IMenuCategory {
  readonly URL: string;
  readonly IMAGE: string;
  readonly DESC: string;
}

const MENU: IMenuCategory[] = [
  { URL: NEWS, IMAGE: '/images/news.jpg', DESC: 'News' },
  { URL: WEATHER, IMAGE: '/images/weather.png', DESC: 'Weather' },
];

export default MENU;
