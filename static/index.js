import ObjectLoader from '@speckle/objectloader';

let loader = new ObjectLoader( {
    serverUrl: 'https://speckle.xyz/streams/573a426b4c',
    streamId: '573a426b4c',
    objectId: '255391d07a4d9c5c8d6a4cc2b2e27c15'
});

function loadSpeckleStream() {
	alert('Hello world');
}