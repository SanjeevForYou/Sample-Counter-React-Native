import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  msgHolder : {
    fontSize : 40
  },
  countHolder : {
    fontSize : 50,
    color : 'blue'
  }
});

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
       count : 0,
    };

   // this.increment.bind(this);

   this.increment = () => {
    setInterval(() => {
      this.setState((prevstate) => ({ count : prevstate.count + 1 }));
    }, 1000);
  };
  }

  componentDidMount(){
    this.increment();
  }

  // increment = () => {
  //   setInterval(() => {
  //     this.setState((prevstate) => ({ count : prevstate.count + 1 }));
  //   }, 1000);
  // }

  render(){
 return (
  <View style={styles.appContainer}>
    <Text style={styles.msgHolder}>
        This is counter app. and the count is
    </Text>
    <Text style={styles.countHolder}>{this.state.count}</Text>
  </View>
 );
}
}