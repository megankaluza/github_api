exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


Template = function(name) {
  this.name = name
}

Template.prototype.getUsername = function () {
  return this.name
};

exports.templateModule = Template;
