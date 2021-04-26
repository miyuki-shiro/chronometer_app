const timerController = require('../controllers/timer');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({ message: 'Welcome to the Timer API!' }));

  app.post('/api/timer', timerController.create);
  app.get('/api/timers', timerController.list);
  app.get('/api/timer/:id', timerController.retrieve);
  app.put('/api/timer/:id', timerController.update);
  app.delete('/api/timer/:id', timerController.destroy);
};