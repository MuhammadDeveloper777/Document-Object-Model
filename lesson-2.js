//Write Month name to Month number converter
let h1=document.createElement("h1");
h1.innerHTML="Write Month name to Month number converter";
container.appendChild(h1);

//lable create
let heading1=document.createElement("headings");
heading1.innerHTML="Enter Month Name ";
container.appendChild(heading1);

//select menu navigation
let options=document.createElement("Select");
options.setAttribute("id", "monthNameConverter");

let  option=[];
let monthName=["", "jan", "feb", "march", "april", "may"];

//using for loop
for (i=0; i<6; i++) 
{
    option[i]=document.createElement("option");//it will create empty <h1></h1>
    option[i].setAttribute("value",monthName[i]);
    if(i==0)option[i].innerHTML="Select";
    else option[i].innerHTML=monthName[i];
    options.appendChild(option[i]);

    // container into div print
    

}
container.appendChild(options);

//lable create
let heading2=document.createElement("lable");

//
monthNameConverter.addEventListener('Change',
	function()
	{
		let op=monthNameConverter.value;
		heading2.innerHTML="<br/>";

		switch(op)
		{
			case "jan":
				heading2.innerHTML+="Month Number:"+1;
				break;
			case "feb":
				heading2.innerHTML+="Month Number:"+2;
				break;
			case "april":
				heading2.innerHTML+="Month Number:"+3;
				break;
			case "may":
				heading2.innerHTML+="Month Number:"+4;
				break;
			default:
				heading2.innerHTML+="translation not find";
			
		}
	





	});
container.appendChild(heading2)
