function writeCookie() {    
  $.cookie($('#writeKey').val(), $('#writeValue').val());
  alert('Cookie has been added successfully!');
}

function readCookie() {
  alert($.cookie($('#readKey').val()));
}

function deleteCookie() {
  $.removeCookie($('#deleteKey').val());
  alert('Cookie has been removed successfully!');
}
function readAllCookies() {
  $.cookie.json = true;
  alert(JSON.stringify($.cookie()));
}