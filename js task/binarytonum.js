function convert()
{
	var data=document.getElementById("num").value;
	var numArray=[];
	var count=0;
	while(data>0)
	{
		if(data%2==0)
		{
			numArray.push(0);
		}
		else
		{
			numArray.push(1);
			count++;
		}
		data=parseInt(data/2);
	}
	numArray=numArray.reverse();
	for(var i=0;i<numArray.length;i++)
	{
		document.getElementById("ans").innerText+=numArray[i];
	}
	document.getElementById("count").innerText="Total number of 1's : "+count;
}