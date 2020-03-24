interface IRoutes {
  readonly [index: string]: string;
}

const ROUTES: IRoutes = {
  INDEX: '/',
  WEATHER: 'weather',
  NEWS: 'news',
};

export default ROUTES;
