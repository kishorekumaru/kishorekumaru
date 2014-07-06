$(document).ready(function(){
  //Common Variables
 var previousStack = "homeSection";

	
	
	
	//Hide all sections with smooth Transition
	$(".homeSection").slideUp(800,"linear",function(){
		$(".aboutSection").slideUp(700,"linear",function(){
			$(".skillsSection").slideUp(600,"linear",function(){
				$(".contactSection").slideUp(500,"linear",function(){
					$(".homeSection").slideDown(300,"linear");
				});
			});
		});
	});
	
	
	$(".home").on("click", function(event){
		var clickedTarget = event.currentTarget.className.split(" ")[1] + "Section";
		slideMenu(clickedTarget);
	});
	
    $(".about").on("click", function(event){
    	var clickedTarget = event.currentTarget.className.split(" ")[1] + "Section";;
		slideMenu(clickedTarget);
    });
    
    $(".skills").on("click", function(event){
    	var clickedTarget = event.currentTarget.className.split(" ")[1] + "Section";;
		slideMenu(clickedTarget);
    });
    
    $(".contact").on("click", function(event){
    	var clickedTarget = event.currentTarget.className.split(" ")[1] + "Section";;
		slideMenu(clickedTarget);
    });

	function slideMenu(eventTarget){
		
		if(eventTarget == previousStack){
			$("." + previousStack).slideUp(500,"linear");
			previousStack = "";
			return;
		}
		
		if(previousStack != ""){			
			$("." + previousStack).slideUp(500,"linear");
		}
		$("." + eventTarget).slideDown(500,"linear");
		previousStack = eventTarget;
		return false;
	}
		

	//Function to enable and disable the Section components
	
	//Function for Skill selects
	
	
	
});