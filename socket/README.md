- To get all the dependencies,

```
npm install
```

- To run the api using node,

```
node api.js
```

Notes
-----

- Loading `http://localhost:4321/` in a browser opens a websocket connection between the client(index.html) and server(api.js)
- This connection is disconnected when the above opened tab is closed or refreshed(which opens a new connection again)
- To see the websocket message being send from the api(route /hello), open a new tab and load `http://localhost:4321/api/hello?name=Amal`
- The above api get request will trigger another message to the already connected websocket
