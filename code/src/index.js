// We need React because we're writing React code.
import React from 'react'
// ReactDOM is what takes our React code and inserts it into our HTML.
// It also updates the HTML when components re-render or are unmounted.
import ReactDOM from 'react-dom'
// index.css should include the 'core' styles for your app, so we can import
// it here.
import './index.css'
// The App component is the starting point for all of the React code you write.
// It doesn't need to be called App. It can be called whatever you want, so long
// as you update the import here and the ReactDOM.render line below.
import { App } from './App'
// Finally, once all the parts are imported, we tell ReactDOM to render your
// App component in the div with id 'root'. You can find that div in
// public/index.html.
ReactDOM.render(<App />, document.getElementById('root'))
