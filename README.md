generator-clap
==============

A generator for [Yeoman](http://yeoman.io).
Clap lets you generate an Express app, with ready to use REST-API to access data stored in a MongoDb database instance


To build the REST API layer, it uses the module [restful-mongo](https://github.com/bitliner/restful-mongo).


## Getting Started

### If you didn't yet, install Yeoman

```
$ npm install -g yo
```

### Install generator-clap

To install generator-clap from npm, run:

```
$ npm install -g generator-clap
```

### Run generator-clap

Create a subfolder where you want to generate the app
```
$ mkdir myAppName && cd $_
```

Finally, initiate the generator:

```
$ yo clap MyAppName
```

### Use the generated app

Run the generated app:
```
$ node app.js
```

Try the REST API:
* save an object to the database running 
```curl -X POST -H "Content-Type: application/json" -d  ```
```'{"username":"xyz","password":"xyz"}' http://localhost:3000/api/test/example```

* open the browser and access the url `http://localhost:3000/api/test/example?limit=1&fields=username`

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

