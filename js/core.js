$("#switchlang").on("click", function() {
  if ($("#switchlang").is(":checked")) {
    $(".box-en").addClass("active");
    $(".box-th").removeClass("active");
  } else {
    $(".box-en").removeClass("active");
    $(".box-th").addClass("active");
  }
});
$("#footer-owl-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
      margin: 20,
      nav: false
    },
    600: {
      items: 4,
      margin: 30,
      nav: false
    },
    1200: {
      items: 7,
      margin: 40,
      nav: false,
      loop: true
    }
  }
});
$("#images-news").owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      margin: 0,
      nav: false
    },
    600: {
      items: 3,
      margin: 0,
      nav: false
    },
    1200: {
      items: 5,
      margin: 0,
      nav: false,
      loop: true
    }
  }
});
var lastScrollTop = 0;
var fixheight = 180;
$(window).scroll(function() {
  var st = $(this).scrollTop();
  var header = $(".header-geton");
  if (st > fixheight) {
    setTimeout(function() {
      if (st > lastScrollTop) {
        header.addClass("hide-header");
      } else {
        header.removeClass("hide-header");
      }
      lastScrollTop = st;
    }, 100);
  } else {
    header.removeClass("hide-header");
  }
});

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}

var changwat = [
  "เชียงราย",
  "เชียงใหม่",
  "น่าน",
  "พะเยา",
  "แพร่",
  "แม่ฮ่องสอน",
  "ลำปาง",
  "ลำพูน",
  "อุตรดิตถ์",
  "กาฬสินธุ์",
  "ขอนแก่น",
  "ชัยภูมิ",
  "นครพนม",
  "นครราชสีมา",
  "บึงกาฬ",
  "บุรีรัมย์",
  "มหาสารคาม",
  "มุกดาหาร",
  "ยโสธร",
  "ร้อยเอ็ด",
  "เลย",
  "สกลนคร",
  "สุรินทร์",
  "ศรีสะเกษ",
  "หนองคาย",
  "หนองบัวลำภู",
  "อุดรธานี",
  "อุบลราชธานี",
  "อำนาจเจริญ",
  "กำแพงเพชร",
  "ชัยนาท",
  "นครนายก",
  "นครปฐม",
  "นครสวรรค์",
  "นนทบุรี",
  "ปทุมธานี",
  "พระนครศรีอยุธยา",
  "พิจิตร",
  "พิษณุโลก",
  "เพชรบูรณ์",
  "ลพบุรี",
  "สมุทรปราการ",
  "สมุทรสงคราม",
  "สมุทรสาคร",
  "สิงห์บุรี",
  "สุโขทัย",
  "สุพรรณบุรี",
  "สระบุรี",
  "อ่างทอง",
  "อุทัยธานี",
  "จันทบุรี",
  "ฉะเชิงเทรา",
  "ชลบุรี",
  "ตราด",
  "ปราจีนบุรี",
  "ระยอง",
  "สระแก้ว",
  "กาญจนบุรี",
  "ตาก",
  "ประจวบคีรีขันธ์",
  "เพชรบุรี",
  "ราชบุรี",
  "กระบี่",
  "ชุมพร",
  "ตรัง",
  "นครศรีธรรมราช",
  "นราธิวาส",
  "ปัตตานี",
  "พังงา",
  "พัทลุง",
  "ภูเก็ต",
  "ระนอง",
  "สตูล",
  "สงขลา",
  "สุราษฎร์ธานี",
  "ยะลา",
  "กรุงเทพมหานคร"
];

