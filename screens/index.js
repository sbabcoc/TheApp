import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import EchoScreen from './EchoScreen';
import LoginScreen from './LoginScreen';
import SecretScreen from './SecretScreen';
import VerifySMSScreen from './VerifySMSScreen';
import ClipboardScreen from './ClipboardScreen';
import HybridScreen from './HybridScreen';
import Hybrid2Screen from './Hybrid2Screen';
import ListScreen from './ListScreen';
import PhotoScreen from './PhotoScreen';
import LocationScreen from './LocationScreen';
import PickerScreen from './PickerScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('com.theapp2.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('com.theapp2.EchoScreen', () => EchoScreen);
  Navigation.registerComponent('com.theapp2.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('com.theapp2.SecretScreen', () => SecretScreen);
  Navigation.registerComponent('com.theapp2.VerifySMSScreen', () => VerifySMSScreen);
  Navigation.registerComponent('com.theapp2.ClipboardScreen', () => ClipboardScreen);
  Navigation.registerComponent('com.theapp2.HybridScreen', () => HybridScreen);
  Navigation.registerComponent('com.theapp2.Hybrid2Screen', () => Hybrid2Screen);
  Navigation.registerComponent('com.theapp2.ListScreen', () => ListScreen);
  Navigation.registerComponent('com.theapp2.PhotoScreen', () => PhotoScreen);
  Navigation.registerComponent('com.theapp2.LocationScreen', () => LocationScreen);
  Navigation.registerComponent('com.theapp2.PickerScreen', () => PickerScreen);
}
