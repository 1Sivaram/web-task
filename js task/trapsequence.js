/*function trap() 
{
	var map = new Map();
	var min, max, dataOne, dataTwo;
	min = 49;
	max = 90;
	dataTwo = 26;
	dataOne = min;
	let sumOfDigits=0;
	let tempVariable=0;
	
	while (dataOne <= max) 
	{
		tempVariable=dataOne;
		if(sumOfDigits>9)
		{
			tempVariable=sumOfDigits;
		}
		
		let condition = true;
		let temp1=tempVariable;
		let tempSum=0;
		
		while (temp1 > 0) 
		{
			let rem;
			rem = temp1 % 10;
			temp1 = parseInt(temp1/ 10);
			tempSum+=rem;
		}
		
		sumOfDigits=tempSum;
		
		if (tempVariable % dataTwo == 0 || dataTwo % tempVariable == 0 || sumOfDigits % dataTwo == 0 || dataTwo % sumOfDigits == 0) 
		{
			map.set(dataOne, dataTwo);
			dataTwo += 2;
			condition = false;
		}
		
		if (dataTwo > 3 && sumOfDigits <= 9 && condition) 
		{
			dataTwo--;
		}
		
		if(sumOfDigits > 9 &&condition)
		{
			tempVariable=sumOfDigits;
		}else
		{
			dataOne++;
			sumOfDigits=0;
		}
	}
	
	for (let pair of map) 
	{
		document.getElementById('para').innerHTML += pair + ". ";
	}
	document.getElementById("length").innerHTML = "Total pair count : " + map.size;

}



*/



function trap() 
{
	var map = new Map();
	var min, max, dataTwo;
	min = 200;
	max = 300;
	dataTwo=7;
	
	for(min;min<=max;min++) 
	{
		var dataOne=min;
		while(true)
		{
			if(dataOne%dataTwo==0||dataTwo%dataOne==0)
			{
				map.set(min,dataTwo);
				dataTwo+=2;
				break;
			}
			else
			{
				let sumOfDigits=0;
				let temp=dataOne;
				while(temp>0)
				{
					let rem=temp%10;
					temp=parseInt(temp/10);
					sumOfDigits+=rem;
				}
				if(dataOne<10)
				{
					if(dataTwo>3)
					{
						dataTwo--;
					}
					break;
				}
				dataOne=sumOfDigits;
			}
		}
		}
	for (let pair of map) 
	{
		document.getElementById('para').innerHTML += pair + ". ";
	}
	document.getElementById("length").innerHTML = "Total pair count : " + map.size;
}
