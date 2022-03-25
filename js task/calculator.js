//calsi-2

var data1="";
var data2="";
var operatorVariable1="";
var displayVariable="";
var operatorCondition=true;
var displayCondition=false;
var condition=true;

function displayValue(value)
{	
	disFunc();
	if(condition)
	{
		displayVariable+=operatorVariable1;
		condition=false;
	}
	
	var displayElement=document.getElementById("display");
	if(operatorVariable1.length==0 && data2=="")
	{
		data1 += value;
		displayElement.value=commaSeparator(data1);
	}
	else
	{
		data2+=value;
		displayElement.value=commaSeparator(data2);
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
	disFunc();
	var length=operatorVariable1.length;
	if(operatorCondition)
	{
		if(data2!="")
		{
			equalAction(false);
			operatorVariable1=value;
			trigger();
			condition=true;
			document.getElementById(value).style.backgroundColor="lightgreen";
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
				document.getElementById(value).style.backgroundColor="lightgreen";
				condition=true;
			}
		}
		else if(data1!="")
		{
			operatorVariable1=value;
			trigger();
			document.getElementById(value).style.backgroundColor="lightgreen";
			condition=true;
		}
		else
		{
			data1="0";
			document.getElementById(value).style.backgroundColor="lightgreen";
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

function disFunc()
{
	if(displayCondition)
	{
		displayVariable=data1;
		document.getElementById("displayBox").value=displayVariable;
		displayCondition=false;
	}
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
			result=parseFloat(data1)*parseFloat(data2);
			break;
		
		case "/":
			result=parseFloat(data1)/parseFloat(data2);
			result=result?result:undefined;
			break;
			
		default:
			console.log("default :"+operatorVariable1);
	}
	document.getElementById("display").value=commaSeparator(result.toString());
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


function commaSeparator(value)
{
	var arr=value.split(".");
	var commaTemp=arr[0];
	var res="";
	var len=commaTemp.length-1;
	let last=commaTemp.charAt(len);
	var count=0;
	for(var iter=len-1;iter>=0;iter--)
	{
		res=commaTemp.charAt(iter)+res;
		++count;
		if(count%2==0 && iter>0)
		{
			res=","+res;
		}
	}
	if(arr[1])
	{
		res=res+last+"."+arr[1];
	}
	else
	{
		res+=last;
	}
	return res;
}


function trigger()
{
	document.getElementById("+").style.backgroundColor="#e8e6e6";
	document.getElementById("-").style.backgroundColor="#e8e6e6";
	document.getElementById("/").style.backgroundColor="#e8e6e6";
	document.getElementById("*").style.backgroundColor="#e8e6e6";
}



//calsi-1

/*var data1="";
var data2="";
var operatorVariable1="";
var operatorCondition=false;

function displayValue(value)
{	
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
}

function clearValue()
{
	document.getElementById("display").value="";
	data1="";
	data2="";
	result=0;
	operatorVariable1="";
	trigger();
	operatorCondition=false;
}

function operator(value)
{
	document.getElementById("display").value="";
	var length=operatorVariable1.length;
	if(!operatorCondition)
	{
		if(data2!="")
		{
			equalAction(false);
			operatorVariable1=value;
			trigger();
			document.getElementById(value).style.backgroundColor="white";
		}
		else
		if(value=="-")
		{
			if(length==0&&data1=="")
			{
				data1=value;
				document.getElementById("display").value="-";
				value="";
			}
			else if(length>=1)
			{
				data2=value;
				document.getElementById("display").value="-";
				operatorCondition=true;
				value="";
			}
			else if(data1!="-")
			{
				operatorVariable1=value;
				trigger();
				document.getElementById(value).style.backgroundColor="white";
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
		}
		else
		{
			data1="0";
			operatorVariable1=value;
			document.getElementById("display").value=data1;
		}
	}
	else
	{
		value="";
	}
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
	if(flag)
	{
		document.getElementById("display").value=result;
	}
	data1=result;
	operatorVariable1="";
	operatorCondition=false;
	data2="";
	trigger();
}


function trigger()
{
	document.getElementById("+").style.backgroundColor="silver";
	document.getElementById("-").style.backgroundColor="silver";
	document.getElementById("/").style.backgroundColor="silver";
	document.getElementById("*").style.backgroundColor="silver";
}*/