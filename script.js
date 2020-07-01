

$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);

  //スクロール、クリックイベント
  $('top-wrapper a').click(function(){
   var id = $(this).attr('href');
   var position = $(id).offset().top;
    $('html,body').animate({
     'scrollTop': position
   }, 500);
  });

});
