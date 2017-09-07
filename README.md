# vue-notice
**Updated. Fully based on Noty.js API. See Usage instruction.**

Vue.js plugin accessible globally from any component to run non-blocking notifications. Based on [noty.js](http://ned.im/noty/) UI library.

![vue-notice](https://github.com/nikitamarcius/vue-notice/blob/master/13a035f4f6ae4f28b8304a52121b672e.png)

# Installation
More installation options on [noty.js](http://ned.im/noty/)
```
$ npm install noty
```
Import vue-notice.js in the main project file
```js
import Vue from 'vue'
import VueNotice from './vue-notice'

Vue.use(VueNotice)
```
Download the latest version of styles: [noty.css](https://github.com/needim/noty/blob/master/lib/noty.css)
```css
@import './noty.css';
```
## Usage

In your Vue.js components, simply call:

```js
// Basic alert
this.$notice({
     type: 'success',  // alert, success, warning, error, info/information
     text: 'Some notification text' 
 })
```

[Noty.js docs API. Click to see more](https://ned.im/noty/#/options)

