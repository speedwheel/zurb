$( document ).ready(function() {
    
    InitPopover($('.js-popover.active'));

     $(document).on('click', 'a', function(e) {
        let lastActivePopover = $('.js-popover.active');
        console.log(lastActivePopover)
        HidePopover(lastActivePopover);
        lastActivePopover.removeClass('active');
        if($(this).hasClass('next-step')) {
            let currentActivePopup = $(this.hash);
            currentActivePopup.addClass('active');
            InitPopover(currentActivePopup);
        }
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
  });
});

function InitPopover(selector) {
    let popoverSeletor = selector.popover({
        html: true,
        placement: 'bottom',
        title : '<span class="text-info">&nbsp;&nbsp;</span>'+
                '<button type="button" id="close" class="close" onclick="$(&quot;.js-popover.active&quot;).popover(&quot;hide&quot;);">&times;</button>',
    }).popover('show');
}

function HidePopover(selector) {
    selector.popover('dispose');
}