// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Ajax Engine
// Use jQuery to fade current content out before fetching new content
$(".header-button, .footer-button").click(function(){
   $('#content-swapper').fadeOut(100);
});
// Fetch new content
function RequestContent(url,id) {
    var http;
    if (window.XMLHttpRequest) {
        try { 
            http = new XMLHttpRequest(); 
        }
        catch(e) {}
    } else if (window.ActiveXObject) {
        try { 
            http = new ActiveXObject("Msxml2.XMLHTTP"); 
        } catch(e) {
        try { 
            http = new ActiveXObject("Microsoft.XMLHTTP"); 
        } 
        catch(e) {}
    }
   }
   // Display error if content can't be fetched
    if(! http) {
        alert('\n\nSorry, unable to open a connection to the server.');
        return false;
    }
    http.onreadystatechange = function() { 
        PublishContent(http,id); 
    };
    http.open('GET',url,true);
    http.send('');
}
// Publish content to the page
function PublishContent(content,id) {
   try {
      if (content.readyState == 4) {
         if(content.status == 200) { 
            
            document.getElementById(id).innerHTML=content.responseText;
            $('#content-swapper').fadeIn(800); // Use jQuery to fade content in
         } else { 
            // Display alert if content does not exist
            alert('\n\nContent request error, status code:\n'+content.status+' '+content.statusText); 
         }
      }
   }
   catch(error) { 
      alert('Error: '+error.name+' -- '+error.message); 
   }
}

// Box slider parameters
$('#shop-slider').bxSlider({
    infiniteLoop: true
});

// Facebook widget
/* window.fbAsyncInit = function() {
    FB.init({
        appId      : '968117499869049',
        xfbml      : true,
        version    : 'v2.1'
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk')); */

// Loader graphic swap
$(".loading-graphic").addClass('hidden-content');
$("#shop-slider").removeClass('hidden-content');
$(".hidden-content").removeClass('loading-graphic'); 

// Active menu item toggles
$(".header-button, .footer-button, .navbar-brand").click(function(){
    $(".header-button").removeClass('active');
});
$("#header-media, #footer-media").click(function(){
    $('#header-media').addClass('active');
});
$("#header-about, #footer-about").click(function(){
    $('#header-about').addClass('active');
});
$("#header-shop, #footer-shop").click(function(){
    $('#header-shop').addClass('active');
});
$("#header-discog, #footer-discog").click(function(){
    $('#header-discog').addClass('active');
});
$("#header-links, #footer-links").click(function(){
    $('#header-links').addClass('active');
});
$("#header-contakt, #footer-contakt").click(function(){
    $('#header-contakt').addClass('active');
});

// Shipping form validation
/* $(document).ready(function () {
    $('#shipping-form').parsley().subscribe('parsley:form:stripe-button-el:span', function (formInstance) {
        if (formInstance.isValid('reqFields', false)) {
            $('.invalid-form-error-message').html('');
            return;
        }
        // else stop form submission
        formInstance.submitEvent.preventDefault();

        // and display a gentle message
        $('.invalid-form-error-message')
        .html("You must correctly fill the fields of at least one of these two blocks!")
        .addClass("filled");
        return;
    });
}); */

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-18481540-8', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('require', 'displayfeatures');
ga('send', 'pageview');