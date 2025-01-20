<div align="center">
  <h1>react-native-spacer-view</h1>
  <a href="https://www.youtube.com/watch?v=AZ93S78Nh4E">
    <img alt="cool alien" width=150 src="space-alien.svg">
  </a>
  <p>A little helper view to give you granular control over your layouts.</p>
</div>
<hr />

[![CI](https://github.com/johnhaup/react-native-spacer-view/actions/workflows/ci.yml/badge.svg)](https://github.com/johnhaup/react-native-spacer-view/actions/workflows/ci.yml)

## Installation

```sh
yarn add react-native-spacer-view
```

#### Note

This component depends on safe area insets provided by [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context). If you don't have this library installed, you'll need to add it and [wrap the root of your app in SafeAreaProvider](https://github.com/th3rdwave/react-native-safe-area-context#providers).

## API

Extends [ViewProps](https://reactnative.dev/docs/view#props). Note that view props are applied _last_, so they will take precendence over Spacer's props. For example, if you pass `flex={2}` and `style={{ flex: 5 }}`, the `flex: 5` will win out.

_All props are optional._

| Prop       | Type               | Description                                                                            |
| ---------- | ------------------ | -------------------------------------------------------------------------------------- |
| height     | `number`           | Adds to total `height` of Spacer.                                                      |
| width      | `number`           | Adds to total `width` of Spacer.                                                       |
| safeTop    | `boolean`          | Adds the device's top safe area inset to the total height of Spacer.                   |
| safeBottom | `boolean`          | Adds the device's bottom safe area inset to the total height of Spacer.                |
| flex       | `true` or `number` | Passing `true` gives Spacer `flex: 1`, passing a number gives Spacer `flex: [number]`. |

## Usage

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
  );
}
```

## Example App

You can run an [example](example/src/App.tsx) implementation of how you might use `Spacer` in a `FlatList` by cloning this repo and running the following commands:

```sh
cd example
yarn
yarn ios (or yarn android)
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
