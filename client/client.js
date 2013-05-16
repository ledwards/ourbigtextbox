var slug = location.pathname;

Template.bigtextbox.entry = function() {
  var entry = Entries.findOne({slug: slug});
  if(entry) {
    return entry.text;
  }
  else {
    return "";
  }
}

Template.bigtextbox.events({
  'keypress': function(event) {
                setTimeout(function () {
                  text = $(event.target).val();
                  entry = Entries.findOne({slug: slug});

                  if (entry) {
                    Entries.update(entry._id, {$set: {text: text}});
                  }
                  else {
                    Entries.insert({slug: slug, text: text});
                  }
                }, 0);
              }
});
