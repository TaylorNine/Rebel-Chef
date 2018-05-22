// JQUERY MODAL SCRIPT TO FIRE SPECIFIC MODALS WITHIN THE DOCUMENT

// Opens the modal by adding the .is-active class
$(".modal-open").click(function(){
		$(this).toggleClass("is-active");
});

// Closes the modal by removing the .is-active class
	$(".modal-close").click(function(){
		$(this).toggleClass("is-active");
});