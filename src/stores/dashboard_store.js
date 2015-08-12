import alt from '../alt';
import immutableUtil from 'alt/utils/ImmutableUtil';
import Immutable from 'immutable';
import DashboardActions from '../actions/dashboard_actions';

class DashboardStore {
  constructor() {
    this.salesStats = Immutable.List();

    this.bindListeners({
      handleUpdateSalesStats: DashboardActions.UPDATE_SALES_STATS,
      handleFetchSalesStats: DashboardActions.FETCH_SALES_STATS
    });
  }

  handleUpdateSalesStats(salesStats) {
    this.salesStats = salesStats;
  }

  handleFetchSalesStats() {
    this.salesStats = Immutable.List();
  }
}

export default alt.createStore(immutableUtil(DashboardStore));
