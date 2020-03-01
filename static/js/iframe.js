(function() {
    var MIETENDECKELRECHNER_ORIGIN = 'https://mietendeckelrechner.berliner-mieterverein.de/md-jetzt';
    var IFRAME_ID = 'mdr';

    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    eventer(messageEvent, function(event) {
      if (event.origin === MIETENDECKELRECHNER_ORIGIN) {
        var iframe = document.getElementById(IFRAME_ID);
        var data = event.data && JSON.parse(event.data);

        if (data) {
          if (data.height) {
            iframe.height = data.height + 100;
          }

          if (data.width) {
            iframe.width = data.width;
          }
        }
      }
    }, false);
  }())