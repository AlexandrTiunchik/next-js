interface IPublicAPI {
  readonly [index: string]: string;
}

const PUBLIC_API: IPublicAPI = {
  WEATHER: 'https://www.metaweather.com/api/',
}

export default PUBLIC_API;
