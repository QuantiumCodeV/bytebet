$(document).ready(function () {
  // Track sidebar open/closed state
  let isSidebarOpen = true;

  // Handle sidebar toggle on menu click
  $(".header_menu").click(function () {
    if (isSidebarOpen) {
      $(".sidebar").css("width", "60px");
      $(".sidebar_item_name").css("opacity", "0");
    } else {
      $(".sidebar").css("width", "200px");
      $(".sidebar_item_name").css("opacity", "1");
      $(".modal_background").fadeOut(350);
      $(".modal").fadeOut(350);
      $("body").css("overflow", "visible");
    }

    isSidebarOpen = !isSidebarOpen;
  });

  // Handle game type selection
  $(".game_select_type").click(function () {
    $(".game_select_type").removeClass("active");
    $(this).addClass("active");
    var selectedType = $(this).data("type");
    $(".game_block_blackjack").hide();
    $('.game_block_blackjack[data-type="' + selectedType + '"]').show();
  });

  // Handle casino category selection
  $(".casino_category_item").click(function () {
    $(".casino_category_item").removeClass("active");
    $(this).addClass("active");
    var selectedType = $(this).data("type");
    $(".casino_wrapper_type").hide();
    $('.casino_wrapper_type[data-type="' + selectedType + '"]').show();
  });

  // Handle settings navigation
  $(".settings_nav_item").click(function () {
    if ($(window).width() < 480) {
      $(".settings_nav_menu").hide();
      $(".profile_pages_head").hide();
      $(".settings_content").show();
    } else {
      $(".settings_nav_menu").show();
    }

    $(".settings_nav_item").removeClass("active");
    $(this).addClass("active");
    var selectedType = $(this).data("type");
    $(".setting_general").hide();
    $(".setting_general").removeClass("active");
    $('.setting_general[data-type="' + selectedType + '"]')
      .show()
      .addClass("active");
  });

  // Handle bet history tab selection
  $(".casino_bets_history_head_item").click(function () {
    $(".casino_bets_history_head_item").removeClass("active");
    $(this).addClass("active");
    var selectedType = $(this).data("type");
    $(".casino_bets_history_body").hide();
    $('.casino_bets_history_body[data-type="' + selectedType + '"]').show();
  });

  // Handle chat close button
  $(".chat_head_close").click(function () {
    if ($(".chat_wrapper").hasClass("open")) {
      $(".open_chat").removeClass("active");
      $(".chat_wrapper").removeClass("open").addClass("close");
      $("body").css("overflow", "visible");
    } else {
      $(".open_chat").addClass("active");
      $(".chat_wrapper").removeClass("close").addClass("open");
      if ($(window).width() < 1001) {
        $("body").css("overflow", "hidden");
      }
    }
  });

  // Handle chat open button
  $(".open_chat").click(function () {

    if ($(".chat_wrapper").hasClass("open")) {
      $(".open_chat").removeClass("active");
      $(".chat_wrapper").removeClass("open").addClass("close");
      $("body").css("overflow", "visible");
    } else {
      $(".open_chat").addClass("active");
      $(".chat_wrapper").removeClass("close").addClass("open");
      if ($(window).width() < 1001) {
        $("body").css("overflow", "hidden");
      }
    }
  });

  // Handle game list scroll left
  $("#scrollLeft").on("click", function () {
    const $wrapper = $("#gamesWrapper");
    $wrapper.animate(
      {
        scrollLeft: "-=" + 150,
      },
      350
    );
  });

  // Handle game list scroll right
  $("#scrollRight").on("click", function () {
    const $wrapper = $("#gamesWrapper");
    $wrapper.animate(
      {
        scrollLeft: "+=" + 150,
      },
      350
    );
  });

  // Handle login modal open
  $(".openModalLogin").click(function () {
    $(".modal").fadeOut(350);
    $(".modal_background").fadeIn(350);
    $(".modal_login").fadeIn(350);
    $("body").css("overflow", "hidden");
  });

  // Handle wallet modal open
  $(".header_wallet_btn").click(function () {
    $(".modal").fadeOut(350);
    $(".modal_background").fadeIn(350);
    $(".modal_wallet").fadeIn(350);
    $("body").css("overflow", "hidden");
  });

  // Handle registration modal open
  $(".openModalReg, .start_btn").click(function () {
    $(".modal").fadeOut(350);
    $(".modal_background").fadeIn(350);
    $(".modal_register").fadeIn(350);
    $("body").css("overflow", "hidden");
  });

  // Handle soglash modal open
  $(".openModalSogl").click(function () {
    $(".modal").fadeOut(350);
    $(".modal_background").fadeIn(350);
    $(".modal_sogl").fadeIn(350);
    $("body").css("overflow", "hidden");
  });

  // Handle modal close
  $(".modal_close").click(function () {
    $(".modal_background").fadeOut(350);
    $(".modal").fadeOut(350);
    $("body").css("overflow", "visible");
  });

  // Handle wallet currency selection
  $(".modal_wallet_monet_item").click(function () {
    $(".modal_wallet_monet_item").removeClass("active");
    $(this).addClass("active");
  });

  // Handle mobile menu toggle
  $(".openBrowse").click(function () {
    if ($(".sidebar").hasClass("active")) {
      $(".sidebar").removeClass("active");
      $(".openBrowse").removeClass("active");
      $("body").css("overflow", "visible");
    } else {
      $(".sidebar").addClass("active");
      $(".openBrowse").addClass("active");
      $("body").css("overflow", "hidden");
    }
  });

  // Mobile-specific hover handlers
  if ($(window).width() < 790) {
    $(".header_profile").hover(
      function () {
        $(".header_notify_wrapper").css("display", "flex");
        $(".header_notify_wrapper").addClass("active");
        $(".header_notifications_wrapper").hide();
        $(".header_notifications_wrapper").removeClass("active");
      },
      function () {}
    );

    $(".header_notify_wrapper").hover(
      function () {},
      function () {
        $(".header_notify_wrapper").fadeOut(350);
        $(".header_notify_wrapper").removeClass("active");
      }
    );

    $(".header_notify").hover(
      function () {
        $(".header_notifications_wrapper").css("display", "block");
        $(".header_notifications_wrapper").addClass("active");
        $(".header_notify_wrapper").hide();
        $(".header_notify_wrapper").removeClass("active");
      },
      function () {}
    );

    $(".header_notifications_wrapper").hover(
      function () {},
      function () {
        $(".header_notifications_wrapper").fadeOut(350);
        $(".header_notifications_wrapper").removeClass("active");
      }
    );
  }

  // Handle blackjack settings toggle
  $(".blackjack_settings").click(function () {
    if ($(".blackjack_game_footer_settings_wrapper").is(":visible")) {
      $(".blackjack_game_footer_settings_wrapper").fadeOut(350);
    } else {
      $(".blackjack_game_footer_settings_wrapper").fadeIn(350);
      $(".blackjack_livestats_wrapper").fadeOut(350);
    }
  });

  // Handle profile menu toggle
  $(".header_profile").click(function () {
    if ($(".header_notify_wrapper").is(":visible")) {
      $(".header_notify_wrapper").fadeOut(350);
      setTimeout(() => {
        $(".header_notify_wrapper").css("display", "none");
      }, 350);
    } else {
      if ($(".header_notifications_wrapper").is(":visible")) {
        $(".header_notifications_wrapper").fadeOut(350);
      }
      $(".header_notify_wrapper").fadeIn(350);
      $(".header_notify_wrapper").css("display", "flex");
    }
  });

  // Handle notifications toggle
  $(".header_notify").click(function () {
    if ($(".header_notifications_wrapper").is(":visible")) {
      $(".header_notifications_wrapper").fadeOut(350);
    } else {
      if ($(".header_notify_wrapper").is(":visible")) {
        $(".header_notify_wrapper").fadeOut(350);
      }
      $(".header_notifications_wrapper").fadeIn(350);
    }
  });

  // Handle notifications close
  $(".header_notifications_header_close").click(function () {
    $(".header_notifications_wrapper").removeClass("active");
    $(".header_notifications_wrapper").fadeOut(350);
  });

  // Handle blackjack live stats toggle
  $(".blackjack_livestats").click(function () {
    if ($(".blackjack_livestats_wrapper").is(":visible")) {
      $(".blackjack_livestats_wrapper").fadeOut(350);
    } else {
      $(".blackjack_livestats_wrapper").fadeIn(350);
      $(".blackjack_game_footer_settings_wrapper").hide();
      $(".blackjack_game_footer_settings_wrapper").removeClass("active");
    }
  });

  // Handle blackjack live stats close
  $(".blackjack_livestats_header_close").click(function () {
    $(".blackjack_livestats_wrapper").fadeOut(350);
    $(".blackjack_livestats_wrapper").addClass("active");
  });
});
