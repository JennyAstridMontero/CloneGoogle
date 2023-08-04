const body = document.body;
const rightNav = document.querySelector('.right-nav');
const leftHeader = document.querySelector('.left-side');

if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	body.classList = 'dark';
} else {
	body.classList = 'light';
}
const device = navigator.userAgent;

if (device.includes('iPhone' || 'iPad')) {
	rightNav.style.display = 'none';
	leftHeader.style.display = 'block';
}

// Check if the Geolocation API is supported by the browser
if (navigator.geolocation) {
	// Call the getCurrentPosition method to get the user's location
	navigator.geolocation.getCurrentPosition(showPosition);
} else {
	console.log('Geolocation is not supported by this browser.');
}