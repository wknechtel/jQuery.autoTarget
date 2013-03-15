/*
  jQuery autoTarget Plugin v1.0.0
  Copyright (c) 2013 William Knechtel
  Released under the terms of the MIT Open Source License
    http://opensource.org/licenses/MIT
    
  https://github.com/wknechtel/jQuery.autoTarget
*/

(function( $ ) {
  $(document).ready(function() {
    var autoTargetUrlPieces = window.location.href.match(/(http[s]?:\/\/[a-zA-Z0-9.]*)\/(.*)/);
    $("a[href^='http']").not("[href^='" + autoTargetUrlPieces[1] + "']").attr("target", "_blank").addClass("external-link");
  });
})( jQuery );