//Write Week number to Week day Converter
let h1=document.createElement("h1");
h1.innerHTML="Welcome Week Number to Week Day Name Converter";
container.appendChild(h1);

// lable 
let lable1=document.createElement("lable");
lable1.innerHTML="Select Week Day Number";
container.appendChild(lable1);

//option
let options=document.createElement("Select");
options.setAttribute("id", "weekDayNumber");

let option=[];
let dayNumber=["", 1, 2, 3, 4, 5];

for (i=0; i<6; i++) 
{
    option[i]=document.createElement("option");//it will create empty <h1></h1>
    option[i].setAttribute("value",dayNumber[i]);
    if(i==0)option[i].innerHTML="Select";
    else option[i].innerHTML=dayNumber[i];
    options.appendChild(option[i]);

    // container into div print
    

}
container.appendChild(options);

// btn progress

//let btn1=document.createElement("input");
//btn1.setAttribute("type", "button");
// set value
//btn1.setAttribute("value", "convert");



//lable 2 create
let lable2=document.createElement("lable");

weekDayNumber.addEventListener('Change', 
    function() 
    {
        let op=weekDayNumber.value;
        lable2.innerHTML="</br>";
        switch(op)
        {
            case 0:
                lable2.innerHTML+="";
                break;
            case 1:
                lable2.innerHTML+="Monday";
                break;
            case 2:
                lable2.innerHTML+="Thuesday";
                break;
            case 3:
                    lable2.innerHTML+="Wednesday";
                    break;
            case 4:
                lable2.innerHTML+="Thusday";
                break;
            case 5:
                lable2.innerHTML+="Friday";
                break;


        }
    }
    );
container.appendChild(lable2);