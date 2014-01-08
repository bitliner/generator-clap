'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ClapGenerator = module.exports = function ClapGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ClapGenerator, yeoman.generators.Base);

ClapGenerator.prototype.askFor = function askFor() {
  var cb = this.async()
  , self=this;


  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'appName',
    message: 'What is the name of this app?',
    default: 'ExpressApp'
  },{
    type: 'confirm',
    name: 'hasEjs',
    message: "Template engine: do you want to use ejs instead of jade?",
    default: true
  },/*{
    type: 'confirm',
    name: 'hasRestfulMongo',
    message: "Do you want to use the 'restful-mongo' module to access easily mongodb through API?",
    default: true
  },*/{
    type: 'input',
    name: 'productionServerName',
    message: "Which is the value of NODE_ENV var in production server ?",
    default: 'PRODUCTION'
  },{
    type: 'input',
    name: 'databaseName',
    message: "Which is the name of database the app has to connect to?",
    default: 'test'
  }];

  this.prompt(prompts, function (props) {
    prompts.forEach(function(p){
      self[p.name]=props[p.name]
    })


    cb();
  }.bind(this));
};

ClapGenerator.prototype.app = function app() {
  this.mkdir('routes');
  this.mkdir('public');
  this.mkdir('views');

  //this.mkdir('app/templates');

  this.copy('views/_index.ejs', 'views/index.ejs');
  this.copy('routes/_index.js', 'routes/index.js');

  this.template('_package.json', 'package.json');
  this.template('_app.js','app.js')
  this.template('_config.js','config.js')
};

ClapGenerator.prototype.projectfiles = function projectfiles() {
  //this.copy('editorconfig', '.editorconfig');
  //this.copy('jshintrc', '.jshintrc');
};
