module.exports = {
  apps: [{
    name: 'node_web_app',
    script: './app.js',
    instances : '3',
    exec_mode : 'cluster'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: '54.246.138.122',
      key: '~/certs/testing-box.pem',
      ref: 'origin/master',
      repo: 'https://github.com/jrierapeiro/node_web_app.git',
      path: '/home/ec2-user/node',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
      env: {
        'NODE_ENV': 'production',
        'VERSION': '0.0.0'
      }
    }
  }
}
