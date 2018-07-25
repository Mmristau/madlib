$(document).ready(function(){
	
	$("button").click(function(){
	
	var time1 =$("#time").val();
	var verb1 =$("#verb").val();
	var n11 =$("#n1").val();
	var adj1 =$("#adj").val();
	var n21 =$("#n2").val();
	var n31 =$("#n3").val();
	var e1 =$("#e").val();
	
	var mad ="One Valentine's " +time1+ ". I was " +verb1+ ", when I looked in my " +n11+ " and saw a "+ adj1  +" "+ n21 +"! It said, 'Will you be my "+ n31 +"?' I was so "+ e1 +"!";
	
	console.log(mad);
	$("text").html(mad);
	});
	
	
	
	
});