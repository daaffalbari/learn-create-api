// create http server
const http = require('http');

const requestListener = (request, response) => {
	response.setHeader('Content-Type', 'text/html');
	response.statusCode = 200;
	response.end('<h1>Hello World</h1>');
};

const server = http.createServer(requestListener);
const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
