var nicks = [
  ["Name1", "Nickname1"],
  ["Name2", "Nickname2"],
  ["Name3", "Nickname3"]
];

document.addEventListener('DOMContentLoaded', function() {
	$.each( nicks, function( key, value ) {
		$("<script></script>").appendTo('head').html('$(document).ready(function(){ \
			$("*").mouseover(function() { $(".p-channel_sidebar__name:contains(\'' + value[0] + '\')").each(function(){$(this).text("' + value[1] + '");}); }); \
			$("*").mouseover(function() { $("a.message_sender:contains(\'' + value[0] + '\')").each(function(){$(this).text("' + value[1] + '");}); }); \
			$("*").mouseover(function() { $("button#im_title:contains(\'' + value[0] + '\')").each(function(){$(this).text("' + value[1] + '");}); });} \
		');
	});
});
