import {color} from './constants';
import {MyStatusBar} from './resources';
import {AuthNavigator, NavigationBase} from './navigation';

export default function App() {
  return (
    <NavigationBase>
      <MyStatusBar backgroundColor={color.theme} barStyle={'light-content'} />
      <AuthNavigator />
    </NavigationBase>
  );
}
