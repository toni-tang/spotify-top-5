function Login() {
	const CLIENT_ID = '91be49481a6c4e8588475c9f3bcc1a62';
	const REDIRECT_URI = 'http://localhost:3000/';
	const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
	const RESPONSE_TYPE = 'token';

	return (
		<div>
			<a
				href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
			>
				Login to Spotify
			</a>
		</div>
	);
}

export default Login;
