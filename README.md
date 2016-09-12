# React-random-word

Inspired by the randomized words in [Full Stack Fest 2016](https://2016.fullstackfest.com/).

It includes linting with [ESLint](http://eslint.org/).

Real basic testing with [Ava](https://github.com/avajs/ava) and [Enzyme](http://airbnb.io/enzyme/).

Also there is ES6 transpilation.

## Usage

`npm install --save react-random-word`

```xml
<RandomWord
  word="<the_festival />"
  speed={100}
  rounds={10}
  letters="0123456789"
/>
```
<br />
<img src="http://i.giphy.com/3o7TKEAyfWbmolVghq.gif" width="400">

## Props

### word(string)
  - Finalized word itself. This word will be seen after the animation.

### speed(ms)
  - Interval in milliseconds betweed rounds. Defaults to 150.

### rounds
  - Maximum rounds for each letter to be finalized. Defaults to 20.

### letters
  - Letters will be randomized given this letter set. Defaults to 'abcdef0123456789'.


Feel free to open an issue and give feedback.

## License

MIT