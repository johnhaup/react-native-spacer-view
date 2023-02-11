# react-native-spacer-view

Little helper view to give you granular control over your layouts.

## Installation

```sh
yarn add react-native-spacer-view
cd ios && pod install
```

#### Note
This component depends on safe area insets provided by [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context).  If you don't have this library installed, you'll need to add it and [wrap the root of your app in SafeAreaProvider](https://github.com/th3rdwave/react-native-safe-area-context#providers).

If you already have react-native-safe-area-context in your project, you may need to update the version to match what's used in this library.  Otherwise you'll get a `Tried to register two views to RNCSafeAreaView` error.
## Example

```js
import { ScrollView } from 'react-native';
import { Spacer } from 'react-native-spacer-view';
import { Content, Footer, Header } from './components';

export function MyNeatScreen() {
  return (
    <ScrollView>
      <Spacer safeTop height={16} />
      <Header />
      <Spacer height={16} />
      <Content />
      <Spacer height={16} />
      <Footer />
      <Spacer safeBottom height={24} />
    </ScrollView>
  )
}
```

## License
MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
