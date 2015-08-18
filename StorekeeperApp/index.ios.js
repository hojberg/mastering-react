var React = require('react-native');
var LatestOrders = require('./src/components/latest_orders');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var StorekeeperApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Storekeeper
        </Text>
        <LatestOrders />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 40,
  },
});

AppRegistry.registerComponent('StorekeeperApp', () => StorekeeperApp);
