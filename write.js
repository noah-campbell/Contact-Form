function sendMail()
{
	var signature = document.getElementById('signature').value;
   	var mail = document.getElementById('mail').value;
	var selectedOption = $("input:radio[name=type]:checked").val()

  	window.location="mailto:noahlcampbell@yahoo.com?subject=I Have Some "+selectedOption+" Mail for You!&body=Hello,%0D%0A%0D%0A"+mail+"%0D%0A%0D%0ASincerely,%0D%0A"+signature;
}