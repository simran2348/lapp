import {color} from './constants';
import {MyStatusBar} from './resources';
import {NavigationBase} from './navigation';
import {ContextWrapper} from './context';

export default function App() {
  return (
    <ContextWrapper>
      <NavigationBase>
        <MyStatusBar backgroundColor={color.theme} barStyle={'light-content'} />
      </NavigationBase>
    </ContextWrapper>
  );
}
