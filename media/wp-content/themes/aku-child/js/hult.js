jQuery(document).ready(function ($) {
  $('.rt-holder .entry-title a').each(function () {
    var htmlText = $(this).html();
    $(this).html(htmlText.replace('Challenge', ''));
  });

  $('.rt-holder .entry-title a').each(function () {
    var removeHp = $(this).html();
    $(this).html(removeHp.replace('Hult Prize', ''));
  });

  if ($('body').hasClass('home')) {
    $('.menu-item a').on('click', function (e) {
      var href = $(this).attr('href');
      var matchUrl = location.host + '/#programs';
      if (href.indexOf(matchUrl) !== -1) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: $('#programs').offset().top
        }, 500);

      }
    });
  }
  $('.secret:checked').each(function(){
    $('.hult-slider-nav-item[for="'+$(this).attr('id')+'"]').addClass('active');
    $('.hult-slider-nav-item[for="'+$(this).attr('id')+'"] .img').hide();
    $('.hult-slider-nav-item[for="'+$(this).attr('id')+'"] .img.img-active').show();
  });
  $('.hult-slider-nav-item').on('click',function(e){
    $('.hult-slider-nav-item').removeClass('active');
    $(this).addClass('active');
    $('.hult-slider-nav-item .img').show();
    $('.hult-slider-nav-item .img-active').hide();
    $('.img', this).hide();
    $('.img.img-active', this).show();
  });

  $('.expand-collapse-bios').each(function(index){
    var container = $(this);
    var bios = '.vc_tta-panel-body > .vc_row > .wpb_column > .vc_column-inner > .wpb_wrapper > .wpb_text_column > .wpb_wrapper';
    $(bios, container).each(function(){
      var bio = $(this);
      var person = $('h3',bio).text().replace('.', '').replace(/\s+/g, '-').toLowerCase() + '-' + index;
      if ( $('p',bio).length > 2){
        bio.append('<div class="bio-details" id="bio-details-'+person+'" style="display:none;"></div><a href="#" class="bio-click">Show More</a>');
        $('p',bio).each(function(){
          var p = $(this);
          if ( p.index() > 2 ) {
            p.appendTo('#bio-details-'+person,bio);
          }
        });
      }
    });
    container.on('click','.bio-click',function(e){
      e.preventDefault();
      var thisPerson = $(this).parent();
      if ( $(this).text() === "Show More" ){
        $(this).html("Show Less");
        $('.bio-details',thisPerson).slideDown();
      } else {
        $(this).html("Show More");
        $('.bio-details',thisPerson).slideUp();
      }
    });
  });

  var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test( userAgent ),
      ios = /iphone|ipod|ipad/.test( userAgent );

  if( ios ) {
    $('.video-bg-container .video-bg').hide();
    $('.video-bg-container').css('background-image', 'url(/wp-content/uploads/2017/03/slum.jpg)');
  }

});
