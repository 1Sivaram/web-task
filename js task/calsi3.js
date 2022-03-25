var dataString="";
var operatorVariable="";
var condition=true;
var dotCount=0;
var paranthesesCount=0;

function displayValue(value)
{	
	opStore();
	var displayElement=document.getElementById("display");
	if(dotCount!=0&&value==".")
	{
		value="";
	}
	dataString+=value;
	displayElement.value=dataString;
	dotCount=value=="."?++dotCount:dotCount;
	condition=true;
}


function clearValue()
{
	document.getElementById("display").value="";
	document.getElementById("displayBox").value="";
	dataString="";
	operatorVariable="";
	condition=true;
	dotCount=0;
	paranthesesCount=0;
	trigger();
}

function operator(value)
{
	dotCount=0;
	
	if(value.charAt(0)=="x"&&dataString!="")
	{
		powerFunc(value);
		value="";
	}
	
	if(condition && value=="-")
	{	
		dataString.charAt(dataString.length-1)=="."?value="":value;
		
		if(dataString!=""&&operatorVariable==""||operatorVariable==")")
		{
			operatorVariable=value;
		}
		else
		{
			opStore();
			dataString+=value;
			condition=false;
			value="";
		}
	}
	else if(condition && opCheck())
	{
		operatorVariable=value;
	}
	else
	{
		value="";
		opStore();
	}
	
	if(condition&&value!="")
	{
		trigger();
		document.getElementById(value).style.backgroundColor="lightgreen";
	}
	document.getElementById("display").value=dataString+" "+operatorVariable;
}

function backspace()
{	
	dataString=dataString.substr(0,dataString.length-1);
	document.getElementById("display").value=dataString;
}


function bodmasFunc()
{
	if(paranthesesCount==0 && dataString!="")
	{
		trigger();
		var temp=dataString;
		var dataArray=dataString.split(" ");
		dataArray=dataArray.filter(e=>e);
		dataArray=paranthesesCheck(dataArray);
		document.getElementById("displayBox").value=temp;
		document.getElementById("display").value=recurse(dataArray);
		dataString="";
		operatorVariable="";
		condition=true;
	}
}

function recurse(dataArray)
{
	let temp="";
	
	
	if(dataArray.includes("("))
	{
		var start=dataArray.lastIndexOf("(");
		var end=dataArray.indexOf(")",start);
		var sub=dataArray.slice(start+1,end);
		dataArray.splice(start,end-start+1,recurse(sub));
		recurse(dataArray);
	}
	
	dataArray.includes('/')?temp='/':
	dataArray.includes('*')?temp='*':
	dataArray.includes('%')?temp='%':
	dataArray.includes('+')?temp='+':
	dataArray.includes('-')?temp='-':
	temp='';
	
	if(temp!="")
	{
		let pos=dataArray.indexOf(temp);
		let data1=dataArray[pos-1];
		let data2=dataArray[pos+1];
		var res=equalAction(data1,temp,data2).toString();
		dataArray.splice(pos-1,3,res);
		recurse(dataArray);
	}
	
	if(dataArray.length==1)
	{
		return dataArray[0];
	}
}

function parantheses(value)
{	
	dataString.charAt(dataString.length-1)=="."?value="":value;
	opStore();
	operatorVariable=value;
	if(value!=""&&condition)
	{
		paranthesesCount=value=="("?++paranthesesCount:paranthesesCount;
		value==")"?paranthesesCount!=0?--paranthesesCount:value="":"";
		dataString+=" "+value+" ";
	}
	document.getElementById("display").value=dataString;
}

function equalAction(data1,temp,data2)
{	
	var result=0;
	switch(temp)
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
				
			case "%":
				result=parseFloat(data1)%parseFloat(data2);
				break;
						
			default:
				console.log("default :"+operatorVariable);
		}	
	return result;
}

function opCheck()
{
	let temp=dataString.charAt(dataString.length-2);
	let temp1=dataString.charAt(dataString.length-1);
	if(dataString==""||temp=="("||temp1==".")
	{
		return false;
	}
	return true;
}

function opStore()
{
	if(operatorVariable!="")
	{
		if(operatorVariable!="("&&operatorVariable!=")")
		{	
			dataString+=" "+operatorVariable+" ";
		}
		operatorVariable="";
	}
}

function powerFunc(value)
{
	let data="";
	let count=0;
	let dataArray=dataString.split(" ");
	dataArray=dataArray.filter(e=>e);
	var len=dataArray.length;
	data=dataArray[len-1];
	if(data==")")
	{
		let tempArr=[];
		let temp="";
		for(var iter=len-1;iter>=0;iter--)
		{
			temp=dataArray.pop();
			temp==")"?++count:temp=="("?--count:count;
			tempArr.push(temp);
			if(count==0)
			{
				break;
			}
		}
		tempArr.reverse();
		data=recurse(tempArr);
	}
	else
	{
		dataArray.pop();
	}	
	data=parseFloat(data);
	
	let result=value=='x2'?data*data:
	value=='x3'?data*data*data:
	value=='xr2'?Math.sqrt(data):'';
	
	dataString=dataArray.toString();
	dataString=dataString.replaceAll(","," ");
	dataString+=" "+result;
}

function paranthesesCheck(dataArray)
{
	var len=dataArray.length;
	var output=[];
	for(var iter=0;iter<len;iter++)
	{
		let temp=dataArray[iter];
		if(temp=='(')
		{
			if(dataArray[iter-1]>=0 && dataArray[iter-1]<=9)
			{
				output.push('*');
			}
		}
		output.push(temp);
		if(temp==')')
		{
			if(dataArray[iter+1]>=0 && dataArray[iter+1]<=9)
			{
				output.push('*');
			}
		}
	}
	return output;
}


function trigger()
{
	document.getElementById("+").style.backgroundColor="#e8e6e6";
	document.getElementById("-").style.backgroundColor="#e8e6e6";
	document.getElementById("/").style.backgroundColor="#e8e6e6";
	document.getElementById("*").style.backgroundColor="#e8e6e6";
	document.getElementById("%").style.backgroundColor="#e8e6e6";
	document.getElementById("x2").style.backgroundColor="#e8e6e6";
	document.getElementById("x3").style.backgroundColor="#e8e6e6";
}





/*function commaSeparator(value)
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
}*/
