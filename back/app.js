const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.method === 'GET') {
        if (req.url === '/api/posts') {

        }
    } else if (req.method === "POST") {
        if (req.url === '/api/post') {

        }
    } else if (req.method === 'DELETE') {
        if (req.url === '/api/post') {

        }
    }
    res.write('<h1>Hello node 1</h1>');
    res.write('<h2>Hello node 2</h2>');
    res.write('<h3>Hello node 3</h3>');
    res.write('<h4>Hello node 4</h4>');
    res.end('<h5>Hello node 5</h5>');
});
server.listen(3065, () => {
    console.log('서버 실행중');
});