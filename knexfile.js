// Update with your config settings.

const devConfig = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'dba_habxhab',
    password : 'passpass',
    database : 'habxhab'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}



module.exports = {
  development : devConfig,
  production : {}
};
