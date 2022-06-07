var displayDataFromWikipedia = function(){
	var linksElement =$('#link');
	 var searchString = $('#searchString').val();
	 var wikiPidiaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + 
	 "&format=json&callback=wikiCallback";
	 $.ajax({
	 	url:wikiPidiaUrl,
	 	dataType: "jsonp",
	 	jsonp:"callback",
	 	success: function(res){
	 		if(searchString.toLowerCase() === "ahmed")
	 			{
 	 			linksElement.append('<li> <a href="' + 'https://ahmedbadrshaban.github.io/My-website/' + '" class="list-group-item d-flex justify-content-between align-items-center">'+ 'Ahmed Badr Beh -:)' +'</li>');
	 			}
	 		var outputList = res[1];
	 		//console.log(outputList);
	 		outputList.forEach(function(item){
	 			var itemUrl = "https://en.wikipedia.org/wiki/"+item;
	 			
	 			linksElement.append('<li> <a href="' + itemUrl + '"  class="list-group-item">'+ item +'</li>');
	 				return itemUrl;
 	 		})
	 	}

	 });

	 return false;
};

$('#ourForm').submit(displayDataFromWikipedia);