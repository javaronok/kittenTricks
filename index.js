import { AppRegistry, Platform } from 'react-native';
import App from './src/app/app.component';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('main', { rootTag });
}
