let w = innerWidth;

function smallNav() {
  $("#navigation-large").addClass("hide");
  $("#navigation-small").addClass("hide");
  $("#button-header").addClass("hide");
  $("#burger").removeClass("hide");
  $("#close").addClass("hide");
}
function largeNav() {
  $("#navigation-large").removeClass("hide");
  $("#navigation-small").addClass("hide");
  $("#button-header").removeClass("hide");
  $("#burger").addClass("hide");
  $("#close").addClass("hide");
}
function openModal() {
  $("#burger").addClass("hide");
  $("#close").removeClass("hide");
  $("#navigation-small").removeClass("hide");
  $("body").addClass("prevent-scroll");
}
function closeModal() {
  $("#burger").removeClass("hide");
  $("#close").addClass("hide");
  $("#navigation-small").addClass("hide");
  $("body").removeClass("prevent-scroll");
}

if (w <= 768) {
  smallNav();
} else {
  largeNav();
}

$("#burger").on("click", () => {
  openModal();
});
$("#close").on("click", () => {
  closeModal();
});
$("#navigation-small").on("click", () => {
  closeModal();
});
