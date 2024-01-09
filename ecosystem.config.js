module.exports = {
  apps : [{
    name   : "admin_app",
    script : "./bin/www",
    exec_mode :"cluster",
    env_production: {
      NODE_ENV: "production"
   },
   env_development: {
      NODE_ENV: "development"
   },
   env_local: {
      NODE_ENV: "local"
   },
   env_test:{
      NODE_ENV:"test"
   }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
