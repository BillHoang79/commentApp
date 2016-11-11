function addComment(){
	//variables that stores what the person types in input box
	var inputUsername = document.getElementById('username').value
	var inputComment = document.getElementById('comment').value
	//takes the stored variables from user's input and creates a temporary text file
	var text2 = document.createTextNode("Username:  " + inputUsername)
	var text = document.createTextNode(" Comment:   " + inputComment)
	//creates li element
	var newList =document.createElement('li')
	//new class in which the items list is stored in
	newList.className ="newListItem"
	//gives stored username an "h3" element tag
	var name = document.createElement('h3')
	//attaches to here
	name.appendChild(text2)
	//stores comment into a "p" element tag
	var comment= document.createElement('p')
	//attaches it to here
	comment.appendChild(text)
	//gives li elements the value of what the user input earlier
	newList.appendChild(name)
	newList.appendChild(comment)
	//attsches li element into element "comment list"
	document.getElementById('commentList').appendChild(newList)
}

