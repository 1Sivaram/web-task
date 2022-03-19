var data1="";
var data2="";
var operatorVariable1="";
var displayVariable="";
var operatorCondition=true;
var displayCondition=false;
var condition=true;

function displayValue(value)
{	
	if(displayCondition)
	{
		displayVariable=data1;
		document.getElementById("displayBox").value=displayVariable;
		displayCondition=false;
	}
	if(condition)
	{
		displayVariable+=operatorVariable1;
		condition=false;
	}
	
	var displayElement=document.getElementById("display");
	if(operatorVariable1.length==0 && data2=="")
	{
		data1 += value;
		displayElement.value=data1;
	}
	else
	{
		data2+=value;
		displayElement.value=data2;
	}
	operatorCondition=true;
	displayCondition=false;
	displayVariable+=value;
	document.getElementById("displayBox").value=displayVariable;
	
}

function clearValue()
{
	document.getElementById("display").value="";
	document.getElementById("displayBox").value="";
	data1="";
	data2="";
	result=0;
	operatorVariable1="";
	trigger();
	operatorCondition=true;
	displayVariable="";
	displayCondition=false;
	condition=true;
}

function operator(value)
{
	if(displayCondition)
	{
		displayVariable=data1;
		document.getElementById("displayBox").value=displayVariable;
		displayCondition=false;
	}
	var length=operatorVariable1.length;
	if(operatorCondition)
	{
		if(data2!="")
		{
			equalAction(false);
			operatorVariable1=value;
			trigger();
			condition=true;
			document.getElementById(value).style.backgroundColor="white";
		}
		else
		if(value=="-")
		{
			if(length==0&&data1=="")
			{
				data1=value;
				displayVariable=data1;
				document.getElementById("display").value="-";
				operatorCondition=false;
				condition=false;
				value="";
			}
			else if(length>=1)
			{
				data2=value;
				displayVariable+=operatorVariable1+data2;
				document.getElementById("display").value="-";
				operatorCondition=false;
				condition=false;
				value="";
			}
			else if(data1!="-")
			{
				operatorVariable1=value;
				trigger();
				document.getElementById(value).style.backgroundColor="white";
				condition=true;
			}
			else
			{
				value="";
			}
		}
		else if(data1!="")
		{
			operatorVariable1=value;
			trigger();
			document.getElementById(value).style.backgroundColor="white";
			condition=true;
		}
		else
		{
			data1="0";
			displayVariable=data1;
			operatorVariable1=value;
		}
	}
	else
	{
		value="";
	}
	document.getElementById("displayBox").value=displayVariable+value;
}

function equalAction(flag)
{
	var result=0;
	switch(operatorVariable1)
	{
		case "+":
			result=parseFloat(data1)+parseFloat(data2);
			break;
		
		case "-":
			result=parseFloat(data1)-parseFloat(data2);
			break;
			
		case "*":
			result=parseFloat(data1) * parseFloat(data2);
			break;
		
		case "/":
			result=parseFloat(data1)/parseFloat(data2);
			break;
			
		default:
			console.log("default :"+operatorVariable1);
	}
	document.getElementById("display").value=result;
	if(flag)
	{
		displayCondition=true;
	}
	data1=result;
	operatorVariable1="";
	data2="";
	condition=true;
	trigger();
}


function trigger()
{
	document.getElementById("+").style.backgroundColor="silver";
	document.getElementById("-").style.backgroundColor="silver";
	document.getElementById("/").style.backgroundColor="silver";
	document.getElementById("*").style.backgroundColor="silver";
}




/*var data1="";
var data2="";
var operatorVariable1="";
var displayVariable="";
var operatorCondition=true;
var displayCondition=false;
var condition=true;

function displayValue(value)
{	
	if(displayCondition)
	{
		displayVariable=data1;
		document.getElementById("displayBox").value=displayVariable;
		displayCondition=false;
	}
	if(condition)
	{
		displayVariable+=operatorVariable1;
		condition=false;
	}
	var displayElement=document.getElementById("display");
	if(operatorVariable1.length==0 && data2=="")
	{
		data1 += value;
		displayElement.value=data1;
	}
	else
	{
		data2+=value;
		displayElement.value=data2;
	}
	operatorCondition=true;
	displayCondition=false;
	displayVariable+=value;
	document.getElementById("displayBox").value=displayVariable;
	
}

function clearValue()
{
	document.getElementById("display").value="";
	document.getElementById("displayBox").value="";
	data1="";
	data2="";
	result=0;
	operatorVariable1="";
	trigger();
	operatorCondition=true;
	displayVariable="";
	displayCondition=false;
	condition=true;
}

function operator(value)
{
	if(displayCondition)
	{
		displayVariable=data1;
		document.getElementById("displayBox").value=displayVariable;
		displayCondition=false;
	}
	var length=operatorVariable1.length;
	if(operatorCondition)
	{
		if(data2!="")
		{
			equalAction(false);
			operatorVariable1=value;
			trigger();
			condition=true;
			document.getElementById(value).style.backgroundColor="white";
		}
		else
		if(value=="-")
		{
			if(length==0&&data1=="")
			{
				data1=value;
				displayVariable=data1;
				document.getElementById("display").value="-";
				operatorCondition=false;
				condition=false;
				value="";
			}
			else if(length>=1)
			{
				data2=value;
				displayVariable+=operatorVariable1+data2;
				document.getElementById("display").value="-";
				operatorCondition=false;
				condition=false;
				value="";
			}
			else if(data1!="-")
			{
				operatorVariable1=value;
				trigger();
				document.getElementById(value).style.backgroundColor="white";
				condition=true;
			}
			else
			{
				value="";
			}
		}
		else if(data1!="")
		{
			operatorVariable1=value;
			trigger();
			document.getElementById(value).style.backgroundColor="white";
			condition=true;
		}
		else
		{
			data1="0";
			displayVariable=data1;
			operatorVariable1=value;
		}
	}
	else
	{
		value="";
	}
	document.getElementById("displayBox").value=displayVariable+value;
}

function equalAction(flag)
{
	var result=0;
	switch(operatorVariable1)
	{
		case "+":
			result=parseFloat(data1)+parseFloat(data2);
			break;
		
		case "-":
			result=parseFloat(data1)-parseFloat(data2);
			break;
			
		case "*":
			result=parseFloat(data1) * parseFloat(data2);
			break;
		
		case "/":
			result=parseFloat(data1)/parseFloat(data2);
			break;
			
		default:
			console.log("default :"+operatorVariable1);
	}
	document.getElementById("display").value=result;
	if(flag)
	{
		displayCondition=true;
	}
	data1=result;
	operatorVariable1="";
	data2="";
	condition=true;
	trigger();
}


function trigger()
{
	document.getElementById("+").style.backgroundColor="silver";
	document.getElementById("-").style.backgroundColor="silver";
	document.getElementById("/").style.backgroundColor="silver";
	document.getElementById("*").style.backgroundColor="silver";
}*/
