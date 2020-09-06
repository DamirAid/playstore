$('select').SumoSelect();


$('.uploadImagesList .item').click(function() {
	$('.file_info').hide();
})



$(document).ready(function($) {
    $('.popup-open').click(function() {
        $('.popup-fade').show();
        return false;
    }); 
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').hide();
        return false;
    });     
 
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').hide();
        }
    });
    
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.modal').length == 0) {
            $(this).hide();                  
        }
    });
});
$(document).ready(function($) {
    $('.popup-open1').click(function() {
        $('.popup-fade1').show();
        return false;
    }); 
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade1').hide();
        return false;
    });     
 
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade1').hide();
        }
    });
    
    $('.popup-fade1').click(function(e) {
        if ($(e.target).closest('.modal_pay').length == 0) {
            $(this).hide();                  
        }
    });
});
$(document).ready(function($) {
    $('.popup-open2').click(function() {
        $('.popup-fade2').show();
        return false;
    }); 
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade2').hide();
        return false;
    });     
 
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade2').hide();
        }
    });
    
    $('.popup-fade2').click(function(e) {
        if ($(e.target).closest('#popup_sucsses').length == 0) {
            $(this).hide();                  
        }
    });
});

$(document).ready(function($) {
    $('.popup-open3').click(function() {
        $('.popup-fade3').show();
        return false;
    }); 
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade3').hide();
        return false;
    });     
 
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade3').hide();
        }
    });
    
    $('.popup-fade3').click(function(e) {
        if ($(e.target).closest('.modal_anketa').length == 0) {
            $(this).hide();  
        }
    });
});

$(document).ready(function($) {
    $('.popup-open4').click(function() {
        $('.popup-fade4').show();
        return false;
    }); 
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade4').hide();
        return false;
    });     
 
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade4').hide();
        }
    });
    
    $('.popup-fade4').click(function(e) {
        if ($(e.target).closest('#popup_zayavka').length == 0) {
            $(this).hide();                  
        }
    });
});


$('.filter_ipad_btn').click(function() {
	$('.catalog_mnu_wrap').slideToggle();
    $('body').addClass('hidens')
})          
$('.filter_close').click(function() {
	$('.catalog_mnu_wrap').hide();
    $('body').removeClass('hidens')
})

$('.dropdown').click(function() {
    $('.submenu').slideToggle();
    $(this).toggleClass('active')
})
 jQuery(document).ready(function ($) {

     var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
     var queue = {};
     var form = $('form#uploadImages');
     var imagesList = $('#uploadImagesList');

     var itemPreviewTemplate = imagesList.find('.item.template').clone();
     itemPreviewTemplate.removeClass('template');
     imagesList.find('.item.template').remove();


     $('#input__file').on('change', function () {
         var files = this.files;

         for (var i = 0; i < files.length; i++) {
             var file = files[i];

             if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
                 alert( 'Фотография должна быть в формате jpg, png или gif' );
                 continue;
             }

             if ( file.size > maxFileSize ) {
                 alert( 'Размер фотографии не должен превышать 2 Мб' );
                 continue;
             }

             preview(files[i]);
         }

         this.value = '';
     });

     // Создание превью
     function preview(file) {
         var reader = new FileReader();
         reader.addEventListener('load', function(event) {
             var img = document.createElement('img');
            var filename = $('.filelist');

             var itemPreview = itemPreviewTemplate.clone();
            itemPreview.find('.filelist').text(file.name)
             itemPreview.find('.img-wrap img').attr('src', event.target.result);
             itemPreview.data('id', file.name);

             imagesList.append(itemPreview);

             queue[file.name] = file;

         });
         reader.readAsDataURL(file);


     }



 });


$('.remove_game').click(function() {
    $(this).parent('.game').hide()
})
$('.btn_remove').click(function() {
    $('.games_block').hide();
})

$('a.btn_order_submit.popup-open4').click(function() {
    $('.popup-fade3').hide();
})

$('a.btn_order_submit.popup-open1').click(function() {
    $('.popup-fade').hide();
})
$('a.btn_after_pay.popup-open2').click(function() {
    $('.popup-fade1').hide();
})

 var btn = $('.arr_top');  

  $(window).scroll(function() {     

    if ($(window).scrollTop() > 300) {

       btn.addClass('show');

     } else {

       btn.removeClass('show');

     }

   });

   btn.on('click', function(e) {

     e.preventDefault();

     $('html, body').animate({scrollTop:0}, '300');

   });

   $('.select_mobile').click(function() {
    $('.mobile_section').show();
   })

   $('.select_mobile2').click(function() {
    $('.mobile_section2').show();
   })
