import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=2b8a2ba2eda94b66a90946f269dba995&chamber=senate';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
