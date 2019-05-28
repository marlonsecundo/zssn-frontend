const routes = {
  getRequestHandler: (server, app) => {
    server.get('/', (req, res) => {
      const actualPage = '/home';
      app.render(req, res, actualPage);
    });
  },
};

// Name   Page      Pattern
module.exports = routes;
