# vue-notice
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

In your Vue.js components, simply call one of these methods:

```js
// Basic alert
this.$notice.show("Hello world!")

// Success notification
this.$notice.success("Your profile has been saved!")

// Error message
this.$notice.error("Oops, something went wrong!")

// Warning
this.$notice.warning("Please review your information.")

// Basic alert
this.$notice.info("New version of the app is available!")
```

## Configuration
 
All of the alert methods can accept a config object as second parameter if you need to override the defaults. Example:

```js
this.$notice.info("Hey! Something very important here...", {
  killer: true,
  timeout: 6000,
  layout: 'topRight'
})
```

For more information about available configuration properties, please read [Noty's documentation](http://ned.im/noty/options.html).

*Repository based on [vue-noty](https://github.com/renoguyon/vuejs-noty)*
