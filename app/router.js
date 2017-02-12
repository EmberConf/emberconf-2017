import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('speakers');
  this.route('schedule');
  this.route('location-and-hotels');
  this.route('sponsors');
  this.route('register');
  this.route('become-a-sponsor');
});

export default Router;
