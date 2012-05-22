$(function() {
  $("#composite").mousemove(function(e) {
    var x = (100 * (e.pageX - this.offsetLeft)) / $("#composite").width();
    var y = (100 * (e.pageY - this.offsetTop)) / $("#composite").height();
    $("#zoom").css("background-position", "" + x + "% " + y + "%");
  });
});