const {
  HOST,
  PORT,
} = process.env;

console.log(PORT);

module.exports = {
  host: HOST,
  port: PORT,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50,
  },
  authentication: {
    entity: 'user',
    service: 'users',
    secret: 'EWdhDXbkbKMYsi71HYPQHFXNjQI=',
    authStrategies: ['jwt', 'local'],
    jwtOptions: {
      header: {
        typ: 'access',
      },
      audience: 'https://yourdomain.com',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '14d',
    },
    local: {
      usernameField: 'email',
      passwordField: 'password',
    },
  },
  mongodb: `mongodb+srv://thebase:12345@cluster0.nzkul.mongodb.net/users?retryWrites=true&w=majority`,
};
