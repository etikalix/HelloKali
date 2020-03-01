fetch('https://tar9wj5xij.execute-api.eu-west-2.amazonaws.com/default/goServerless').then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Booo");
});