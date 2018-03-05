////
// @author Tony McGuckin, IBM
// @name Profiles Customization
// @version 0.1
// @date February, 2017
//
var waitFor = function (callback, elXpath, maxInter, waitTime) {
    if (!maxInter) var maxInter = 100; // number of intervals before expiring
    if (!waitTime) var waitTime = 10; // 1000=1 second
    if (!elXpath) return;

    var waitInter = 0; // current interval
    var intId = setInterval(function () {
        if (++waitInter < maxInter && !dojo.query(elXpath).length) return;
        clearInterval(intId);
        callback();
    }, waitTime);
};

if (typeof (dojo) != "undefined") {
  if (!inIframe){
    dojo.place(
        //        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/samples/profiles/profilesCustomization.css\"></link>",
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/compensar/zorro-theme.css\"></link>",
        dojo.doc.head,
        "last"
    );
    waitFor(function() {document.querySelector('.orglogo').src = 'http://voyageursdusoir.vendee.fr/wp-content/uploads/2015/09/Z-604x270.png';}, '.orglogo')
  }

}

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
