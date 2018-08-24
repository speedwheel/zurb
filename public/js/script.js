$( document ).ready(function() {
    
    InitPopover($('.js-popover.active'));

     $(document).on('click', 'a', function(e) {
        let lastActivePopover = $('.js-popover.active');
        DestroyPopover(lastActivePopover);
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
                '<button type="button" id="close" class="close" onclick="DestroyPopover($(&quot;.js-popover.active&quot;));">&times;</button>',
    }).popover('show');
}

function DestroyPopover(selector) {
    selector.popover('dispose');
}