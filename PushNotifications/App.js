import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import PushNotification from 'react-native-push-notification';
export default class App extends Component {
  constructor(props) {
    super(props);
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },

      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,

      requestPermissions: true,
      requestPermissions: Platform.OS === 'ios',
    });
  }

  sendNotification = () => {
    console.log('called');
    PushNotification.localNotification({
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <Text> Push Notification </Text>
        <TouchableOpacity onPress={() => this.sendNotification()}>
          <Text>Push Notification</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
