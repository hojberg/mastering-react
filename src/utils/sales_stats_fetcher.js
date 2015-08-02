import Immutable from 'immutable';

const SalesStatsFetcher = {
  fetch() {
    return fetch('/sales_stats.json')
      .then((resp) => resp.json())
      .then((json) => json.map(parseFloat))
      .then((salesStats) => Immutable.fromJS(salesStats));
  }
};

export default SalesStatsFetcher;
