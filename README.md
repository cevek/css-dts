# css-dts

Create from css files typescript definition file

It be useful for webpack css-modules https://github.com/webpack/css-loader https://github.com/css-modules/css-modules#css-modules with typescript


## Install
`npm i -g css-dts`

## How to use
`css-dts foo.css`
```css
.foo {
    color: red;
}

.bar {
    color: green;
}
```
Will generate `foo.css.d.ts`
```typescript
export const locals: {
    foo: string
    bar: string
}
```

Now you can get classes names from ts files
```typescript
import {locals} from './foo.css'
export class Foo extends React.Component<{}, {}>{
   render(){
      return <div className={locals.foo}>Foo</div>
   }
}
```

This module useful as watcher for IDE

webstorm
![webstorm](https://raw.githubusercontent.com/cevek/css-dts/master/screenshot/webstorm.jpg)
