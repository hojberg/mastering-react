import alt from '../alt';
import immutableUtil from 'alt/utils/ImmutableUtil';
import Immutable from 'immutable';
import DashboardActions from '../actions/dashboard_actions';

class DashboardStore {
  constructor() {
    this.state = Immutable.fromJS({
      salesStats: []
    });

    this.bindListeners({
      handleUpdateSalesStats: DashboardActions.UPDATE_SALES_STATS,
      handleFetchSalesStats: DashboardActions.FETCH_SALES_STATS
    });
  }

  handleUpdateSalesStats(salesStats) {
    this.setState(this.state.setIn(['salesStates', salesStates]));
  }

  handleFetchSalesStats() {
    this.setState(this.state.setIn(['salesStates', Immutable.List()]));
  }
}

export default alt.createStore(immutableUtil(DashboardStore), 'DashboardStore');
