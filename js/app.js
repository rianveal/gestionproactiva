

$(document).ready(function(){

  var iconMenu = $('.icon-menu_ctx')
  var overlay = $('.overlay-menu')
  var overlayTeam = $('.overlay-team')
  var overlayExperience = $('.overlay-experience')
  var overlayService = $('.overlay-service')
  var width = window.innerWidth
  var navig = $('nav.menu-options')

  $(iconMenu).on('click', function(e) {
    e.preventDefault()
    var el = $(this)
    if( width < 1024 ){
       if ($(overlay).is(':hidden')){
        el.addClass('icon-menu_active')
        $(overlay).fadeIn('slow')
       }else{
        el.removeClass('icon-menu_active')
        $(overlay).fadeOut('slow')
       }
    }
  })

  // Slider de la cabecera principal
  $('.slide').slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed: 4000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Slider de clientes
  $('.slider-client').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Experience --> slider principal clients
  $('.slider-experience--clients').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Evento de botón que despliega el modal del equipo de trabajo
  $('#btnTeam').on('click', function(e) {
    e.preventDefault()
    var el = $(this)
    if ($(overlayTeam).is(':hidden')){
      $('.overlay-team').fadeIn('slow')
      $('body').css('overflow-y','hidden')
    }
  })

  // Evento de botón que cierra el modal del equipo de trabajo
  $('#btnCloseEmp').on('click', function (e) {
    e.preventDefault()
    var el = $(this)
    el.parent().parent().parent().parent().parent().fadeOut('slow')
    $('body').css('overflow-y','auto')
  })

  $('.experience-areas--box > .more > a').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    if ($(overlayExperience).is(':hidden')){
      $('.overlay-experience').fadeIn('slow')
      $('body').css('overflow-y','hidden')
      var idEle = el.attr('id')
      if(idEle == 'btnReadSG'){
        $('#ctnReadSG').css('display','block')
        $('#ctnReadSG').siblings('div').css('display','none')
      }else if(idEle == 'btnReadAI'){
        $('#ctnReadAI').css('display','block')
        $('#ctnReadAI').siblings('div').css('display','none')
      }else if(idEle == 'btnReadPS'){
        $('#ctnReadPS').css('display','block')
        $('#ctnReadPS').siblings('div').css('display','none')
      }else if(idEle == 'btnReadDE'){
        $('#ctnReadDE').css('display','block')
        $('#ctnReadDE').siblings('div').css('display','none')
      }
    }
  })

  // Evento de botón que despliega el modal de las experiencias de la empresa
  $('#btnExperience').on('click', function(e) {
    e.preventDefault()
    var el = $(this)
    if ($(overlayExperience).is(':hidden')){
      $('.overlay-experience').fadeIn('slow')
      $('body').css('overflow-y','hidden')
    }
  })

  // Evento de botón que cierra el modal de las experiencias de la empresa
  $('#btnCloseExp').on('click', function (e) {
    e.preventDefault()
    var el = $(this)
    el.parent().parent().parent().parent().parent().fadeOut('slow')
    $('body').css('overflow-y','auto')
  })

  // Evento de botón que cierra el modal de los servicios de la empresa
  $('#btnCloseSer').on('click', function (e) {
    e.preventDefault()
    var el = $(this)
    el.parent().parent().parent().fadeOut('slow')
    $('body').css('overflow-y','auto')
  })

  // Capturando el evento del link del servicio
  $('.service-box--link > a').on('click', function (e) {
    e.preventDefault()
    var el = $(this)
    if($(overlayService).is(':hidden')){
      $(overlayService).fadeIn('slow')
      $('body').css('overflow-y','hidden')
      if( el.attr('id') == 'btnGC' ){
        $('.service-head--logo h1').text('Gestión de calidad')
        $('.service-GC').css('display','block')
        $('.service-GC').siblings().css('display','none')
      }else if( el.attr('id') == 'btnSST' ){
        $('.service-head--logo h1').text('Seguridad y salud en el trabajo - SGSST')
        $('.service-SST').css('display','block')
        $('.service-SST').siblings().css('display','none')
      }else if( el.attr('id') == 'btnAU' ){
        $('.service-head--logo h1').text('Auditorías a sistemas de gestión')
        $('.service-AU').css('display','block')
        $('.service-AU').siblings().css('display','none')
      }else if( el.attr('id') == 'btnGA' ){
        $('.service-head--logo h1').text('Gestión ambiental')
        $('.service-GA').css('display','block')
        $('.service-GA').siblings().css('display','none')
      }else if( el.attr('id') == 'btnSG' ){
        $('.service-head--logo h1').text('Sistema de gestión')
        $('.service-SG').css('display','block')
        $('.service-SG').siblings().css('display','none')
      }else if( el.attr('id') == 'btnFC' ){
        $('.service-head--logo h1').text('Formación y capacitación')
        $('.service-FC').css('display','block')
        $('.service-FC').siblings().css('display','none')
      }else if( el.attr('id') == 'btnGH' ){
        $('.service-head--logo h1').text('Gestión humana y Riesgo psicosocial')
        $('.service-GH').css('display','block')
        $('.service-GH').siblings().css('display','none')
      }else if( el.attr('id') == 'btnGJ' ){
        $('.service-head--logo h1').text('Gestión del riesgo jurídico')
        $('.service-GJ').css('display','block')
        $('.service-GJ').siblings().css('display','none')
      }

    }
  })

  $('.slider-leyend--link > a').on('click', function (e) {
    e.preventDefault()
    var el = $(this)
    if($(overlayService).is(':hidden')){
      $(overlayService).fadeIn('slow')
      $('body').css('overflow-y','hidden')
      if( el.attr('id') == 'btnGC' ){
        $('.service-head--logo h1').text('Gestión de calidad')
        $('.service-GC').css('display','block')
        $('.service-GC').siblings().css('display','none')
      }else if( el.attr('id') == 'btnSST' ){
        $('.service-head--logo h1').text('Seguridad y salud en el trabajo - SGSST')
        $('.service-SST').css('display','block')
        $('.service-SST').siblings().css('display','none')
      }else if( el.attr('id') == 'btnAU' ){
        $('.service-head--logo h1').text('Auditorías a sistemas de gestión')
        $('.service-AU').css('display','block')
        $('.service-AU').siblings().css('display','none')
      }else if( el.attr('id') == 'btnGA' ){
        $('.service-head--logo h1').text('Gestión ambiental')
        $('.service-GA').css('display','block')
        $('.service-GA').siblings().css('display','none')
      }else if( el.attr('id') == 'btnSG' ){
        $('.service-head--logo h1').text('Sistema de gestión')
        $('.service-SG').css('display','block')
        $('.service-SG').siblings().css('display','none')
      }else if( el.attr('id') == 'btnFC' ){
        $('.service-head--logo h1').text('Formación y capacitación')
        $('.service-FC').css('display','block')
        $('.service-FC').siblings().css('display','none')
      }else if( el.attr('id') == 'btnGH' ){
        $('.service-head--logo h1').text('Gestión humana y Riesgo psicosocial')
        $('.service-GH').css('display','block')
        $('.service-GH').siblings().css('display','none')
      }else if( el.attr('id') == 'btnGJ' ){
        $('.service-head--logo h1').text('Gestión del riesgo jurídico')
        $('.service-GJ').css('display','block')
        $('.service-GJ').siblings().css('display','none')
      }

    }
  })

  // Transformando el menu de opciones -- mobile - Desktop
  $(window).resize(function(){
    var w = $(window).width()
    if(w >= 1024 && $(overlay).is(':hidden')){
      $(overlay).css('display','block')
      $(overlay).removeAttr('style')
    }
  }) 

  // Scroll button top
  $(window).scroll(function(){
    if( width < 1024 ){
      if( $(this).scrollTop() > 300 ){
        $('.btnTop').css('bottom','5%')
      }else{
        $('.btnTop').css('bottom','-20%')
      }
    }else if( width >= 1024 ){
      if( $(this).scrollTop() > 300 ){
        $('.btnTop').css('bottom','5%')
      }else{
        $('.btnTop').css('bottom','-20%')
      }
    }
  })   

  // Método para encoger las opciones de usarios una vez de click sobre una de éstas.
  $('.item-menu').on('click', function(){
    var w = $(window).width();
    if(w > 1024){
    }else{
      if(w < 1024){
        if ($(iconMenu).hasClass('icon-menu_active')){
          $(iconMenu).removeClass('icon-menu_active')
          $(overlay).fadeOut('slow')
        }
      }
    }
  })

  // Efecto de scroll en el body cuando se escoge una opción de usuario.
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset - 100}, 900);
        return false;
      }
    }
  });

});


