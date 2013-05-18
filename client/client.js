var slug = location.pathname;

Template.bigtextbox.entry = function() {
  entry = Entries.findOne({slug: slug});
  if (entry) {
    return entry.text;
  }
}

Template.bigtextbox.events({
  'keydown': function(event) {
                setTimeout(function () {
                  text = $("#bigtextbox").val();
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

Template.bigtextbox.rendered = function() {
  entry = Entries.findOne({slug: slug});
  if (entry) {
    $("#bigtextbox").val(entry.text);
  }
}
