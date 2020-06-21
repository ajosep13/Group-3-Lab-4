var photo=['amino.jpg','biramp.jpg','eevee.jpg','pikachu.jpg'] 	//An array to store the source of photos as string
var first = ['Vaidehi', 'Sharath','Ammu', 'Eduardo']		//An array to store the first name	
var last =['Dharji','Chintam','Joseph','Coelho']		//An array to store the last name
var job=['Student','Student','Student','Instructor']		//An array to store Job
var salary=['14','14','0','24']					//An array to store the salary 
h="100%"							//h and w are variables to set height and width of the photo
w="100%"

//A function that create each row. Here values from the arrays are passed as parameter
function create_row(p,f,l,j,sal, index) {	//p,f,l,j,sal are current elements of arrays photo, first, last, job and salary respectively			
  	var row = ""						
 	row += "<tr id='" + index + "'>\n"	//index is a variable to keep track of the row number		
 	row += "<td><img src=Pictures/"+p+" height="+h+" width="+w+"></td>\n" //Take the source address from photo array
  	row += "<td>" + f + "</td>\n"		//add firstname to the row
  	row += "<td>" + l + "</td>\n"		//add lastname to the row		
  	row += "<td>" + j + "</td>\n"		//add job to the row		
  	row += "<td>" + sal + "</td>\n"		//add salary to the row	
	// to add delete symbol to the row and remove_entry() function will be called if we try to click on the image	
  	row += "<td><img src='Pictures/delete1.png' height='30' width='30' onclick='remove_entry(" + index + ")'></td>\n"
  	row += "</tr>"
  	return row				// return the row to the refresh_table() function				
}

function refresh_table(){
  	var code_snippet = ""			// variable to store the code for tbody creation			
  	for(var index in first)			//execute till the last index of array first. Here all the array have same number of elements. So any array if fine		
	   code_snippet += create_row(photo[index],first[index],last[index],job[index],salary[index], index) //call the function create_row for each element of arrays and pass the array elements and index as parameters
  	var table = document.querySelector('#my_table') //It specifies the tbody part of the table.html, it is where we have to substitute the code	 
  	table.innerHTML = code_snippet 			// applied the code to tbody			
}

function remove_entry(index){					// A function to remove rows of the table. It is triggered whene delete icon is triggered
  	photo.splice(index, 1);					//Remove the respective element of the index from the array photo
  	first.splice(index, 1);					//Remove the respective element of the index from the array first
  	last.splice(index,1);					//Remove the respective element of the index from the array last
  	job.splice(index,1);					//Remove the respective element of the index from the array job
  	salary.splice(index,1);					//Remove the respective element of the index from the array salary
  	refresh_table()						//Call refresh table function to build the table after eleminating the respective row specified by the index
}

function onEnterUp(event) {					//A function that is triggered when values are entered on the last row and press enter key
	if (event.code !== 'Enter') return;			//Make sure that changes will occur only after pressing enter key
	var y = document.getElementById("myImage");		//To get the path of file browsed in table.html page
	var x = document.getElementById("myImage").files[0].name; // Here we encountered a problem the browsed path is not correct. So we are taking only the name of the file and it will work only if you are taking images from the Picture folder
	var f_name = document.getElementById("fst");		//To get the first name entered in the text box. fst is the id of textbox used in 
  	var l_name = document.getElementById("lst");		//To get the last name entered in the text box. lst is the id of textbox used in
	var jobl = document.getElementById("jb");		//To get the job entered in the text box. jb is the id of textbox used in
	var sa = document.getElementById("s");			//To get the salary entered in the text box. s is the id of textbox used in
	photo.push(x);						//add the new value to the array photo
	first.push(f_name.value);				//add the new value to the array first
  	last.push(l_name.value);				//add the new value to the array last
  	job.push(jobl.value);					//add the new value to the array job
   	salary.push(sa.value);					//add the new value to the array salary
	y.value="";						// clear the value for the new row
  	f_name.value = "";					// clear the value for the new row
  	l_name.value="";					// clear the value for the new row
  	jobl.value="";						// clear the value for the new row
  	sa.value="";						// clear the value for the new row
  	refresh_table()						//Call refresh table function to build the table after adding the respective row
}