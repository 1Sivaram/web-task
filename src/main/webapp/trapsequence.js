function trap()
{
	var map=new Map();
	var num1,num2,a,b;
	num1=15;
	num2=45;
	b=50;
	a=num1;
	var flag=true;
	while(flag)
	{
		let condition=true;
		if(a==num2+1||a==0)
		{
			break;
		}
		if(a>9)
		{
			let e=a;
			
			while(e>9)
			{
				let c,d;
				c=e%10;
				d=parseInt(e/10);
				e=c+d;
				if(e==b||e%b==0||b%e==0||a==b||a%b==0||b%a==0)
				{
					map.set(a,b);
					b+=2;
					condition=false;
				}
				
			}
			
		}
		else if(a==b||a%b==0||b%a==0)
		{
			map.set(a,b);
			b+=2;
			condition=false;
		}
		
		if(condition)
		{
			if(b>3)
			{
				b--;
			}
		}
		a++;
	}
	
	for(let pair of map)
	{
		document.getElementById('para').innerHTML+=pair+". ";
	}
	document.getElementById("length").innerHTML="Total pair count : "+map.size;
	//alert(totalPair);

}