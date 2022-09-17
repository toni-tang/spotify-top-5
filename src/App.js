import React, { useEffect, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import Login from './Login'

var spotifyApi = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState('');

	// useEffect(() => {
	// 	axios('https://accounts.spotify.com/api/token', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/x-www-form-urlencoded',
	// 			Authorization:
	// 				'Basic ' +
	// 				new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString(
	// 					'base64'
	// 				),
	// 		},
	// 		data: 'grant_type=client_credentials',
	// 	}).then((tokenresponse) => {
	// 		console.log(tokenresponse.data.access_token);
	// 		setToken(tokenresponse.data.access_token);
	// 	});
	// }, []);



	return <div>{!token ? <Login /> : <h1>meow</h1>}</div>;
}

export default App;
