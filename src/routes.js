const routes = {
  getRequestHandler: (server, app) => {
    server.get('/world', (req, res) => {
      const actualPage = '/world';
      app.render(req, res, actualPage);
    });

    server.get('/', (req, res) => {
      const actualPage = '/home';
      app.render(req, res, actualPage);
    });
  },
};

module.exports = routes;
