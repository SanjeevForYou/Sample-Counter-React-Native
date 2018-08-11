import React from 'react';
import { StyleSheet,style, Text, View, TextInput, FlatList} from 'react-native';
import {Constants} from 'expo';

const mystyles = StyleSheet.create({
  topLevelView : {
    flex : 1,
    flexDirection : 'row',
    paddingTop : 30//Constants.statusBarHeight
  }
})
export default class AppBackup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      textInput : "Please click button to display pop up"
    };
  }
  render() {
    return ( 
      <View style={mystyles.topLevelView}>
        <View style={{flex : 1, backgroundColor: 'steelblue'}}>
            <View style={styles.container}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        </View>
        <View style={{flex : 1, backgroundColor: 'powderblue'}} >
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.textInput} />

            <Text>This is your text {this.state.textInput}</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
        </View> 
        {/* <View style={{backgroundColor: 'steelblue'}} /> */}
    </View>
      // <View style={styles.container}>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});
