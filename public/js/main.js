var ajax = function(event) {
  event.preventDefault();
  $.ajax("/route/", {
      type: "DELETE",
      data: {
        orderid: orderid
      }
    })
    .done(onSuccess)
    .error(onError);
};

$("div#feed").on("click", "button.delete", eventhandler);
