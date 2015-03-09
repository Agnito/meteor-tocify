Package.describe({
  summary: "A jQuery Table of Contents plugin that can be themed with Twitter Bootstrap or jQueryUI.",
  version: "0.1.0",
  git: "https://github.com/Agnito/meteor-tocify.git",
  name: "agnito:tocify"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.use('jquery','client');
  api.use('mizzao:jquery-ui@1.11.2','client')
  api.addFiles('jquery.tocify.js', 'client');
  api.addFiles('jquery.tocify.css', 'client');
});

