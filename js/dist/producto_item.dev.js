"use strict";

$(document).ready(function () {
  $(".productos_oferta_calzado .lista_producto").children("div").addClass("producto-item");
  $(".category_item").click(function () {
    var catProduct = $(this).attr("category");
    console.log(catProduct); // OCULTANDO PRODUCTOS

    $(".producto-item").css("transform", "scale(0)");

    function hideProduct() {
      $("producto-item").hide();
    }

    setTimeout(hideProduct, 400); // MOSTRANDO PRODUCTO

    function showProduct() {
      $(".producto-item[category='" + catProduct + "']").css("transform", "scale(1)");
      $(".producto-item[category='" + catProduct + "']").show();
    }

    setTimeout(showProduct, 400);
  }); // MOSTRANDO LOS PRODUCTOS NUEVAMENTE

  $(".category_item[category='all']").click(function () {
    function showAll() {
      $(".producto-item").show();
      $(".producto-item").css("transform", "scale(1)");
    }

    setTimeout(showAll, 400);
  });
});
$(".category_item").click(function () {
  var catProduct = $(this).attr("category");
  console.log(catProduct); // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO

  $(".category_item").removeClass("ct-item-active");
  $(this).addClass("ct-item-active"); //  Ocultando productos

  $(".producto-item").css("transform", "scale(0)");

  function hideProduct() {
    $(".producto-item").hide();
  }

  setTimeout(hideProduct, 400); // Mostrando productos

  function showProduct() {
    $(".producto-item[category='" + catProduct + "']").css("transform", "scale(1)");
    $(".producto-item[category='" + catProduct + "']").show();
  }

  setTimeout(showProduct, 400);
}); // MOSTRANDO NUEVAMENTE LOS PRODUCTOS

$(".category_item[category='all']").click(function () {
  function showAll() {
    $(".producto-item").show();
    $(".producto-item").css("transform", "scale(1)");
  }

  setTimeout(showAll, 400);
});