const fs = require('fs');

let list = fs.readFileSync("unsorted.txt", "utf-8").split('\r\n');
let result = [];

let chars = ["�", "-", "_", ".", ",", "?", "!", " "];

let id;

for (i = 0; i < list.length; i++) {
	
  let success = false;
		
  id = list[i];
	
  if(id.length < 3)
  {
    success = true;
	}
	
  if(result.includes(id.toLowerCase()))
  {
		success = true;
	}
	    
  chars.forEach(y => {
    if (id.includes(y))
    {
      success = true;
    }
  });
	
  if (!success)
  {
    fs.appendFileSync("sorted.txt", id.toLowerCase() + "\n");
		result.push(id);
		console.log(id.toLowerCase());
	}
}
