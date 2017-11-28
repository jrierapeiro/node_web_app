module.exports = {
  apps: [{
    name: 'node_web_app',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-54-194-45-162.eu-west-1.compute.amazonaws.com',
      key: '~/certs/testing-box.pem',
      ref: 'origin/master',
      repo: 'https://github.com/jrierapeiro/node_web_app.git',
      path: '/home/ec2-user/node',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
      env: {
        'NODE_ENV': 'production'
      }
    }
  }
}