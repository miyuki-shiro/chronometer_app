const Timer = require('../models').Timer;

module.exports = {
  create(req, res) {
    return Timer
      .create({ time: req.body.time })
      .then(timer => res.status(201).send(timer))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Timer
      .findAll({ order: [ ['id', 'DESC'] ] })
      .then(timers => res.status(200).send(timers))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Timer
      .findByPk(req.params.id)
      .then(timer => {
        if (!timer) { return res.status(404).send({ message: 'Timer Not Found' }); }
        return res.status(200).send(timer);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Timer
      .findByPk(req.params.id)
      .then(timer => {
        if (!timer) { return res.status(404).send({ message: 'Timer Not Found' }); }
        return timer
          .update({ time: req.body.time || timer.time })
          .then(() => res.status(200).send(timer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Timer
      .findByPk(req.params.id)
      .then(timer => {
        if (!timer) { return res.status(404).send({ message: 'Timer Not Found' }); }
        return timer
          .destroy()
          .then(() => res.status(200).send({ message: 'Timer deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};