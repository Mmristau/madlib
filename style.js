$(document).ready(function(){
	
	$("button").click(function(){
	
	var time =$("#time").val();
	var verb =$("#verb").val();
	var n1 =$("#n1").val();
	var adj =$("#adj").val();
	var n2 =$("#n2").val();
	var n3 =$("#n3").val();
	var e =$("#e").val();
	
	var mad ="One Valentine's "+time+". I was "+verb+", when I looked in my "+n1+" and saw a "+adj+" "+n2+"! It said, Will you be my "+n3+"? I was so "+e+"!";
	
	console.log(mad);
	$("text").text(mad);
	});
	
	
	
	
});