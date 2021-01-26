import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SilentPingSms from 'react-native-silent-ping-sms';

export default class App extends Component {
  sendSms() {
    console.log('SilentPingSms', SilentPingSms);
    SilentPingSms.send(123, '1923', (response) => {
      console.log('response :', response);
    });
  }
  render() {
    return (
      <View>
        <Text> Send Ping msg in background </Text>
        <Button title="Send" onPress={() => this.sendSms()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
