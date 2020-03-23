import axios from 'axios';

class API {
  private cors: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private url: string) {}

  public async get(url): Promise<any> {
    return axios.get(`${this.url}${url}`);
  }

  public withCors(): API {
    return new API(`${this.cors}${this.url}`);
  }
}

export default API;
