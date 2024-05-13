const request = require('supertest');
const mongoose = require('mongoose');
const yup = require('yup');
const app = require('../app')();
const dbConfig = require('../configs/mongo.json');

//test() === it()
//send ~= body

//beforeAll - before all tests does cb() //js
beforeAll(async () => {
  await mongoose.connect(dbConfig.CONNECTION_STRING);
});

afterAll(async () => {
  await mongoose.disconnect();
});

const LOGIN_RESPONSE_SCHEMA = yup.object({
  data: yup.object({
    user: yup.object().required(),
    tokenPair: yup
      .object({
        accessToken: yup.string().required(),
        refreshToken: yup.string().required(),
      })
      .required(),
  }),
});

describe('test login() on server', () => {
  test('try to login user with correct data must be successfull (201 code)', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'qwerty@gmail.com', password: '159qwerty' });

    expect(res.statusCode).toBe(201);
    expect(LOGIN_RESPONSE_SCHEMA.isValidSync(res.body)).toBe(true);
  });

  // test('try to login user with correct data must be successfull (201 code)', async () => {
  //   const res = request(app)
  //     .post('/auth/login')
  //     .send({ email: 'test@mail.com', password: 'admin' });

  //   expect(res.statusCode).toBe(201);
  //   expect(LOGIN_RESPONSE_SCHEMA.isValidSync(res.body)).toBe(true);
  // });
});
