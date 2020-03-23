import Router from 'next/router';

const navigateTo = (url) => () => {
  Router.push(url);
}

export default {
  navigateTo,
}
