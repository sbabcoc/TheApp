import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { testProps, login } from '../lib/utils';

var urlListener

let viewList = [
  {
    name: "Echo Box",
    desc: "Write something and save to local memory",
    screen: "Echo",
  },
  {
    name: "Login Screen",
    desc: "A fake login screen for testing",
    screen: "Login",
  },
  {
    name: "Clipboard Demo",
    desc: "Mess around with the clipboard",
    screen: "Clipboard",
  },
  {
    name: "Webview Demo",
    desc: "Explore the possibilities of hybrid apps",
    screen: "Hybrid",
  },
  {
    name: "Dual Webview Demo",
    desc: "Automate apps with multiple webviews",
    screen: "Hybrid2",
  },
  {
    name: "List Demo",
    desc: "Scroll through a list of stuff",
    screen: "List",
  },
  {
    name: "Photo Demo",
    desc: "Some photos with no distinguishing IDs",
    screen: "Photo",
  },
  {
    name: "Geolocation Demo",
    desc: "Use the camera and the photo library",
    screen: "Location",
  },
  {
    name: "Picker Demo",
    desc: "Use some picker wheels for fun and profit",
    screen: "Picker",
  },
];

if (Platform.OS === 'android') {
  viewList.push({
    name: "Verify Phone Number",
    desc: "A fake SMS auto-verification screen",
    screen: "VerifySMS",
  });
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.handleOpenUrl = this.handleOpenUrl.bind(this);
  }

  async componentDidMount() {
    if (Platform.OS === "android") {
      const url = await Linking.getInitialURL();
      if (url) {
        this.handleOpenUrl({url});
        return;
      }
    }
    urlListener = Linking.addEventListener('url', this.handleOpenUrl);
  }

  componentWillUnmount() {
    urlListener && urlListener.remove();
  }

  async handleOpenUrl(event) {
    const {url} = event;
    const route = url.replace(/.*?:\/\//g, '');
    const [handler, ...parts] = route.split('/');
    if (handler === "login") {
      const loggedIn = await login(parts[0], parts[1]);
      if (loggedIn) {
        Navigation.push(this.props.componentId, {component: {name: 'com.theapp2.SecretScreen'}});
      } else {
        Navigation.push(this.props.componentId, {component: {name: 'com.theapp2.SecretScreen'}});
      }
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.listHeader}>Choose An Awesome View</Text>
            {viewList.map((l, i) => (
              <ListItem key={i}
                onPress={() => Navigation.push(this.props.componentId, {component: {
                  name: `com.theapp2.${l.screen}Screen`,
                  options: {
                    topBar: {
                      title: {
                        text: `${l.screen}`
                      }
                    }
                  }
                      }})}
                {...testProps(l.name)}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.desc}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {
    fontSize: 24,
  },
});
