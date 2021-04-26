const request = require('supertest')
const app = require('../app')

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 1000)); // avoid jest open handle error
});

describe('Timer Endpoints', () => {
  describe("Create Method ", () => {
    test('it should create a new timer', async () => {
      const res = await request(app).post('/api/timer').send({ time: 2.10 })
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
    });
    test('it should fail the creation of a timer', async () => {
      const res = await request(app).post('/api/timer').send({ times: 2.10 })
      expect(res.statusCode).toEqual(400);
    });
  });

  describe("List Method ", () => {
    test('it should get all the timers', async () => {
      const res = await request(app).get('/api/timers')
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(expect.arrayContaining([{ id: 1, time: 1.30,
        createdAt: '2021-04-20T00:31:18.304Z', updatedAt: '2021-04-20T00:31:18.304Z'}]
      ));
    });
  });

  describe("Retrive Method ", () => {
    test('it should get a single timer', async () => {
      const res = await request(app).get('/api/timer/1')
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ id: 1, time: 1.30,
        createdAt: '2021-04-20T00:31:18.304Z', updatedAt: '2021-04-20T00:31:18.304Z'}
      );
    });
    test('it should fail to get a single timer (sending id)', async () => {
      const res = await request(app).get('/api/timer/5')
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({ message: 'Timer Not Found' });
    });
    test('it should fail to get a single timer (without sending id)', async () => {
      const res = await request(app).get('/api/timer/key')
      expect(res.statusCode).toEqual(400);
      expect(res).toHaveProperty('error');
    });
  });

  describe("Update Method ", () => {
    test('it should update a single timer', async () => {
      const res = await request(app).put('/api/timer/1').send({ time: 1.40 })
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('time', 1.40 );
    });
    test('it should fail to update a single timer (sending id)', async () => {
      const res = await request(app).put('/api/timer/5').send({ time: 1.40 })
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({ message: 'Timer Not Found' });
    });
    test('it should fail to update a single timer (without sending id)', async () => {
      const res = await request(app).put('/api/timer/key').send({ time: 1.40 })
      expect(res.statusCode).toEqual(400);
      expect(res).toHaveProperty('error');
    });
  });

  describe("Delete Method ", () => {
    test('it should delete a single timer', async () => {
      const res = await request(app).delete('/api/timer/1')
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Timer deleted successfully.');
    });
    test('it should fail to delete a single timer (sending id)', async () => {
      const res = await request(app).delete('/api/timer/5')
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({ message: 'Timer Not Found' });
    });
    test('it should fail to delete a single timer (without sending id)', async () => {
      const res = await request(app).delete('/api/timer/key')
      expect(res.statusCode).toEqual(400);
      expect(res).toHaveProperty('error');
    });
  });
});