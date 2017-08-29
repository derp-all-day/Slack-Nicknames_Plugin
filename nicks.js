//Nicknames plugin
var nicks = [
  ["Name1", "Nickname1"],
  ["Name2", "Nickname2"],
  ["Name3", "Nickname3"]
];

document.addEventListener('DOMContentLoaded', function() {
	$("#msgs_div").bind("DOMNodeInserted", function(event){
		$.each( nicks, function( key, value ) {
			$(".p-channel_sidebar__name:contains(',')").each(function(){$(this).css("color", "#5876a7");});
			$(".p-channel_sidebar__name:contains('" + value[0] + "'):not(:contains(','))").each(function(){$(this).text(value[1]);});
			$("a.message_sender:contains('" + value[0] + "')").each(function(){$(this).text(value[1]);});
			$("button#im_title:contains('" + value[0] + "')").each(function(){$(this).text(value[1]);});
		});
	});
});
