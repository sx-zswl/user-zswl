/*
 * jQuery Simple Overlay
 * A jQuery Plugin for creating a simple, customizable overlay. Supports multiple instances,
 * custom callbacks, hide on click, glossy effect, and more.
 *
 * Copyright 2011 Tom McFarlin, http://tommcfarlin.com, @moretom
 * Released under the MIT License
 *
 * http://moreco.de/jquery-simple-overlay
 */
/*
 * Changed by Roy on 8/2/2013 to add close function
 */
(function($) {

	$.fn.overlay = function(options) {
		var opts = $.extend({}, $.fn.overlay.defaults, options);
		if(!$(this).hasClass('overlay-trigger')) {
			return show(create($(this), opts), opts);
		}
    
	}; // end overlay

	/**
	 * 关闭弹出的遮罩
	 * @param $overlay 遮罩对象，在创建时由overlay()方法返回
	 * Added by Roy on 8/2/2013
	 */
	$.fn.overlayClose = function($overlay, options) {
		var op = $.extend({}, $.fn.overlay.defaults, options);
		var $item = $(this);
		if($item.hasClass('overlay-trigger')) {
				close($overlay, op);
				$item.removeClass('overlay-trigger');
		};
	};

  /*--------------------------------------------------*
   * helper functions
   *--------------------------------------------------*/
  
  /**
   * Creates the overlay element, applies the styles as specified in the 
   * options, and sets up the event handlers for closing the overlay.
   *
   * opts The plugin's array options.
   */
  function create($src, opts) {
  
    // prevents adding multiple overlays to a container
    $src.addClass('overlay-trigger');
  
    // create the overlay and add it to the dom
    var overlay = $('<div></div>').css({textAlign:'center'})
		.append($('<div></div>')
		.addClass('overlay')
		.css({
			border: "0px solid red",
			background: opts.color,
			opacity: opts.opacity,
			top: opts.container.toString() === 'body' || opts.container.toString() === 'html' ? $(opts.container).scrollTop() : $(opts.container).offset().top,
			left: $(opts.container).offset().left,
			width: opts.container === 'body' || opts.container === 'html' ? '100%' : $(opts.container).width(),
			height: opts.container === 'body' || opts.container === 'html' ? '100%' : $(opts.container).height(),
			position: 'absolute',
			zIndex: 1000,
			display: 'none',
			overflow: 'hidden'
		}));
	var $overlayBg = $("div.overlay", overlay);

    // if specified, apply the gloss
    if(opts.glossy) {
      applyGloss(opts, $overlayBg);     
    } // end if

    // setup the event handlers for closing the overlay
    if(opts.closeOnClick) {
      $(overlay).click(function() {
        close(overlay, opts);
        $src.removeClass('overlay-trigger');
      });
    } // end if

    // finally add the overlay
    $(opts.container).append(overlay);
    return overlay;
    
  } // end createOverlay
  
  /**
   * Displays the overlay using the effect specified in the options. Optionally
   * triggers the onShow callback function.
   *
   * opts The plugin's array options.
   */
  function show(overlay, opts) {
    switch(opts.effect.toString().toLowerCase()) {
    
      case 'fade':
	    $("div.overlay", overlay).fadeIn('fast', function() {opts.onShow(overlay);});
        break;
      
      case 'slide':
        $("div.overlay", overlay).slideDown('fast', function() {opts.onShow(overlay);});
        break;
        
      default:
        $("div.overlay", overlay).show(function() {opts.onShow(overlay)});
        break;
    
    } // end switch/case
    
    $(opts.container).css('overflow', 'hidden');

	return overlay;
  } // end show
  
  /**
   * Hides the overlay using the effect specified in the options. Optionally
   * triggers the onHide callback function.
   *
   * opts The plugin's array options.
   */
  function close(overlay, opts) {

    switch(opts.effect.toString().toLowerCase()) {
        
      case 'fade':
        $("div.overlay", overlay).fadeOut('fast', function() { 
          $(this).remove();
        });
        break;
            
      case 'slide':
        $("div.overlay", overlay).slideUp('fast', function() {
          $(this).remove();
        });
        break;
            
      default:
        $("div.overlay", overlay).hide(function() {
          $(this).remove();
        });
        break;
            
    } // end switch/case
    
    $(opts.container).css('overflow', 'auto');
	  opts.onHide();
    
  } // end close
  
  /**
   * Adds the gloss effect to the overlay.
   *
   * opts     The plugin's options array
   * overlay  The overlay on which the gloss will be applied
   */
  function applyGloss(opts, overlay) {
  
    var gloss = $('<div></div>');
    $(gloss).css({
      background: '#fff',
      opacity: 0.2,
      width: '200%',
      height: '100%',
      position: 'absolute',
      zIndex: 1001,
      msTransform: 'rotate(45deg)',
      webkitTransform: 'rotate(45deg)',
      oTransform: 'rotate(45deg)'
    });
      
    // at the time of development, mozTransform didn't work with >= jQuery 1.5
    if($.browser.mozilla) {
     $(gloss).css('-moz-transform', 'rotate(45deg');
    } // end if
     
    $(overlay).append(gloss);
    
  } // end applyGloss
 
  /*--------------------------------------------------*
   * default settings
   *--------------------------------------------------*/
	var defaultContainer = 'body';
	if(HT.isIE) {
		defaultContainer = 'html';
	}

	$.fn.overlay.defaults = {
    color: '#000',
    opacity: 0.5,
    effect: 'none',
    onShow: null,
    onHide: null,
    closeOnClick: false,
    glossy: false,
    container: defaultContainer
	}; // end defaults

})(jQuery);