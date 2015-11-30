var panelWidth = 0;
var startPanel = 2;

$(document).ready(function() {

	//make sure tabs are visible if js is enabled in browser
	$('.sp .tabs').css('display', 'block');
	$('.sp .panel_container .panel').css({'position': 'absolute', 'height': '400px'});
	$('.sp .panel_container .panels').css({'position': 'absolute', 'top': '0px'});

	//Use the window to target panelWidth variable located outside of function
	//Here we reset panelWidth to the width of .sp container
	window.panelWidth = $('.sp').width();

	//Find position of each panel within panel_container
	$('.panel_container .panel').each(function(index) {
		//Sets width of each panel to width of overall panel container
		//Then sets the left position of each equal to the index
		//First is index (0) = 0, second index(1) = 1 * 325 positioning that panel 325 pixels from left edge of container then last container = 350px from left edge
		$(this).css({'width': window.panelWidth+'px', 'left': (index * window.panelWidth)+'px'});

		//Target panels_container, which holds all individual panels,
		//and make sure it is wide enough to contain all three individual containers
		//Individual panes are at 0, 325, and 650 from left side
		$('.sp .panels').css('width', (index + 1)* window.panelWidth+'px');
	});

	//Apply click events to span tags.
	//Span tags were used instead of achor tags
	$('.sp .tabs span').each((function() {
		//Target each span found inside of a tabs container
		$(this).on('click', function() {
			//Run changePanels() when a span is found and clicked on
			//when span is clicked, function will send span index to changePanels()
			changePanels($(this).index()); //custom function not yet defined
		});
	}));

	//On page load we call a click event on first span so that
	//the first span is open and selected on page load.
	$('.sp .tabs span:nth-child('+window.startPanel+')').trigger('click');
});

//Define changePanels()
function changePanels(newIndex) {
	//calculation to determine, based on tab selected, where to animate panel to
	var newPanelPosition = (window.panelWidth*newIndex)* -1;
	//Gives negative number so we know where to slide panel towards left on x-axis

	//Pick out specific child based on index number
	//to determine which panel to animate
	//Add 15 to end to give us 15px of space at bottom of panel
	var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() + 15;

	//Create animation
	$('.sp .panels').animate({left:newPanelPosition},1000);
	//Animate height of panel
	$('.sp .panel_container').animate({height:newPanelHeight}, 1000);

	//Apply selected state to clicked tab
	//First remove selected class from all tabs
	$('.sp .tabs span').removeClass('selected');

	//Second, find selected tab and apply selected state to clicked tab
	$('.sp .tabs span:nth-child('+(newIndex+1)+')').addClass('selected');













}
