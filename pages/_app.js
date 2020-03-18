import '../static/main.css'
import React, { Component } from 'react';
import Home from '../components/index.js'
import Head from '../components/header.js'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
  	<div>
  	<Head />
  	<Home />
  	</div>
  	)
}