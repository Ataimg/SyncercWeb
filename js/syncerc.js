!(function ($) {
      "use strict";
      var a,
          mb,
          last_scroll_position,
          rtl_mode = "off",
          preloader = "on",
          header_autoshow = "off",
          mobile_menu_show = 0,
          v_count = "0",
          instances = [],
          $window = $(window),
          $op_header_autoshow = 0,
          grid_size = 10,
          new_scroll_position = 0,
          header = $("header");
      function header_sticky() {
          jQuery("header").addClass("clone", 1e3, "easeOutBounce");
          var e = $(document),
              t = 0,
              i = jQuery("header.autoshow");
          e.scrollTop() >= 50 && 0 === t ? (i.removeClass("scrollOff"), i.addClass("scrollOn"), i.css("height", "auto"), (t = 1)) : (i.removeClass("scrollOn"), i.addClass("scrollOff"), (t = 0));
      }
      function load_magnificPopup() {
          jQuery(".simple-ajax-popup-align-top").magnificPopup({ type: "ajax", alignTop: !0, overflowY: "scroll" }),
              jQuery(".simple-ajax-popup").magnificPopup({ type: "ajax" }),
              jQuery(".zoom-gallery").magnificPopup({
                  delegate: "a",
                  type: "image",
                  closeOnContentClick: !1,
                  closeBtnInside: !1,
                  mainClass: "mfp-with-zoom mfp-img-mobile",
                  image: {
                      verticalFit: !0,
                      titleSrc: function (e) {
                          return e.el.attr("title");
                      },
                  },
                  gallery: { enabled: !0 },
                  zoom: {
                      enabled: !0,
                      duration: 300,
                      opener: function (e) {
                          return e.find("img");
                      },
                  },
              }),
              jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
              $(".image-popup").magnificPopup({
                  type: "image",
                  mainClass: "mfp-with-zoom",
                  zoom: {
                      enabled: !0,
                      duration: 300,
                      easing: "ease-in-out",
                      opener: function (e) {
                          return e.is("img") ? e : e.find("img");
                      },
                  },
              }),
              $(".image-popup-vertical-fit").magnificPopup({ type: "image", closeOnContentClick: !0, mainClass: "mfp-img-mobile", image: { verticalFit: !0 } }),
              $(".image-popup-fit-width").magnificPopup({ type: "image", closeOnContentClick: !0, image: { verticalFit: !1 } }),
              $(".image-popup-no-margins").magnificPopup({
                  type: "image",
                  closeOnContentClick: !0,
                  closeBtnInside: !1,
                  fixedContentPos: !0,
                  mainClass: "mfp-no-margins mfp-with-zoom",
                  image: { verticalFit: !0 },
                  zoom: { enabled: !0, duration: 300 },
              }),
              $(".image-popup-gallery").magnificPopup({
                  type: "image",
                  closeOnContentClick: !1,
                  closeBtnInside: !1,
                  mainClass: "mfp-with-zoom mfp-img-mobile",
                  image: {
                      verticalFit: !0,
                      titleSrc: function (e) {
                          return e.el.attr("title");
                      },
                  },
                  gallery: { enabled: !0 },
              }),
              $(".images-group").each(function () {
                  $(this).magnificPopup({ delegate: "a", type: "image", gallery: { enabled: !0 } });
              }),
              $(".images-popup").magnificPopup({ delegate: "a", type: "image" });
      }
      function init_resize() {
          enquire.register("screen and (min-width: 993px)", {
              match: function () {
                  mobile_menu_show = 1;
              },
              unmatch: function () {
                  (mobile_menu_show = 0), jQuery("#menu-btn").show();
              },
          }),
              init(),
              video_autosize();
          var e = $("header");
          e.removeClass("smaller"), e.removeClass("logo-smaller"), e.removeClass("clone");
          var t = window.matchMedia("(max-width: 992px)"),
              i = jQuery(".owl-slide-wrapper");
          t.matches
              ? (i.find("img").css("height", $(window).innerHeight()), i.find("img").css("width", "auto"), 1 === $op_header_autoshow && e.removeClass("autoshow"))
              : (i.find("img").css("width", "100%"), i.find("img").css("height", "auto"), 1 === $op_header_autoshow && e.addClass("autoshow"));
      }
      function load_owl() {
          jQuery("#items-carousel").owlCarousel({
              center: !1,
              items: 4,
              rewind: !0,
              margin: 25,
              nav: !0,
              navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
              dots: !1,
              responsive: { 1e3: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } },
          }),
              jQuery("#item-carousel-big").owlCarousel({ center: !0, loop: !0, margin: 0, nav: !1, dots: !1, responsive: { 1e3: { items: 4 }, 600: { items: 2 }, 0: { items: 2 } } }),
              jQuery("#slider-carousel").owlCarousel({ loop: !0, items: 1, dots: !1, thumbs: !0, thumbImage: !0, thumbContainerClass: "owl-thumbs", thumbItemClass: "owl-thumb-item" }),
              jQuery("#item-carousel-big").owlCarousel({ loop: !0, margin: 25, nav: !1, dots: !1, responsive: { 1e3: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } } });
          var e = $("#item-carousel-big");
          e.owlCarousel(),
              $(".d-carousel .d-arrow-right").on("click", function () {
                  e.trigger("next.owl.carousel");
              }),
              $(".d-carousel .d-arrow-left").on("click", function () {
                  e.trigger("prev.owl.carousel");
              });
          var t = $("#item-carousel-big-type-2");
          t.owlCarousel(),
              $(".d-carousel .d-arrow-right").on("click", function () {
                  t.trigger("next.owl.carousel");
              }),
              $(".d-carousel .d-arrow-left").on("click", function () {
                  t.trigger("prev.owl.carousel");
              }),
              jQuery(".rtl #testimonial-carousel").owlCarousel({ center: !1, loop: !0, margin: 30, rtl: !0, responsive: { 1e3: { items: 3 }, 600: { items: 1 }, 0: { items: 1 } } }),
              jQuery("#testimonial-carousel").owlCarousel({ center: !0, loop: !0, margin: 20, responsive: { 1e3: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } } }),
              jQuery("#testimonial-carousel-v2").owlCarousel({ center: !1, loop: !0, margin: 25, responsive: { 1e3: { items: 4 }, 767: { items: 2 }, 480: { items: 1 }, 0: { items: 1 } } }),
              jQuery("#thumbnail-carousel").owlCarousel({ center: !1, loop: !0, margin: 25, responsive: { 1e3: { items: 3 }, 767: { items: 2 }, 480: { items: 1 }, 0: { items: 1 } } }),
              jQuery("#testimonial-carousel-1-col").owlCarousel({ center: !1, loop: !0, margin: 30, responsive: { 1e3: { items: 1 }, 600: { items: 1 }, 0: { items: 1 } } }),
              jQuery("#blog-carousel").owlCarousel({ center: !1, items: 3, loop: !0, margin: 25, responsive: { 1e3: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } } }),
              jQuery("#owl-logo").owlCarousel({ center: !1, items: 6, loop: !0, dots: !1, margin: 25, autoplay: !0, autoplayTimeout: 2e3, responsive: { 1e3: { items: 6 }, 600: { items: 4 }, 0: { items: 2 } } }),
              jQuery("#owl-logo-small").owlCarousel({ center: !1, items: 4, loop: !0, dots: !1, margin: 10, autoplay: !0, autoplayTimeout: 2e3, responsive: { 1e3: { items: 4 }, 600: { items: 3 }, 0: { items: 2 } } }),
              jQuery(".project-carousel-4-nav").owlCarousel({ center: !0, items: 4, loop: !0, margin: 15, responsive: { 1e3: { items: 4 }, 600: { items: 3 }, 0: { items: 1 } } }),
              jQuery("#owl-features").owlCarousel({ center: !0, items: 4, loop: !0, dots: !0, margin: 25, autoplay: !1, autoplayTimeout: 0, responsive: { 1e3: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } } }),
              $(".next").on("click", function () {
                  $(this).parent().parent().find(".blog-slide").trigger("owl.next");
              }),
              $(".prev").on("click", function () {
                  $(this).parent().parent().find(".blog-slide").trigger("owl.prev");
              }),
              jQuery(".owl-custom-nav").each(function () {
                  var e = $(".owl-custom-nav").next(),
                      t = parseInt(e.css("height"), 10);
                  $(this).css("margin-top", t / 2 - 25),
                      e.owlCarousel(),
                      $(".btn-next").on("click", function () {
                          e.trigger("owl.next");
                      }),
                      $(".btn-prev").on("click", function () {
                          e.trigger("owl.prev");
                      });
              });
          var i = $("#custom-owl-slider"),
              s = $(".owl-slider-nav"),
              a = $(window).innerHeight();
          s.css("top", a / 2 - 25),
              i.owlCarousel(),
              s.find(".next").on("click", function () {
                  i.trigger("owl.next");
              }),
              s.find(".prev").on("click", function () {
                  i.trigger("owl.prev");
              }),
              jQuery(".owl-slide-wrapper")
                  .on("mouseenter", function () {
                      s.find(".next").css("right", "40px"), s.find(".prev").css("left", "40px");
                  })
                  .on("mouseleave", function () {
                      s.find(".next").css("right", "-50px"), s.find(".prev").css("left", "-50px");
                  });
      }
      function filter_gallery() {
          var e = jQuery("#gallery");
          e.isotope({ itemSelector: ".item", filter: "*" }),
              jQuery("#filters a").on("click", function () {
                  var t = jQuery(this);
                  if (t.hasClass("selected")) return !1;
                  t.parents().find(".selected").removeClass("selected"), t.addClass("selected");
                  var i = jQuery(this).attr("data-filter");
                  return e.isotope({ filter: i }), !1;
              });
      }
      function masonry() {
          var e = jQuery(".masonry");
          e.isotope({ itemSelector: ".item" }),
              jQuery("#filters a").on("click", function () {
                  var t = jQuery(this);
                  if (t.hasClass("selected")) return !1;
                  t.parents().find(".selected").removeClass("selected"), t.addClass("selected");
                  var i = jQuery(this).attr("data-filter");
                  return e.isotope({ filter: i }), !1;
              });
      }
      (a = jQuery).fn.fitVids = function (e) {
          var t = { customSelector: null },
              i = document.createElement("div"),
              s = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
          return (
              (i.className = "fit-vids-style"),
              (i.innerHTML =
                  "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>"),
              s.parentNode.insertBefore(i, s),
              e && a.extend(t, e),
              this.each(function () {
                  var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
                  t.customSelector && e.push(t.customSelector),
                      a(this)
                          .find(e.join(","))
                          .each(function () {
                              var e = a(this);
                              if (!(("embed" === this.tagName.toLowerCase() && e.parent("object").length) || e.parent(".fluid-width-video-wrapper").length)) {
                                  var t,
                                      i = ("object" === this.tagName.toLowerCase() || e.attr("height") ? e.attr("height") : e.height()) / (e.attr("width") ? e.attr("width") : e.width());
                                  if (!e.attr("id")) {
                                      var s = "fitvid" + Math.floor(999999 * Math.random());
                                      e.attr("id", s);
                                  }
                                  e
                                      .wrap('<div class="fluid-width-video-wrapper"></div>')
                                      .parent(".fluid-width-video-wrapper")
                                      .css("padding-top", 100 * i + "%"),
                                      e.removeAttr("height").removeAttr("width");
                              }
                          });
              })
          );
      };
      var scrollTrigger = 100,
          t = 0;
      function backToTop() {
          var e = $(window).scrollTop();
          e > scrollTrigger && ($("#back-to-top").addClass("show"), $("#back-to-top").removeClass("hide"), $(".show-on-scroll").addClass("show"), $(".show-on-scroll").removeClass("hide"), (t = 1)),
              e < scrollTrigger && 1 === t && ($("#back-to-top").addClass("hide"), $(".show-on-scroll").addClass("hide")),
              $("#back-to-top").on("click", function (e) {
                  e.preventDefault(), $("html,body").stop(!0).animate({ scrollTop: 0 }, 700);
              });
      }
      function de_counter() {
          jQuery(".timer").each(function () {
              var e = jQuery(this).offset().top,
                  t = jQuery(window).scrollTop();
              e < t + jQuery(window).height() &&
                  "0" === v_count &&
                  jQuery(function (e) {
                      jQuery(".timer").each(t);
                      function t(t) {
                          v_count = "1";
                          var i = jQuery(this);
                          (t = e.extend({}, t || {}, i.data("countToOptions") || {})), i.countTo(t);
                      }
                  });
          });
      }
      function text_rotate() {
          var e = $(".text-rotate-wrap .text-item"),
              t = -1;
          function i() {
              ++t,
                  e
                      .eq(t % e.length)
                      .fadeIn(1)
                      .delay(1500)
                      .fadeOut(1, i);
          }
          i();
      }
      function custom_bg() {
          $("body,div,section,span,form,img").css("background-color", function () {
              return $(this).is("[data-bgcolor]") && jQuery(this).addClass("bgcustom"), jQuery(this).data("bgcolor");
          }),
              $("body,div,section").css("background", function () {
                  return $(this).is("[data-bgimage]") && jQuery(this).addClass("bgcustom"), jQuery(this).data("bgimage");
              }),
              $("body,div,section").css("background-size", function () {
                  return "cover";
              }),
              $("body,div,section").css("background-repeat", function () {
                  return "no-repeat";
              });
      }
      function custom_elements() {
          jQuery(".de_tab").find(".de_tab_content > div").hide(),
              jQuery(".de_tab").find(".de_tab_content > div:first").show(),
              jQuery("li").find(".v-border").fadeTo(150, 0),
              jQuery("li.active").find(".v-border").fadeTo(150, 1),
              jQuery(".de_nav li").on("click", function () {
                  jQuery(this).parent().find("li").removeClass("active"), jQuery(this).addClass("active"), jQuery(this).parent().parent().find(".v-border").fadeTo(150, 0), jQuery(this).parent().parent().find(".de_tab_content > div").hide();
                  var e = jQuery(this).index();
                  jQuery(this)
                      .parent()
                      .parent()
                      .find(".de_tab_content > div:eq(" + e + ")")
                      .fadeIn(),
                      jQuery(this).find(".v-border").fadeTo(150, 1);
              });
          var e = 1;
          jQuery("#request_form .btn-right").on("click", function () {
              var t = $("#rq_name").val(),
                  i = $("#rq_email").val(),
                  s = $("#rq_phone").val();
              1 === e &&
                  (0 === t.length ? $("#rq_name").addClass("error_input") : $("#rq_name").removeClass("error_input"),
                  0 === i.length ? $("#rq_email").addClass("error_input") : $("#rq_email").removeClass("error_input"),
                  0 === s.length ? $("#rq_phone").addClass("error_input") : $("#rq_phone").removeClass("error_input")),
                  0 === t.length && 0 === i.length && 0 === s.length && (jQuery("#rq_step_1").hide(), jQuery("#rq_step_2").fadeIn());
          }),
              jQuery(".de_review").find(".de_tab_content > div").hide(),
              jQuery(".de_review").find(".de_tab_content > div:first").show(),
              jQuery(".de_review").find(".de_nav li:first").fadeTo(150, 1),
              jQuery(".de_nav li").on("click", function () {
                  jQuery(this).parent().find("li").removeClass("active"), jQuery(this).addClass("active"), jQuery(this).fadeTo(150, 1), jQuery(this).parent().parent().find(".de_tab_content > div").hide();
                  var e = jQuery(this).index();
                  jQuery(this)
                      .parent()
                      .parent()
                      .find(".de_tab_content > div:eq(" + e + ")")
                      .show();
              }),
              jQuery(".toggle-list h2").addClass("acc_active"),
              jQuery(".toggle-list h2").toggle(
                  function () {
                      jQuery(this).addClass("acc_noactive"), jQuery(this).next(".ac-content").slideToggle(200);
                  },
                  function () {
                      jQuery(this).removeClass("acc_noactive").addClass("acc_active"), jQuery(this).next(".ac-content").slideToggle(200);
                  }
              ),
              jQuery(".expand-custom .toggle").on("click", function () {
                  jQuery(this).stop().toggleClass("clicked"), jQuery(this).stop().parent().parent().parent().find(".details").slideToggle(500);
              });
      }
      function video_autosize() {
          jQuery(".de-video-container").each(function () {
              var e = jQuery(this).css("height"),
                  t = jQuery(this).find(".de-video-content").css("height"),
                  i = (e.substring(0, e.length - 2) - t.substring(0, t.length - 2)) / 2;
              jQuery(this).find(".de-video-overlay").css("height", e), jQuery(this).find(".de-video-content").animate({ "margin-top": i }, "fast");
          });
      }
      function center_xy() {
          jQuery(".center-xy").each(function () {
              jQuery(this)
                  .parent()
                  .find("img")
                  .on("load", function () {
                      var e = parseInt(jQuery(this).parent().find(".center-xy").css("width"), 10),
                          t = parseInt(jQuery(this).parent().find(".center-xy").css("height"), 10),
                          i = jQuery(this).css("width"),
                          s = jQuery(this).css("height"),
                          a = jQuery(this).parent();
                      a.find(".center-xy").css("left", parseInt(i, 10) / 2 - e / 2), a.find(".center-xy").css("top", parseInt(s, 10) / 2 - t / 2), a.find(".bg-overlay").css("width", i), a.find(".bg-overlay").css("height", s);
                  })
                  .each(function () {
                      this.complete && $(this).load();
                  });
          });
      }
      function menu_arrow() {
          jQuery("#mainmenu li a").each(function () {
              $(this).next("ul").length > 0 && $("<span></span>").insertAfter($(this));
          }),
              jQuery("#mainmenu > li > span").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  switch (e) {
                      case 1:
                          $(this).addClass("active"), $(this).parent().find("ul:first").css("height", "auto");
                          var t = $(this).parent().find("ul:first").height();
                          $(this).parent().find("ul:first").css("height", "0"), $(this).parent().find("ul:first").animate({ height: t }, 300, "easeOutQuint");
                          break;
                      case 2:
                          var t = $(this).parent().find("ul:first").height();
                          $(this).removeClass("active"), $(this).parent().find("ul:first").animate({ height: "0" }, 300, "easeOutQuint");
                  }
                  ++e > 2 && (e = 1), $(this).data("iteration", e);
              }),
              jQuery("#mainmenu > li > ul > li > span").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  switch (e) {
                      case 1:
                          $(this).addClass("active"), $(this).parent().find("ul:first").css("height", "auto"), $(this).parent().parent().parent().find("ul:first").css("height", "auto");
                          var t = $(this).parent().find("ul:first").height();
                          $(this).parent().find("ul:first").css("height", "0"), $(this).parent().find("ul:first").animate({ height: t }, 400, "easeInOutQuint");
                          break;
                      case 2:
                          $(this).removeClass("active"), $(this).parent().find("ul:first").animate({ height: "0" }, 400, "easeInOutQuint");
                  }
                  ++e > 2 && (e = 1), $(this).data("iteration", e);
              }),
              jQuery(".de-country .d-title").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  switch (e) {
                      case 1:
                          jQuery(this).parent().addClass("expand");
                          break;
                      case 2:
                          jQuery(this).parent().removeClass("expand");
                  }
                  ++e > 2 && (e = 1), $(this).data("iteration", e);
              }),
              jQuery("#de-click-menu-profile").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  switch (e) {
                      case 1:
                          $("#de-submenu-profile").show(),
                              $("#de-submenu-profile").addClass("open"),
                              $("#de-submenu-notification").removeClass("open"),
                              $("#de-submenu-notification").hide(),
                              $("#de-click-menu-notification").data("iteration", 1);
                          break;
                      case 2:
                          $("#de-submenu-profile").removeClass("open"), $("#de-submenu-profile").hide();
                  }
                  ++e > 2 && (e = 1), $(this).data("iteration", e);
              }),
              jQuery("#de-click-menu-notification").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  switch (e) {
                      case 1:
                          $("#de-submenu-notification").show(), $("#de-submenu-notification").addClass("open"), $("#de-submenu-profile").removeClass("open"), $("#de-submenu-profile").hide(), $("#de-click-menu-profile").data("iteration", 1);
                          break;
                      case 2:
                          $("#de-submenu-notification").removeClass("open"), $("#de-submenu-notification").hide();
                  }
                  ++e > 2 && (e = 1), $(this).data("iteration", e);
              });
      }
      function sequence() {
          var e = jQuery(".sequence > .gallery-item .de-item,.sequence > .gallery-item .d_demo_img"),
              t = e.length;
          e.addClass("fadeInRight"), e.find("img").addClass("slideInUp");
          for (var i = 0; i <= t; i++) {
              var s = jQuery(".sequence > .gallery-item:eq(" + i + ") .de-item");
              s.attr("data-wow-delay", i / 8 + "s"), s.find("img").attr("data-wow-delay", i / 16 + "s");
          }
      }
      function sequence_a() {
          var e = jQuery(".sequence").find(".sq-item"),
              t = e.length;
          e.addClass("fadeInUp");
          for (var i = 0; i <= t; i++) {
              var s = jQuery(".sequence").find(".sq-item:eq(" + i + ")");
              s.attr("data-wow-delay", i / 8 + "s"), s.attr("data-wow-speed", "1s");
          }
      }
      function moveItItemNow() {
          var e = $window.scrollTop();
          instances.forEach(function (t) {
              t.update(e);
          });
      }
      function moveItItem(e) {
          (this.el = $(e)), (this.speed = parseInt(this.el.attr("data-scroll-speed")));
      }
      function init() {
          var e = jQuery("#de-sidebar").css("height"),
              t = jQuery(window).innerHeight(),
              i = parseInt(e) - parseInt(t);
          function s() {
              var s = window.matchMedia("(min-width: 993px)");
              if ((window.matchMedia("(min-width: 768px)"), s.matches)) {
                  var a = window.pageYOffset || document.documentElement.scrollTop,
                      n = 0,
                      o = jQuery("header");
                  a > n ? o.addClass("smaller") : o.hasClass("smaller") && o.removeClass("smaller");
              }
              s.matches &&
                  jQuery("header").hasClass("side-header") &&
                  (jQuery(document).scrollTop() >= i
                      ? (jQuery("#de-sidebar").css("position", "fixed"),
                        parseInt(e) > parseInt(t) && jQuery("#de-sidebar").css("top", -i),
                        jQuery("#main").addClass("col-md-offset-3"),
                        jQuery("h1#logo img").css("padding-left", "7px"),
                        jQuery("header .h-content").css("padding-left", "7px"),
                        jQuery("#mainmenu li").css("width", "103%"))
                      : (jQuery("#de-sidebar").css("position", "relative"),
                        parseInt(e) > parseInt(t) && jQuery("#de-sidebar").css("top", 0),
                        jQuery("#main").removeClass("col-md-offset-3"),
                        jQuery("h1#logo img").css("padding-left", "0px"),
                        jQuery("header .h-content").css("padding-left", "0px"),
                        jQuery("#mainmenu li").css("width", "100%")));
          }
          s(),
              jQuery(".activity-filter > li").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  1 === e &&
                      (jQuery(".activity-list > li").hide(),
                      jQuery(this).hasClass("filter_by_followings")
                          ? jQuery("li.act_follow").show()
                          : jQuery(this).hasClass("filter_by_sales")
                          ? jQuery("li.act_sale").show()
                          : jQuery(this).hasClass("filter_by_offers")
                          ? jQuery("li.act_offer").show()
                          : jQuery(this).hasClass("filter_by_likes") && jQuery("li.act_like").show(),
                      jQuery(".activity-filter > li").removeClass("active"),
                      jQuery(this).addClass("active")),
                      ++e > 2 && (e = 1),
                      $(this).data("iteration", e);
              }),
              jQuery(".filter__r").on("click", function () {
                  jQuery(".activity-filter > li").removeClass("active"), jQuery(".activity-list > li").show();
              }),
              jQuery(".btn-close").on("click", function () {
                  var e = $(this).data("iteration") || 1;
                  1 === e && (jQuery("#popup-box").addClass("popup-hide"), jQuery("#popup-box").removeClass("popup-show")), ++e > 2 && (e = 1), $(this).data("iteration", e);
              });
      }
      function f_rtl() {
          jQuery("#selector #demo-rtl").on("click", function () {
              var e = $(this).data("iteration") || 1;
              switch (e) {
                  case 1:
                      jQuery("body").addClass("rtl"),
                          jQuery("#bootstrap").attr("href", "css/bootstrap.rtl.min.css"),
                          jQuery("#bootstrap-grid").attr("href", "css/bootstrap-grid.rtl.min.css"),
                          jQuery("#bootstrap-reboot").attr("href", "css/bootstrap-reboot.rtl.min.css"),
                          jQuery("#mdb").attr("href", "css/mdb.rtl.min.css"),
                          jQuery("html").attr("dir", "rtl"),
                          jQuery(this).find(".sc-val").text("Click to Disable");
                      break;
                  case 2:
                      jQuery("body").removeClass("rtl"),
                          jQuery("#bootstrap").attr("href", "css/bootstrap.min.css"),
                          jQuery("#bootstrap-grid").attr("href", "css/bootstrap-grid.min.css"),
                          jQuery("#bootstrap-reboot").attr("href", "css/bootstrap-reboot.min.css"),
                          jQuery("#mdb").attr("href", "css/mdb.min.css"),
                          jQuery("html").attr("dir", "ltr"),
                          jQuery(this).find(".sc-val").text("Click to Enable");
              }
              ++e > 2 && (e = 1), $(this).data("iteration", e);
          });
      }
      function grid_gallery() {
          jQuery(".grid-item").each(function () {
              var this_col = Number(jQuery(this).parent().attr("data-col")),
                  this_gridspace = Number(jQuery(this).parent().attr("data-gridspace")),
                  this_ratio = eval($(this).parent().attr("data-ratio"));
              jQuery(this).parent().css("padding-left", this_gridspace);
              var w = ($(document).width() - (this_gridspace * this_col + 1)) / this_col - this_gridspace / this_col,
                  gi = $(this),
                  h = w * this_ratio;
              gi.css("width", w),
                  gi.css("height", h),
                  gi.find(".pf_title").css("margin-top", h / 2 - 10),
                  gi.css("margin-right", this_gridspace),
                  gi.css("margin-bottom", this_gridspace),
                  $(this).parent().css("padding-top", this_gridspace),
                  gi.hasClass("large") && ($(this).css("width", 2 * w + this_gridspace), $(this).css("height", 2 * h + this_gridspace)),
                  gi.hasClass("large-width") && ($(this).css("width", 2 * w + this_gridspace), $(this).css("height", h)),
                  gi.hasClass("large-height") && ($(this).css("height", 2 * h + this_gridspace), gi.find(".pf_title").css("margin-top", h - 20));
          });
      }
      function centerY() {
          jQuery(".full-height").each(function () {
              var e = jQuery(window).innerHeight();
              jQuery(this).css("min-height", e);
          });
      }
      function de_progress() {
          jQuery(".de-progress").each(function () {
              var e = jQuery(this).offset().top,
                  t = jQuery(this).find(".progress-bar").attr("data-value"),
                  i = jQuery(window).scrollTop();
              e < i + 550 && jQuery(this).find(".progress-bar").css({ width: t }, "slow"), jQuery(this).find(".value").text(jQuery(this).find(".progress-bar").attr("data-value"));
          });
      }
      function de_countdown() {
          $(".de_countdown").each(function () {
              var e = $(this).data("year"),
                  t = $(this).data("month"),
                  i = $(this).data("day"),
                  s = $(this).data("hour");
              $(this).countdown({ until: new Date(e, t - 1, i, s) });
          });
      }
      function copyText(e) {
          var t = jQuery(e).text(),
              i = jQuery("#btn_copy");
          navigator.clipboard.writeText(t).then(
              function () {
                  var e = i.text();
                  i.html("Copied!"),
                      i.addClass("clicked"),
                      setTimeout(function () {
                          i.html(e), i.removeClass("clicked");
                      }, 750);
              },
              function () {
                  i.html("Error");
              }
          );
      }
      function dropdown(e) {
          var t = $(e + ".dropdown"),
              i = t.find(".btn-selector"),
              s = t.find("ul"),
              a = s.find("li");
          t
              .on("mouseenter", function () {
                  s.show();
              })
              .on("mouseleave", function () {
                  s.hide();
              }),
              a.on("click", function () {
                  s.hide();
                  var e = $(this).text();
                  a.removeClass("active"), $(this).addClass("active"), i.text(e);
              });
      }
      function de_sidebar() {
          enquire.register("screen and (min-width: 993px)", {
              match: function () {
                  $(".sidebar_inner").length && $(".sidebar_inner").sticky({ top: 130, bottom: 20, stopOn: "footer", disableOn: 993 }),
                      $("#search_location").length && $("#search_location").sticky({ top: 130, bottom: 20, stopOn: "footer", disableOn: 993 });
              },
          });
      }
      function de_share() {
          var e = window.location.href;
          $(".fa-twitter").on("click", function () {
              window.open("https://twitter.com/share?url=" + e, "_blank");
          }),
              $(".fa-facebook").on("click", function () {
                  window.open("https://www.facebook.com/sharer/sharer.php?u=" + e, "_blank");
              }),
              $(".fa-reddit").on("click", function () {
                  window.open("http://www.reddit.com/submit?url=" + e, "_blank");
              }),
              $(".fa-linkedin").on("click", function () {
                  window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + e, "_blank");
              }),
              $(".fa-pinterest").on("click", function () {
                  window.open("https://www.pinterest.com/pin/create/button/?url=" + e, "_blank");
              }),
              $(".fa-stumbleupon").on("click", function () {
                  window.open("http://www.stumbleupon.com/submit?url=" + e, "_blank");
              }),
              $(".fa-delicious").on("click", function () {
                  window.open("https://delicious.com/save?v=5&noui&jump=close&url=" + e, "_blank");
              }),
              $(".fa-envelope").on("click", function () {
                  window.open("mailto:?subject=Share With Friends&body=" + e, "_blank");
              });
      }
      /*!
       * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
       * Scroll smooth to any element in your DOM.
       *
       * Copyright (c) 2012 Yannick Albert (http://yckart.com)
       * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
       * 2013/02/17
       **/ ($.scrollTo = $.fn.scrollTo = function (e, t, i) {
          return this instanceof $
              ? ((i = $.extend({}, { gap: { x: 0, y: 0 }, animation: { easing: "easeInOutExpo", duration: 600, complete: $.noop, step: $.noop } }, i)),
                this.each(function () {
                    if (jQuery("body").hasClass("side-layout")) var s = 0;
                    else var s = 69;
                    $(this)
                        .stop()
                        .animate({ scrollLeft: isNaN(Number(e)) ? $(t).offset().left + i.gap.x : e, scrollTop: isNaN(Number(t)) ? $(t).offset().top + i.gap.y - s : t }, i.animation);
                }))
              : $.fn.scrollTo.apply($("html, body"), arguments);
      }),
          ($.fn.moveIt = function () {
              $(this).each(function () {
                  instances.push(new moveItItem($(this)));
              });
          }),
          (moveItItem.prototype.update = function (e) {
              var t = e / this.speed;
              this.el.css("transform", "translateY(" + t + "px)");
          }),
          $(function () {
              $("[data-scroll-speed]").moveIt();
          }),
          "on" === rtl_mode &&
              (jQuery("body").addClass("rtl"),
              jQuery("#bootstrap").attr("href", "css/bootstrap.rtl.min.css"),
              jQuery("#bootstrap-grid").attr("href", "css/bootstrap-grid.rtl.min.css"),
              jQuery("#bootstrap-reboot").attr("href", "css/bootstrap-reboot.rtl.min.css"),
              jQuery("#mdb").attr("href", "css/mdb.rtl.min.css"),
              jQuery("html").attr("dir", "rtl")),
          "off" === preloader && jQuery("#de-loader").hide(),
          jQuery("#dark-mode").on("click", function () {
              jQuery("body").hasClass("dark-scheme") ? (window.location.href = "https://www. .com/themes/gospace/index.html") : (window.location.href = "https://www. .com/themes/gospace/02_dark-index.html");
          }),
          $('input[type="range"]').rangeslider({
              polyfill: !1,
              rangeClass: "rangeslider",
              disabledClass: "rangeslider--disabled",
              horizontalClass: "rangeslider--horizontal",
              fillClass: "rangeslider__fill",
              handleClass: "rangeslider__handle",
              onInit: function () {
                  var e = this.$range,
                      t = e.find(".rangeslider__handle"),
                      i = '<div class="rangeslider__handle__value">' + this.value + "</div>";
                  t.append(i);
                  var s = this.$element.attr("labels");
                  (s = s.split(", ")),
                      e.append('<div class="rangeslider__labels"></div>'),
                      $(s).each(function (t, i) {
                          e.find(".rangeslider__labels").append('<span class="rangeslider__labels__label">' + i + "</span>");
                      });
              },
              onSlide: function (e, t) {
                  this.$range.find(".rangeslider__handle__value").text(this.value);
              },
              onSlideEnd: function (e, t) {},
          }),
          $(function () {
              $("#de-loader ").prepend($('<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>')),
                  f_rtl(),
                  load_magnificPopup(),
                  center_xy(),
                  grid_gallery(),
                  init_resize(),
                  de_progress(),
                  de_countdown(),
                  dropdown("#item_category"),
                  dropdown("#item_collection"),
                  dropdown("#buy_category"),
                  dropdown("#items_type"),
                  dropdown("#filter_by_duration"),
                  dropdown("#filter_by_category"),
                  de_sidebar(),
                  de_share(),
                  $(".jarallax").jarallax(),
                  $(function () {
                      $(".lazy").lazy();
                  }),
                  $(".opt-2").css("display", "none"),
                  $("#sw-1").on("click", function () {
                      $(this).is(":checked") ? ($(".opt-1").css("display", "none"), $(".opt-2").css("display", "inline-block")) : ($(".opt-2").css("display", "none"), $(".opt-1").css("display", "inline-block"));
                  }),
                  $(".d-minus").on("click", function () {
                      var e = $(this).parent().find("input"),
                          t = parseInt(e.val()) - 1;
                      return (t = t < 0 ? 0 : t), e.val(t), e.change(), !1;
                  }),
                  $(".d-plus").on("click", function () {
                      var e = $(this).parent().find("input"),
                          t = parseInt(e.val()) + 1;
                      return (t = t > 10 ? 10 : t), e.val(t), e.change(), !1;
                  });
              var e = jQuery(window).innerHeight();
              function t(e) {
                  return e.id ? $('<span><img src="' + $(e.element).attr("data-src") + '" class="img-flag" /> ' + e.text + "</span>") : e.text;
              }
              jQuery("#homepage #content.content-overlay").css("margin-top", e),
                  jQuery(".full-height .de-video-container").css("min-height", e),
                  jQuery("header").hasClass("autoshow") && ($op_header_autoshow = 1),
                  jQuery("#btn_copy").on("click", function () {
                      copyText("#wallet");
                  }),
                  $("#mainmenu > li:has(ul)").addClass("menu-item-has-children"),
                  $(".d-item").slice(0, 8).show(),
                  $("#loadmore").on("click", function (e) {
                      e.preventDefault(), $(".d-item:hidden").slice(0, 4).slideDown(), 0 === $(".d-item:hidden").length && $("#loadmore").hide();
                  }),
                  centerY(),
                  $("#mainmenu li:has(ul)").addClass("has-child"),
                  [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
                      return new bootstrap.Tooltip(e);
                  }),
                  [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (e) {
                      return new bootstrap.Popover(e);
                  }),
                  $("a.btn-main").each(function () {
                      var e = jQuery(this).text();
                      jQuery(this).attr("data-hover", e);
                  }),
                  jQuery(".blog-list")
                      .on("mouseenter", function () {
                          var e = jQuery(this).find(".blog-slide").css("height"),
                              t = jQuery(this).find(".blog-slide").css("width"),
                              i = e.substring(0, e.length - 2) / 2 - 40,
                              s = jQuery(this).find(".owl-arrow");
                          s.css("margin-top", i), s.css("width", t), s.fadeTo(150, 1);
                      })
                      .on("mouseleave", function () {
                          jQuery(this).find(".owl-arrow").fadeTo(150, 0);
                      }),
                  jQuery(".d-carousel")
                      .on("mouseenter", function () {
                          jQuery(".d-arrow-left").fadeTo(50, 1), jQuery(".d-arrow-right").fadeTo(50, 1);
                      })
                      .on("mouseleave", function () {
                          jQuery(".d-arrow-left").fadeTo(50, 0), jQuery(".d-arrow-right").fadeTo(50, 0);
                      }),
                  $(".server_location").select2({ minimumResultsForSearch: 1 / 0, templateResult: t, templateSelection: t, width: "100%" }),
                  jQuery("#menu-btn").on("click", function () {
                      jQuery("header")[0].scrollHeight,
                          0 === mobile_menu_show
                              ? (jQuery("header").addClass("menu-open"), jQuery("header").css("height", $(window).innerHeight()), (mobile_menu_show = 1), jQuery(this).addClass("menu-open"))
                              : (jQuery("header").removeClass("menu-open"), jQuery("header").css("height", "auto"), (mobile_menu_show = 0), jQuery(this).removeClass("menu-open"));
                  }),
                  jQuery("a.btn").on("click", function (e) {
                      -1 === this.href.indexOf("#") && (e.preventDefault(), jQuery("html,body").scrollTo(this.hash, this.hash));
                  }),
                  jQuery(".arrow-up").on("click", function () {
                      jQuery(".coming-soon .coming-soon-content").fadeOut("medium", function () {
                          jQuery("#hide-content").fadeIn(600, function () {
                              jQuery(".arrow-up").animate({ bottom: "-40px" }, "slow"), jQuery(".arrow-down").animate({ top: "0" }, "slow");
                          });
                      });
                  }),
                  jQuery(".arrow-down").on("click", function () {
                      jQuery("#hide-content").fadeOut("slow", function () {
                          jQuery(".coming-soon .coming-soon-content").fadeIn(800, function () {
                              jQuery(".arrow-up").animate({ bottom: "0px" }, "slow"), jQuery(".arrow-down").animate({ top: "-40" }, "slow");
                          });
                      });
                  }),
                  setTimeout(function () {
                      $("#cookieConsent").fadeIn(400);
                  }, 2e3),
                  $("#closeCookieConsent, .cookieConsentOK").on("click", function () {
                      $("#cookieConsent").fadeOut(400);
                  }),
                  $(".switch-with-title .checkbox").change(function () {
                      this.checked ? jQuery(this).parent().parent().find(".hide-content").show() : jQuery(this).parent().parent().find(".hide-content").hide();
                  }),
                  video_autosize(),
                  custom_bg(),
                  menu_arrow(),
                  load_owl(),
                  custom_elements(),
                  init(),
                  new WOW().init(),
                  $("#homepage nav a, .scroll-to").on("click", function (e) {
                      -1 === this.href.indexOf("#") && (e.preventDefault(), jQuery("html,body").scrollTo(this.hash, this.hash));
                  }),
                  sequence(),
                  sequence_a(),
                  $(".accordion-section-title").on("click", function (e) {
                      var t = $(this).data("tab");
                      $(e.target).is(".active")
                          ? ($(this).removeClass("active"), $(".accordion-section-content:visible").slideUp(300))
                          : ($(".accordion-section-title").removeClass("active").filter(this).addClass("active"), $(".accordion-section-content").slideUp(300).filter(t).slideDown(300));
                  }),
                  jQuery.each(jQuery("textarea[data-autoresize]"), function () {
                      var e = this.offsetHeight - this.clientHeight,
                          t = function (t) {
                              jQuery(t)
                                  .css("height", "auto")
                                  .css("height", t.scrollHeight + e);
                          };
                      jQuery(this)
                          .on("keyup input", function () {
                              t(this);
                          })
                          .removeAttr("data-autoresize");
                  }),
                  $(window).resize(function () {
                      init_resize(), centerY(), grid_gallery();
                  }),
                  jQuery(window).on("scroll", function () {
                      header_sticky(), de_counter(), de_progress(), init(), backToTop(), moveItItemNow();
                      var e = $(".fadeScroll"),
                          t = e.outerHeight(),
                          i = (t - window.scrollY) / t;
                      i >= 0 ? e.css("opacity", i) : e.css("opacity", 0),
                          jQuery("#mainmenu li a").each(function () {
                              jQuery(this), -1 === this.href.indexOf("#") && jQuery(this).attr("href");
                          });
                      var s = $(this).scrollTop();
                      $("section").each(function () {
                          var e = $(this).offset().top - 120,
                              t = e + $(this).outerHeight();
                          s >= e &&
                              s <= t &&
                              ($("#mainmenu").find("a").removeClass("active"),
                              $("section").removeClass("active"),
                              $(this).addClass("active"),
                              $("#mainmenu")
                                  .find('a[href="#' + $(this).attr("id") + '"]')
                                  .addClass("active"));
                      }),
                          $(".toggle").on("click", function (e) {
                              e.preventDefault();
                              var t = $(this);
                              t.next().hasClass("show")
                                  ? (t.next().removeClass("show"), t.next().slideUp(350))
                                  : (t.parent().parent().find("li .inner").removeClass("show"), t.parent().parent().find("li .inner").slideUp(350), t.next().toggleClass("show"), t.next().slideToggle(350));
                          }),
                          "on" === header_autoshow &&
                              (new_scroll_position < (last_scroll_position = window.scrollY) && last_scroll_position > 80
                                  ? (header.addClass("scroll-down"), header.removeClass("nav-up"))
                                  : new_scroll_position > last_scroll_position && (header.removeClass("scroll-down"), header.addClass("nav-up")),
                              (new_scroll_position = last_scroll_position));
                      var a = $(document).scrollTop(),
                          n = $(document).height() - $(window).height(),
                          o = (100 * a) / n;
                      $("div.scrollbar").css("width", o + "%"), $("div.scrollbar-v").css("height", o + "px");
                  }),
                  $(function () {
                      var e = 0;
                      setInterval(function () {
                          (e -= 1), $(".bg-loop").css("background-position", e + "px 0");
                      }, 50);
                  });
          }),
          $(window).on("load", function () {
              jQuery("#de-loader").fadeOut(500), filter_gallery(), load_owl(), window.dispatchEvent(new Event("resize")), filter_gallery(), masonry(), $(".grid").isotope({ itemSelector: ".grid-item" }), grid_gallery();
          });
  })(jQuery);
  
