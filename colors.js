var Body = {
  setColor:function (color) {
    //document.querySelector('body').style.color= color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
var Links = {
  setColor:function (color) {
    // var match = document.querySelectorAll('a');
    // for (i = 0; i < match.length; i++) {
    //   match[i].style.color= color;
    // }
    $('a').css('color', color);
  }
}
function nightDatHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    self.value = 'day';
    Links.setColor('black');
    Body.setBackgroundColor('white');
    Body.setColor('black')
  } else {
    self.value = 'night';
    Links.setColor('powderblue');
    Body.setBackgroundColor('black');
    Body.setColor('powderblue');
  }
}
