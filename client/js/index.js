var $messages = $('.messages-content');
var serverResponse = "wala";

function listendom(no) {
  console.log(no)
  document.getElementById("MSG").value = no.innerHTML;
  insertMessage();
}

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    // serverMessage("Hello");
  }, 100);

});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}



function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $(".Question").html(msg + '?');
  fetchmsg()

  $('.message-input').val(null);
  updateScrollbar();
  return msg;

}

document.getElementById("mymsg").onsubmit = (e) => {
  e.preventDefault()
  insertMessage();
}

function serverMessage(response2) {


  if ($('.message-input').val() != '') {
    return false;
  }
  updateScrollbar();

  setTimeout(function () {
    $('.message.loading').remove();
    var name1 = /(?<= abc )(.*)(?= def )/g;
    var name2 = /(?<= ghi )(.*)(?= jkl )/g;
    var ReleaseDateStatus1 = /(?<= mno )(.*)(?= pqr )/g;
    var ReleaseDateStatus2 = /(?<= stu )(.*)(?= vwx )/g;
    var Weight1 = /(?<= yza )(.*)(?= bcd )/g;
    var Weight2 = /(?<= efg )(.*)(?= hij )/g;
    var OS1 = /(?<= klm )(.*)(?= nop )/g;
    var OS2 = /(?<= qrs )(.*)(?= tuv )/g;
    var MemorySlot1 = /(?<= wxy )(.*)(?= zab )/g;
    var MemorySlot2 = /(?<= cde )(.*)(?= fgh )/g;
    var InternalMemory1 = /(?<= igk )(.*)(?= lmn )/g;
    var InternalMemory2 = /(?<= opq )(.*)(?= rst )/g;
    var Fans1 = /(?<= uvw )(.*)(?= xyz )/g;
    var Fans2 = /(?<= fgj )(.*)(?= akd )/g;
    var Popularity1 = /(?<= oce )(.*)(?= ple )/g;
    var Popularity2 = /(?<= ivy )(.*)(?= kdg )/g;
    var Hits1 = /(?<= qby )(.*)(?= wic )/g;
    var Hits2 = /(?<= agl )(.*)(?= epo )/g;
    var ScreenSize1 = /(?<= xcv )(.*)(?= zdb )/g;
    var ScreenSize2 = /(?<= xsd )(.*)(?= gmu )/g;
    var ScreenResolution1 = /(?<= ytd )(.*)(?= ibt )/g;
    var ScreenResolution2 = /(?<= cdr )(.*)(?= pjk )/g;
    var RAM1 = /(?<= wsx )(.*)(?= edc )/g;
    var RAM2 = /(?<= qaz )(.*)(?= rfv )/g;
    var Processor1 = /(?<= tgb )(.*)(?= yhn )/g;
    var Processor2 = /(?<= ujm )(.*)(?= ikl )/g;
    var Battery1 = /(?<= opz )(.*)(?= lki )/g;
    var Battery2 = /(?<= mju )(.*)(?= nhy )/g;
    var Dimensions1 = /(?<= bgt )(.*)(?= vfr )/g;
    var Dimensions2 = /(?<= cde )(.*)(?= xsw )/g;
    var Sim1 = /(?<= zaq )(.*)(?= azq )/g;
    var Sim2 = /(?<= sxw )(.*)(?= dce )/g;
    var DisplayType1 = /(?<= fvr )(.*)(?= gbt )/g;
    var DisplayType2 = /(?<= hny )(.*)(?= jmu )/g;
    var DisplayProtection1 = /(?<= kli )(.*)(?= oph )/g;
    var DisplayProtection2 = /(?<= qwe )(.*)(?= rty )/g;
    var Build1 = /(?<= uio )(.*)(?= pas )/g;
    var Build2 = /(?<= dfg )(.*)(?= hjk )/g;
    var Camera1modules1 = /(?<= lzx )(.*)(?= cvb )/g;
    var Camera1modules2 = /(?<= nmq )(.*)(?= wer )/g;
    var Camera1video1 = /(?<= tyu )(.*)(?= iop )/g;
    var Camera1video2 = /(?<= asd )(.*)(?= fgz )/g;
    var Camera2modules1 = /(?<= cva )(.*)(?= cvd )/g;
    var Camera2modules2 = /(?<= cvf )(.*)(?= cvi )/g;
    var Camera2video1 = /(?<= cvk )(.*)(?= cvg )/g;
    var Camera2video2 = /(?<= cvn )(.*)(?= cvm )/g;
    var Network1 = /(?<= cvs )(.*)(?= cvq )/g;
    var Network2 = /(?<= cvt )(.*)(?= cvy )/g;
    var Bluetooth1 = /(?<= cvu )(.*)(?= cvo )/g;
    var Bluetooth2 = /(?<= cvp )(.*)(?= cvl )/g;
    var GPS1 = /(?<= cvj )(.*)(?= cvx )/g;
    var GPS2 = /(?<= zxq )(.*)(?= zxe )/g;
    var NFC1 = /(?<= zxr )(.*)(?= zxt )/g;
    var NFC2 = /(?<= zxy )(.*)(?= zxu )/g;
    var Radio1 = /(?<= zxi )(.*)(?= zxo )/g;
    var Radio2 = /(?<= zxp )(.*)(?= zxa )/g;
    var USB1 = /(?<= zxs )(.*)(?= zxd )/g;
    var USB2 = /(?<= zxf )(.*)(?= zxg )/g;
    var Sensors1 = /(?<= zxh )(.*)(?= zxj )/g;
    var Sensors2 = /(?<= zxk )(.*)(?= zxl )/g;
    var Colors1 = /(?<= zxz )(.*)(?= zxx )/g;
    var Colors2 = /(?<= zxv )(.*)(?= zxc )/g;
    var GPU1 = /(?<= zxb )(.*)(?= zxn )/g;
    var GPU2 = /(?<= zxm )(.*)(?= kta )/g;
    var Price1 = /(?<= ktr )(.*)(?= ktp )/g;
    var Price2 = /(?<= ktv )(.*)(?= ktq )/g;

    if ((msg.includes("ram") || msg.includes("RAM")) && ((msg.includes("less") || msg.includes("greater") || msg.includes("equal") || msg.includes("between")))) {
      $(".Response").html(`<strong>The smart phone are:</strong><br><ol>${response2}</ol>`);
    };

    if ((msg.includes("price") || msg.includes("Price")) && ((msg.includes("less") || msg.includes("greater") || msg.includes("equal") || msg.includes("between")))) {
      $(".Response").html(`<strong>The smart phone are:</strong><br><ol>${response2}</ol>`);
    };

    if ((msg.includes("Popularity") || msg.includes("popularity")) && ((msg.includes("less") || msg.includes("greater") || msg.includes("equal") || msg.includes("between")))) {
      $(".Response").html(`<strong>The smart phones are:</strong><br><ol>${response2}</ol>`);
    };

    if (msg.includes("Image") || msg.includes("image") || msg.includes("Look") || msg.includes("look")) {
      $(".Response").html(response2);
    };

    if (msg.includes("Link") || msg.includes("link")) {
      $(".Response").html(response2);
    };

    if (msg.includes("Release Year") || msg.includes("release year") || msg.includes("Status") || msg.includes("status") || msg.includes("Release") || msg.includes("release")) {
      $(".Response").html(`Release Year and Status of ${response2.match(name1)[0]} is ${response2.match(ReleaseDateStatus1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".RD_Status").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".RD_Status1").html(response2.match(ReleaseDateStatus1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Release Year") || msg.includes("release year") || msg.includes("Status") || msg.includes("status") || msg.includes("Release") || msg.includes("release"))) {
      $(".Response").html(`Release Year and Status of ${response2.match(name1)[0]} is ${response2.match(ReleaseDateStatus1)[0]} and Release Year and Status of ${response2.match(name2)[0]} is ${response2.match(ReleaseDateStatus2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".RD_Status2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".RD_Status2").html(response2.match(ReleaseDateStatus2)[0]);
    }

    if (msg.includes("Weight") || msg.includes("weight")) {
      $(".Response").html(`Weight of ${response2.match(name1)[0]} is ${response2.match(Weight1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Weight").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Weight1").html(response2.match(Weight1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Weight") || msg.includes("weight"))) {
      $(".Response").html(`Weight of ${response2.match(name1)[0]} is ${response2.match(Weight1)[0]} and Weight of ${response2.match(name2)[0]} is ${response2.match(Weight2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Weight2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Weight2").html(response2.match(Weight2)[0]);
    }

    if (msg.includes("OS") || msg.includes("os") || msg.includes("Operating System") || msg.includes("operating system")) {
      $(".Response").html(`Operating System of ${response2.match(name1)[0]} is ${response2.match(OS1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".OS").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".OS1").html(response2.match(OS1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("OS") || msg.includes("os") || msg.includes("Operating System") || msg.includes("operating system"))) {
      $(".Response").html(`Operating System of ${response2.match(name1)[0]} is ${response2.match(OS1)[0]} and Operating System of ${response2.match(name2)[0]} is ${response2.match(OS2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".OS2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".OS2").html(response2.match(OS2)[0]);
    }

    if (msg.includes("Storage") || msg.includes("storage")) {
      $(".Response").html(`Storage Details of ${response2.match(name1)[0]} are given below:`);
      $(".Heading").removeClass("Hide");
      $(".MemorySlot").removeClass("Hide");
      $(".InternalMemory").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".MemorySlot1").html(response2.match(MemorySlot1)[0]);
      $(".InternalMemory1").html(response2.match(InternalMemory1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Storage") || msg.includes("storage"))) {
      $(".Response").html(`Storage Details of ${response2.match(name1)[0]} and ${response2.match(name2)[0]} are given below:`);
      $(".Heading2").removeClass("Hide");
      $(".MemorySlot2").removeClass("Hide");
      $(".InternalMemory2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".MemorySlot2").html(response2.match(MemorySlot2)[0]);
      $(".InternalMemory2").html(response2.match(InternalMemory2)[0]);
    }

    if (msg.includes("Fans") || msg.includes("fans")) {
      $(".Response").html(`${response2.match(name1)[0]} having ${response2.match(Fans1)[0]} fans.`);
      $(".Heading").removeClass("Hide");
      $(".Fans").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Fans1").html(response2.match(Fans1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Fans") || msg.includes("fans"))) {
      $(".Response").html(`${response2.match(name1)[0]} and ${response2.match(name2)[0]} having ${response2.match(Fans1)[0]} and ${response2.match(Fans2)[0]} fans respectively.`);
      $(".Heading2").removeClass("Hide");
      $(".Fans2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Fans2").html(response2.match(Fans2)[0]);
    }

    if (msg.includes("Popularity") || msg.includes("popularity")) {
      $(".Response").html(`${response2.match(name1)[0]} having ${response2.match(Popularity1)[0]} popularity.`);
      $(".Heading").removeClass("Hide");
      $(".Popularity").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Popularity1").html(response2.match(Popularity1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Popularity") || msg.includes("popularity"))) {
      $(".Response").html(`${response2.match(name1)[0]} and ${response2.match(name2)[0]} having ${response2.match(Popularity1)[0]} and ${response2.match(Popularity2)[0]} popularity respectively.`);
      $(".Heading2").removeClass("Hide");
      $(".Popularity2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Popularity2").html(response2.match(Popularity2)[0]);
    }

    if (msg.includes("Hits") || msg.includes("hits") || msg.includes("hit") || msg.includes("Hit")) {
      $(".Response").html(`${response2.match(name1)[0]} having ${response2.match(Hits1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Hits").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Hits1").html(response2.match(Hits1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Hits") || msg.includes("hits") || msg.includes("hit") || msg.includes("Hit"))) {
      $(".Response").html(`${response2.match(name1)[0]} and ${response2.match(name2)[0]} having ${response2.match(Hits1)[0]} and ${response2.match(Hits2)[0]} respectively.`);
      $(".Heading2").removeClass("Hide");
      $(".Hits2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Hits2").html(response2.match(Hits2)[0]);
    }

    if (msg.includes("Screen Size") || msg.includes("screen size")) {
      $(".Response").html(`Screen Size of ${response2.match(name1)[0]} is ${response2.match(ScreenSize1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".ScreenSize").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".ScreenSize1").html(response2.match(ScreenSize1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Screen Size") || msg.includes("screen size"))) {
      $(".Response").html(`Screen Size of ${response2.match(name1)[0]} is ${response2.match(ScreenSize1)[0]} and Screen Size of ${response2.match(name2)[0]} is ${response2.match(ScreenSize2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".ScreenSize2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".ScreenSize2").html(response2.match(ScreenSize2)[0]);
    }

    if (msg.includes("Screen Resolution") || msg.includes("screen resolution")) {
      $(".Response").html(`Screen Resolution of ${response2.match(name1)[0]} is ${response2.match(ScreenResolution1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".ScreenResolution").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".ScreenResolution1").html(response2.match(ScreenResolution1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Screen Resolution") || msg.includes("screen resolution"))) {
      $(".Response").html(`Screen Resolution of ${response2.match(name1)[0]} is ${response2.match(ScreenResolution1)[0]} and Screen Resolution of ${response2.match(name2)[0]} is ${response2.match(ScreenResolution2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".ScreenResolution2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".ScreenResolution2").html(response2.match(ScreenResolution2)[0]);
    }

    if (msg.includes("Ram") || msg.includes("ram") || msg.includes("RAM")) {
      $(".Response").html(`RAM of ${response2.match(name1)[0]} is ${response2.match(RAM1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".RAM").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".RAM1").html(response2.match(RAM1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Ram") || msg.includes("RAM") || msg.includes("ram"))) {
      $(".Response").html(`RAM of ${response2.match(name1)[0]} is ${response2.match(RAM1)[0]} and RAM of ${response2.match(name2)[0]} is ${response2.match(RAM2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".RAM2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".RAM2").html(response2.match(RAM2)[0]);
    }

    if (msg.includes("processor") || msg.includes("Processor")) {
      $(".Response").html(`The Processor of ${response2.match(name1)[0]} is ${response2.match(Processor1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Processor").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Processor1").html(response2.match(Processor1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Processor") || msg.includes("processor"))) {
      $(".Response").html(`${response2.match(name1)[0]} equipped with ${response2.match(Processor1)[0]} and ${response2.match(name2)[0]} has ${response2.match(Processor2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Processor2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Processor2").html(response2.match(Processor2)[0]);
    }

    if (msg.includes("Battery") || msg.includes("battery")) {
      $(".Response").html(`Battery capacity of ${response2.match(name1)[0]} is ${response2.match(Battery1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Battery").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Battery1").html(response2.match(Battery1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Battery") || msg.includes("battery"))) {
      $(".Response").html(`Battery capacity of ${response2.match(name1)[0]} is ${response2.match(Battery1)[0]} and Battery capacity of ${response2.match(name2)[0]} is ${response2.match(Battery2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Battery2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Battery2").html(response2.match(Battery2)[0]);
    }

    if (msg.includes("Dimensions") || msg.includes("dimensions")) {
      $(".Response").html(`Dimensions of ${response2.match(name1)[0]} are ${response2.match(Dimensions1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Dimensions").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Dimensions1").html(response2.match(Dimensions1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Dimensions") || msg.includes("dimensions"))) {
      $(".Response").html(`Dimensions of ${response2.match(name1)[0]} are ${response2.match(Dimensions1)[0]} and Dimensions of ${response2.match(name2)[0]} are ${response2.match(Dimensions2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Dimensions2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Dimensions2").html(response2.match(Dimensions2)[0]);
    }

    if (msg.includes("Sim") || msg.includes("sim")) {
      $(".Response").html(`Sim of ${response2.match(name1)[0]} is ${response2.match(Sim1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Sim").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Sim1").html(response2.match(Sim1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Sim") || msg.includes("sim"))) {
      $(".Response").html(`Sim of ${response2.match(name1)[0]} is ${response2.match(Sim1)[0]} and Sim of ${response2.match(name2)[0]} is ${response2.match(Sim2)[0]}`);
      $(".Heading2").removeClass("Hide");
      $(".Sim2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Sim2").html(response2.match(Sim2)[0]);
    }

    if (msg.includes("Display Type") || msg.includes("display type")) {
      $(".Response").html(`Display Type of ${response2.match(name1)[0]} is ${response2.match(DisplayType1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".DisplayType").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".DisplayType1").html(response2.match(DisplayType1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Display Type") || msg.includes("display type"))) {
      $(".Response").html(`Display Type of ${response2.match(name1)[0]} are ${response2.match(DisplayType1)[0]} and Display Type of ${response2.match(name2)[0]} are ${response2.match(DisplayType2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".DisplayType2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".DisplayType2").html(response2.match(DisplayType2)[0]);
    }

    if (msg.includes("Display Protection") || msg.includes("display protection")) {
      $(".Response").html(`Display Protection of ${response2.match(name1)[0]} is ${response2.match(DisplayProtection1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".DisplayProtection").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".DisplayProtection1").html(response2.match(DisplayProtection1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Display Protection") || msg.includes("display protection"))) {
      $(".Response").html(`Display Protection of ${response2.match(name1)[0]} are ${response2.match(DisplayProtection1)[0]} and Display Protection of ${response2.match(name2)[0]} are ${response2.match(DisplayProtection2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".DisplayProtection2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".DisplayProtection2").html(response2.match(DisplayProtection2)[0]);
    }

    if (msg.includes("Build") || msg.includes("build")) {
      $(".Response").html(`Build of ${response2.match(name1)[0]} is ${response2.match(Build1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Build").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Build1").html(response2.match(Build1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Build") || msg.includes("build"))) {
      $(".Response").html(`Build of ${response2.match(name1)[0]} are ${response2.match(Build1)[0]} and Build of ${response2.match(name2)[0]} are ${response2.match(Build2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Build2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Build2").html(response2.match(Build2)[0]);
    }

    if (msg.includes("Camera") || msg.includes("camera")) {
      $(".Response").html(`Camera Details of ${response2.match(name1)[0]} are given below:`);
      $(".Heading").removeClass("Hide");
      $(".Camera1modules").removeClass("Hide");
      $(".Camera1video").removeClass("Hide");
      $(".Camera2modules").removeClass("Hide");
      $(".Camera2video").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Camera1modules1").html(response2.match(Camera1modules1)[0]);
      $(".Camera1video1").html(response2.match(Camera1video1)[0]);
      $(".Camera2modules1").html(response2.match(Camera2modules1)[0]);
      $(".Camera2video1").html(response2.match(Camera2video1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Camera") || msg.includes("camera"))) {
      $(".Response").html(`Camera Details of ${response2.match(name1)[0]} and ${response2.match(name2)[0]} are given below:`);
      $(".Heading2").removeClass("Hide");
      $(".Camera1modules2").removeClass("Hide");
      $(".Camera1video2").removeClass("Hide");
      $(".Camera2modules2").removeClass("Hide");
      $(".Camera2video2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Camera1modules2").html(response2.match(Camera1modules2)[0]);
      $(".Camera1video2").html(response2.match(Camera1video2)[0]);
      $(".Camera2modules2").html(response2.match(Camera2modules2)[0]);
      $(".Camera2video2").html(response2.match(Camera2video2)[0]);
    }

    if (msg.includes("Network") || msg.includes("network")) {
      $(".Response").html(`Network of ${response2.match(name1)[0]} is ${response2.match(Network1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Network").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Network1").html(response2.match(Network1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Network") || msg.includes("network"))) {
      $(".Response").html(`Network of ${response2.match(name1)[0]} is ${response2.match(Network1)[0]} and Network of ${response2.match(name2)[0]} is ${response2.match(Network2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Network2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Network2").html(response2.match(Network2)[0]);
    }

    if (msg.includes("Bluetooth") || msg.includes("bluetooth")) {
      $(".Response").html(`Bluetooth of ${response2.match(name1)[0]} is ${response2.match(Bluetooth1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Bluetooth").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Bluetooth1").html(response2.match(Bluetooth1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Bluetooth") || msg.includes("bluetooth"))) {
      $(".Response").html(`Bluetooth of ${response2.match(name1)[0]} is ${response2.match(Bluetooth1)[0]} and Bluetooth of ${response2.match(name2)[0]} is ${response2.match(Bluetooth2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Bluetooth2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Bluetooth2").html(response2.match(Bluetooth2)[0]);
    }

    if (msg.includes("GPS") || msg.includes("gps")) {
      $(".Response").html(`GPS of ${response2.match(name1)[0]} is ${response2.match(GPS1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".GPS").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".GPS1").html(response2.match(GPS1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("GPS") || msg.includes("gps"))) {
      $(".Response").html(`GPS of ${response2.match(name1)[0]} is ${response2.match(GPS1)[0]} and GPS of ${response2.match(name2)[0]} is ${response2.match(GPS2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".GPS2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".GPS2").html(response2.match(GPS2)[0]);
    }

    if (msg.includes("NFC") || msg.includes("nfc")) {
      $(".Response").html(`NFC of ${response2.match(name1)[0]} is ${response2.match(NFC1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".NFC").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".NFC1").html(response2.match(NFC1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("NFC") || msg.includes("nfc"))) {
      $(".Response").html(`NFC of ${response2.match(name1)[0]} is ${response2.match(NFC1)[0]} and NFC of ${response2.match(name2)[0]} is ${response2.match(NFC2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".NFC2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".NFC2").html(response2.match(NFC2)[0]);
    }

    if (msg.includes("Radio") || msg.includes("radio")) {
      $(".Response").html(`Radio of ${response2.match(name1)[0]} is ${response2.match(Radio1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Radio").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Radio1").html(response2.match(Radio1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Radio") || msg.includes("radio"))) {
      $(".Response").html(`Radio of ${response2.match(name1)[0]} is ${response2.match(Radio1)[0]} and Radio of ${response2.match(name2)[0]} is ${response2.match(Radio2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Radio2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Radio2").html(response2.match(Radio2)[0]);
    }

    if (msg.includes("USB") || msg.includes("usb")) {
      $(".Response").html(`USB of ${response2.match(name1)[0]} is ${response2.match(USB1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".USB").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".USB1").html(response2.match(USB1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("USB") || msg.includes("usb"))) {
      $(".Response").html(`USB of ${response2.match(name1)[0]} is ${response2.match(USB1)[0]} and USB of ${response2.match(name2)[0]} is ${response2.match(USB2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".USB2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".USB2").html(response2.match(USB2)[0]);
    }

    if (msg.includes("Sensors") || msg.includes("sensors") || msg.includes("sensor") || msg.includes("Sensor")) {
      $(".Response").html(`Sensors of ${response2.match(name1)[0]} are ${response2.match(Sensors1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Sensors").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Sensors1").html(response2.match(Sensors1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Sensor") || msg.includes("sensors") || msg.includes("sensor") || msg.includes("Sensor"))) {
      $(".Response").html(`Sensors of ${response2.match(name1)[0]} are ${response2.match(Sensors1)[0]} and Sensors of ${response2.match(name2)[0]} are ${response2.match(Sensors2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Sensors2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Sensors2").html(response2.match(Sensors2)[0]);
    }

    if (msg.includes("Colors") || msg.includes("colors") || msg.includes("Color") || msg.includes("color")) {
      $(".Response").html(`Colors of ${response2.match(name1)[0]} are ${response2.match(Colors1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Colors").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Colors1").html(response2.match(Colors1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Colors") || msg.includes("colors") || msg.includes("Color") || msg.includes("color"))) {
      $(".Response").html(`Colors of ${response2.match(name1)[0]} are ${response2.match(Colors1)[0]} and Colors of ${response2.match(name2)[0]} are ${response2.match(Colors2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Colors2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Colors2").html(response2.match(Colors2)[0]);
    }

    if (msg.includes("GPU") || msg.includes("gpu")) {
      $(".Response").html(`GPU of ${response2.match(name1)[0]} is ${response2.match(GPU1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".GPU").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".GPU1").html(response2.match(GPU1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("GPU") || msg.includes("gpu"))) {
      $(".Response").html(`GPU of ${response2.match(name1)[0]} is ${response2.match(GPU1)[0]} and GPU of ${response2.match(name2)[0]} is ${response2.match(GPU2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".GPU2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".GPU2").html(response2.match(GPU2)[0]);
    }

    if (msg.includes("Price") || msg.includes("price")) {
      $(".Response").html(`Price of ${response2.match(name1)[0]} is PKR ${response2.match(Price1)[0]}.`);
      $(".Heading").removeClass("Hide");
      $(".Price").removeClass("Hide");
      $(".Heading1").html(response2.match(name1)[0]);
      $(".Price1").html('PKR ' + response2.match(Price1)[0]);
    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("Price") || msg.includes("price"))) {
      $(".Response").html(`Price of ${response2.match(name1)[0]} is PKR ${response2.match(Price1)[0]} and Price of ${response2.match(name2)[0]} is PKR ${response2.match(Price2)[0]}.`);
      $(".Heading2").removeClass("Hide");
      $(".Price2").removeClass("Hide");
      $(".Heading2").html(response2.match(name2)[0]);
      $(".Price2").html('PKR ' + response2.match(Price2)[0]);
    }


    if (msg.includes(",")) {
      $(".Response").html(`Required Features of ${response2.match(name1)[0]} are given below:`);
    }
    if (msg.includes(",") && (msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with"))) {
      $(".Response").html(`Required Features of ${response2.match(name1)[0]} and ${response2.match(name2)[0]} are given below:`);
    }


    if (msg.includes("detail") || msg.includes("Detail") || msg.includes("specs") || msg.includes("specification")) {
      $(".Response").html(`Details of ${response2.match(name1)[0]} are given below:`);
      $(".Heading").removeClass("Hide");
      $(".RD_Status").removeClass("Hide");
      $(".Weight").removeClass("Hide");
      $(".OS").removeClass("Hide");
      $(".MemorySlot").removeClass("Hide");
      $(".InternalMemory").removeClass("Hide");
      $(".Fans").removeClass("Hide");
      $(".Popularity").removeClass("Hide");
      $(".Hits").removeClass("Hide");
      $(".ScreenSize").removeClass("Hide");
      $(".ScreenResolution").removeClass("Hide");
      $(".RAM").removeClass("Hide");
      $(".Processor").removeClass("Hide");
      $(".Battery").removeClass("Hide");
      $(".Dimensions").removeClass("Hide");
      $(".Sim").removeClass("Hide");
      $(".DisplayType").removeClass("Hide");
      $(".DisplayProtection").removeClass("Hide");
      $(".Build").removeClass("Hide");
      $(".Camera1modules").removeClass("Hide");
      $(".Camera1video").removeClass("Hide");
      $(".Camera2modules").removeClass("Hide");
      $(".Camera2video").removeClass("Hide");
      $(".Network").removeClass("Hide");
      $(".Bluetooth").removeClass("Hide");
      $(".GPS").removeClass("Hide");
      $(".NFC").removeClass("Hide");
      $(".Radio").removeClass("Hide");
      $(".USB").removeClass("Hide");
      $(".Sensors").removeClass("Hide");
      $(".Colors").removeClass("Hide");
      $(".GPU").removeClass("Hide");
      $(".Price").removeClass("Hide");

      $(".Heading1").html(response2.match(name1)[0]);
      $(".RD_Status1").html(response2.match(ReleaseDateStatus1)[0]);
      $(".Weight1").html(response2.match(Weight1)[0]);
      $(".OS1").html(response2.match(OS1)[0]);
      $(".MemorySlot1").html(response2.match(MemorySlot1)[0]);
      $(".InternalMemory1").html(response2.match(InternalMemory1)[0]);
      $(".Fans1").html(response2.match(Fans1)[0]);
      $(".Popularity1").html(response2.match(Popularity1)[0]);
      $(".Hits1").html(response2.match(Hits1)[0]);
      $(".ScreenSize1").html(response2.match(ScreenSize1)[0]);
      $(".ScreenResolution1").html(response2.match(ScreenResolution1)[0]);
      $(".RAM1").html(response2.match(RAM1)[0]);
      $(".Processor1").html(response2.match(Processor1)[0]);
      $(".Battery1").html(response2.match(Battery1)[0]);
      $(".Dimensions1").html(response2.match(Dimensions1)[0]);
      $(".Sim1").html(response2.match(Sim1)[0]);
      $(".DisplayType1").html(response2.match(DisplayType1)[0]);
      $(".DisplayProtection1").html(response2.match(DisplayProtection1)[0]);
      $(".Build1").html(response2.match(Build1)[0]);
      $(".Camera1modules1").html(response2.match(Camera1modules1)[0]);
      $(".Camera1video1").html(response2.match(Camera1video1)[0]);
      $(".Camera2modules1").html(response2.match(Camera2modules1)[0]);
      $(".Camera2video1").html(response2.match(Camera2video1)[0]);
      $(".Network1").html(response2.match(Network1)[0]);
      $(".Bluetooth1").html(response2.match(Bluetooth1)[0]);
      $(".GPS1").html(response2.match(GPS1)[0]);
      $(".NFC1").html(response2.match(NFC1)[0]);
      $(".Radio1").html(response2.match(Radio1)[0]);
      $(".USB1").html(response2.match(USB1)[0]);
      $(".Sensors1").html(response2.match(Sensors1)[0]);
      $(".Colors1").html(response2.match(Colors1)[0]);
      $(".GPU1").html(response2.match(GPU1)[0]);
      $(".Price1").html('PKR ' + response2.match(Price1)[0]);

    }
    if ((msg.includes("and") || msg.includes("And") || msg.includes("With") || msg.includes("with")) && (msg.includes("detail") || msg.includes("Details") || msg.includes("specs") || msg.includes("specification"))) {
      $(".Response").html(`Details of ${response2.match(name1)[0]} and ${response2.match(name2)[0]} are given below:`);
      $(".Heading2").removeClass("Hide");
      $(".RD_Status2").removeClass("Hide");
      $(".Weight2").removeClass("Hide");
      $(".OS2").removeClass("Hide");
      $(".MemorySlot2").removeClass("Hide");
      $(".InternalMemory2").removeClass("Hide");
      $(".Fans2").removeClass("Hide");
      $(".Popularity2").removeClass("Hide");
      $(".Hits2").removeClass("Hide");
      $(".ScreenSize2").removeClass("Hide");
      $(".ScreenResolution2").removeClass("Hide");
      $(".RAM2").removeClass("Hide");
      $(".Processor2").removeClass("Hide");
      $(".Battery2").removeClass("Hide");
      $(".Dimensions2").removeClass("Hide");
      $(".Sim2").removeClass("Hide");
      $(".DisplayType2").removeClass("Hide");
      $(".DisplayProtection2").removeClass("Hide");
      $(".Build2").removeClass("Hide");
      $(".Camera1modules2").removeClass("Hide");
      $(".Camera1video2").removeClass("Hide");
      $(".Camera2modules2").removeClass("Hide");
      $(".Camera2video2").removeClass("Hide");
      $(".Network2").removeClass("Hide");
      $(".Bluetooth2").removeClass("Hide");
      $(".GPS2").removeClass("Hide");
      $(".NFC2").removeClass("Hide");
      $(".Radio2").removeClass("Hide");
      $(".USB2").removeClass("Hide");
      $(".Sensors2").removeClass("Hide");
      $(".Colors2").removeClass("Hide");
      $(".GPU2").removeClass("Hide");
      $(".Price2").removeClass("Hide");

      $(".Heading2").html(response2.match(name2)[0]);
      $(".RD_Status2").html(response2.match(ReleaseDateStatus2)[0]);
      $(".Weight2").html(response2.match(Weight2)[0]);
      $(".OS2").html(response2.match(OS2)[0]);
      $(".MemorySlot2").html(response2.match(MemorySlot2)[0]);
      $(".InternalMemory2").html(response2.match(InternalMemory2)[0]);
      $(".Fans2").html(response2.match(Fans2)[0]);
      $(".Popularity2").html(response2.match(Popularity2)[0]);
      $(".Hits2").html(response2.match(Hits2)[0]);
      $(".ScreenSize2").html(response2.match(ScreenSize2)[0]);
      $(".ScreenResolution2").html(response2.match(ScreenResolution2)[0]);
      $(".RAM2").html(response2.match(RAM2)[0]);
      $(".Processor2").html(response2.match(Processor2)[0]);
      $(".Battery2").html(response2.match(Battery2)[0]);
      $(".Dimensions2").html(response2.match(Dimensions2)[0]);
      $(".Sim2").html(response2.match(Sim2)[0]);
      $(".DisplayType2").html(response2.match(DisplayType2)[0]);
      $(".DisplayProtection2").html(response2.match(DisplayProtection2)[0]);
      $(".Build2").html(response2.match(Build2)[0]);
      $(".Camera1modules2").html(response2.match(Camera1modules2)[0]);
      $(".Camera1video2").html(response2.match(Camera1video2)[0]);
      $(".Camera2modules2").html(response2.match(Camera2modules2)[0]);
      $(".Camera2video2").html(response2.match(Camera2video2)[0]);
      $(".Network2").html(response2.match(Network2)[0]);
      $(".Bluetooth2").html(response2.match(Bluetooth2)[0]);
      $(".GPS2").html(response2.match(GPS2)[0]);
      $(".NFC2").html(response2.match(NFC2)[0]);
      $(".Radio2").html(response2.match(Radio2)[0]);
      $(".USB2").html(response2.match(USB2)[0]);
      $(".Sensors2").html(response2.match(Sensors2)[0]);
      $(".Colors2").html(response2.match(Colors2)[0]);
      $(".GPU2").html(response2.match(GPU2)[0]);
      $(".Price2").html('PKR ' + response2.match(Price2)[0]);

    }


    updateScrollbar();
  }, 100 + (Math.random() * 20) * 100);

}

function fetchmsg() {

  var url = 'http://localhost:5000/website';

  const data = new URLSearchParams();
  for (const pair of new FormData(document.getElementById("mymsg"))) {
    data.append(pair[0], pair[1]);
    console.log(pair)
  }

  console.log("abc", data)
  fetch(url, {
    method: 'POST',
    body: data
  }).then(res => res.json())
    .then(response => {
      console.log(response);
      serverMessage(response.Reply);

    })
    .catch(error => console.error('Error h:', error));

}


