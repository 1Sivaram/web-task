var map=new Map();
function createBox()
{
	var len=document.getElementById("num").value;
	var divElement=document.getElementById("treediv");
	var headerElement=document.createElement("h3");
	headerElement.innerText="Parent";
	divElement.appendChild(headerElement);
	
	var headerElement1=document.createElement("h3");
	headerElement1.innerText="Child";
	headerElement1.style.marginLeft="250px";
	headerElement1.style.marginTop="-40px";
	divElement.appendChild(headerElement1);
	
	for(let iter=0;iter<len;iter++)
	{
		var boxElement=document.createElement("input");
		boxElement.type="text";
		boxElement.id="father"+iter;
		divElement.appendChild(boxElement);
		
		var boxElement1=document.createElement("input");
		boxElement1.type="text";
		boxElement1.id="son"+iter;
		boxElement1.style.marginLeft="20px";
		divElement.appendChild(boxElement1);
		
		var brElement=document.createElement("br");
		divElement.appendChild(brElement);
		var brElement1=document.createElement("br");
		divElement.appendChild(brElement1);
	}
	var buttonElement=document.createElement("button");
	buttonElement.innerText="Submit";
	divElement.appendChild(buttonElement);
	buttonElement.onclick=function()
		{
			var len=document.getElementById("num").value;
	
			for(let iter=0;iter<len;iter++)
			{
				var fatherName=document.getElementById("father"+iter).value;
				var sonName=document.getElementById("son"+iter).value;
				var arr=map.get(fatherName);
				
				if(!arr)
				{
					arr=new Array();
				}
				arr.push(sonName);
				map.set(fatherName,arr);
			}
			
			var brElement1=document.createElement("br");
			divElement.appendChild(brElement1);
			
			var brElement2=document.createElement("br");
			divElement.appendChild(brElement2);
			
			var boxElement=document.createElement("input");
			boxElement.type="text";
			boxElement.id="name";
			boxElement.placeholder="Give a Name";
			divElement.appendChild(boxElement);
			
			var buttonElement1=document.createElement("button");
			buttonElement1.innerText="Find";
			divElement.appendChild(buttonElement1);
			buttonElement1.onclick=function()
			{
				var name=document.getElementById("name").value;
				var grandson=[];
				var values=map.get(name);
				
				var len=values.length ;
				var count=0;
				for(var iter=0;iter<len;iter++)
				{
					if(map.get(values[iter])!=undefined)
					{
						var arr=map.get(values[iter]);
						var length=arr.length;
						if(length>1)
						{
							for(var i=0;i<length;i++)
							{
								grandson.push(arr[i]);
								count++;
							}
						}
						else
						{
							grandson.push(arr[0]);
							count++;
						}
					}
				}
				
				if(count==0)
				{
					document.getElementById("stmt").innerHTML=name+" has No Grandchild";
				}
				else if(count==1)
				{
					document.getElementById("stmt").innerHTML=name+" has one Grandchild";
					document.getElementById("ans").innerHTML="Name of the Grandchild is : "+grandson+".";
				}
				else 
				{
					var values="";
					for(var iter=0;iter<count;iter++)
					{
						values+=grandson[iter];
						if(iter==count-2)
						{
							values+=" and ";
						}else
						if(iter==count-1)
						{
							values+=".";
						}
						else
						{
							values+=" , ";
						}
						
					}
					document.getElementById("stmt").innerHTML=name+" has "+count+" Grandchildren";
					document.getElementById("ans").innerHTML="Name of the Grandchildren are : "+values;
				}
			}
		}
	}










