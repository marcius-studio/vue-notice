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
```
@import './noty.css';
```
## Usage

In your Vue.js components, simply call one of these methods:

```js
// Basic alert
this.$noty.show("Hello world!")

// Success notification
this.$noty.success("Your profile has been saved!")

// Error message
this.$noty.error("Oops, something went wrong!")

// Warning
this.$noty.warning("Please review your information.")

// Basic alert
this.$noty.info("New version of the app is available!")
```

## Configuration

#### Config defaults

You can set a default configuration object when registering the plugin. Example:

```js
Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topCenter'
})
```

#### Config override
 
All of the alert methods can accept a config object as second parameter if you need to override the defaults. Example:

```js
this.$noty.info("Hey! Something very important here...", {
  killer: true,
  timeout: 6000,
  layout: 'topRight'
})
```

For more information about available configuration properties, please read [Noty's documentation](http://ned.im/noty/options.html).

*Repository based on [vue-noty](https://github.com/renoguyon/vuejs-noty)*
