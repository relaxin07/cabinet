
$(function(){
		$('.tab-b').each(function(i,e){
		$(e).find(".tab__item").not(":first").hide();
		$(e).find(".wrapper .tab").click(function() {
			$(e).find(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(e).find(".tab__item").hide().eq($(this).index()).show()
		}).eq(0).addClass("active");
	})

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});


	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.nav').slideToggle("slow", function(){
		});
	});


	$( "#slider-range-min" ).slider({
		range: "min",
		value: 35000,
		min: 0,
		max: 70000,
		slide: function( event, ui ) {
			$( "#amount" ).val( "" + ui.value );
		}
	});


	$( "#amount" ).val( "" + $( "#slider-range-min" ).slider( "value" ) );
	$( "#slider-range-min" ).slider('disable');



	var chart = new CanvasJS.Chart("chartContainer", {
	//exportEnabled: true,
	//animationEnabled: true,
	maxWidth: 400,
	maxHeight: 400,
	fontSize: 40,
	legend:{
		cursor: "pointer",
	},
	backgroundColor: "transparent",
	data: [{
		type: "pie",
		startAngle: 260,
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		dataPoints: [
		{ y: 45, name: 	"Availeble", color:'#4C4C4C'  },
		{ y: 25, name: 	"Availeble", color:'#CDCDCD'  },
		{ y: 15, name: 	"Availeble", color:'#919191'},
		{ y: 15, name: 	"Availeble", color:'#616161'},

		]
	}]
});
	chart.render();
});
