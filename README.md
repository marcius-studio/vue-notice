# vue-notice
Vue.js non-blocking notifications, based on noty.js

# Installation
More installation options on [noty.js](http://ned.im/noty/)
```
$ npm install noty
```
Import notice.js in the main project file
```js
import './notice.js'
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
