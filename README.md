## Node.js framework showdown: express vs hapi vs restify

[Read the full article here](http://rundef.com/express-vs-hapi-vs-restify)

### Community

  - **express**: 6 millions downloads in the last month, 25k github stars, 78 open issues

  - **hapi**: 188k downloads in the last month, 6k github stars, 29 open issues

  - **restify**: 158k downloads in the last month, 5k github stars, 104 open issues

### Framework goals

  - **express**: to provide small, robust tooling for HTTP servers (supports templating and rendering)

  - **hapi**: configuration-centric approach. enables developers to focus on writing reusable application logic.

  - **restify**: to give you the tools to build REST web services

### Testability

  - **express**: needs an external module, such as [supertest](https://www.npmjs.com/package/supertest)

  - **hapi**: [the shot plugin](https://github.com/hapijs/shot) makes it super easy to test hapi applications

  - **restify**: comes with [clients](http://restify.com/#client-api) to test api endpoints

### Performance

  Benchmarks were executed on a 4-core 2.7 GHZ machine with 16 GB RAM.

  - Benchmarks using ApacheBench (*sh ab.sh*)

    - **express**: 4700 requests/s

    - **hapi**: 2200 requests/s

    - **restify**: 4800 requests/s

### Pros & Cons

| *Framework* | *Pros* | *Cons* |
------------ | ------------- | ------------- |
| **express** | big community, lots of resources | lot of manual tedious tasks (error handling, 404 handling, validation, etc..) |
| **hapi** | backed by big companies | hapi-specific plugins |
| **hapi** | better error handling and testability | |