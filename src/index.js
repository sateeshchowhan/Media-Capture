import { AppRegistry } from 'react-native';
import App from './store/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
