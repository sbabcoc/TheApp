import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'com.theapp2.HomeScreen'
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'The App'
          }
        }
      }
    }
  }
});
