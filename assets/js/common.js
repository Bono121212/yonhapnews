var frontCommon=frontCommon||{};function frontCommonResize(){window.addEventListener("resize",()=>{})}function frontCommonScroll(){window.addEventListener("scroll",()=>{})}function header(){let n=0,e=!1;window.addEventListener("scroll",function(){e||(window.requestAnimationFrame(function(){var t;t=window.pageYOffset||document.documentElement.scrollTop,Math.abs(n-t)<=15||(t>n?document.getElementById("header").classList.add("active"):t<n&&document.getElementById("header").classList.remove("active"),n=t),e=!1}),e=!0)})}function quickMenuUI(){var e,t,a=$(".quick-nav"),o=$(".nav-list");function l(t){t.hasClass("desc")&&0<(t=t.prevAll(".nav-item.term").first()).length&&t.addClass("active")}a.length<=0||(e=!1,(t=$("[data-link-cont]").first().attr("data-link-cont"))&&(o.find('.item a[data-link="'+t+'"]').addClass("active"),a.find(".nav-list .nav-item").removeClass("active"),a.find('.nav-list .nav-item a[data-link="'+t+'"]').closest(".nav-item").addClass("active"),l(a.find('.nav-list .nav-item a[data-link="'+t+'"]').closest(".nav-item"))),$(window).off("scroll.scrollQuick").on("scroll.scrollQuick",function(){var i,t;e||(i=$(this).scrollTop(),t=$(window).height(),t=$(document).height()-10<=i+t,a.find(".nav-list .nav-item").each(function(t,n){var e=$(n).find("a").attr("data-link"),e=$('[data-link-cont="'+e+'"]');0<e.length&&i>=e.offset().top-400&&(a.find(".nav-list .nav-item").removeClass("active"),$(n).addClass("active"),l($(n)))}),t&&(a.find(".nav-list .nav-item").removeClass("active"),a.find(".nav-list .nav-item").last().addClass("active")),t=a.find(".nav-list").find(".nav-item.active").find("a").attr("data-link"),o.find(".item a").removeClass("active"),o.find('.item a[data-link="'+t+'"]').addClass("active"))}).trigger("scroll.scrollQuick"),o.find("a").on("click",function(t){t.preventDefault(),e=!0;var t=$(this).attr("data-link"),n=$('[data-link-cont="'+t+'"]');0<n.length&&(n=n.offset().top-200,o.find(".item a").removeClass("active"),o.find('.item a[data-link="'+t+'"]').addClass("active"),a.find(".nav-list .nav-item").removeClass("active"),$(this).closest(".nav-item").addClass("active"),l($(this).closest(".nav-item")),$("body, html").stop().animate({scrollTop:n},function(){e=!1}))}))}function dropdown(){$(".dropdown").click(function(){$(this).next().slideToggle(),$(this).parent().toggleClass("open")})}function quickLink(){document.querySelectorAll(".quick-link").forEach(t=>{t.addEventListener("click",function(t){t.preventDefault();t=this.getAttribute("href").substring(1),t=document.getElementById(t);t&&t.scrollIntoView({behavior:"smooth"})})})}frontCommon.Html=(()=>{var t=null;return t=t||{reset:function(){frontCommonResize(),header(),quickMenuUI(),dropdown()}}})();