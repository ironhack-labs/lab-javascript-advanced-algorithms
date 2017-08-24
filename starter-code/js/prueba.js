function showOverFlow(list, text){
  var alertFull = $(list)[0];
  $(alertFull).addClass("redQueue");
  $(alertFull).text(text);
}
