$(document).ready(function(){
	var selection0 = $( "#select option:selected").val();
	var selection1 = $( "#select1 option:selected").val();

	$( ".div" ).each(function( index ) {

		if (!$(this).hasClass(selection0) || !$(this).hasClass(selection1) ) {
			$( this ).hide();
		} 

		else {
			$( this ).show();
		}
	});

	$("#select").change(function(){
		var selection0 = $( "#select option:selected").val();
		var selection1 = $( "#select1 option:selected").val();

		$( ".div" ).each(function( index ) {
			if (!$(this).hasClass(selection0)) {
				$( this ).hide();
			}

			else if ($(this).hasClass(selection1)) {
				$( this ).show();
			}
		});
	});

	$("#select1").change(function(){
		var selection0 = $( "#select option:selected").val();
		var selection1 = $( "#select1 option:selected").val();

		$( ".div" ).each(function( index ) {
			if (!$(this).hasClass(selection1)) {
				$( this ).hide();
			}

			else if ($(this).hasClass(selection0)){
				$( this ).show();
			}
		});
	});
});
