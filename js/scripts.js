// Running when page is loaded
window.onload = function() {
  if (!Modernizr.input.autofocus) {
  var inputs = document.getElementsByTagName('input');
    inputs[0].focus();
  }
  if (Modernizr.input.placeholder) {
    var label = document.getElementsByTagName('label');
    for (var i = 0, j = label.length; i < j; i++) {
      label[i].classList.add('hidden');
    }
  }
  // If 'required' attribute is not supported
  if (!Modernizr.input.required) {
    var name = document.getElementById('js-name');
    var mail = document.getElementById('js-email');
    var phone = document.getElementById('js-tel');
  }
};
