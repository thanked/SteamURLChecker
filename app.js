const request = require('request');
const colors = require('colors');
// const opn = require('opn');
const fs = require('fs');

let list = fs.readFileSync("input.txt", "utf-8").split('\r\n');
let result = [""];

let chars = ["�", "-", "_", ".", ",", "?", "!", " "];

let i = -1;
let id;
let url;
let token = "YOUR_STEAM_API_TOKEN"

let interval = setInterval(function() {
  i++;
	
  if (i >= list.length)
  {
    return clearInterval(interval);
  }

	id = list[i];
	url = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' + token + '&vanityurl=' + id;

  request(url, { json: true }, (error, res, body) => {
    if (error)
    {
      return console.log(error);
    }
	  
    if (body.response.message === "No match")
    {
      return NotTaken(id);
    }
    else
    {
      return Taken(id);
    }
	});
}, 3000);

function NotTaken(id)
{
  console.log(colors.bgGreen(id));
  fs.appendFileSync("output.txt", id + "\n");
  result.push(id);
  //opn('http://steamcommunity.com/id/' + id, { app: ['C:/Program Files/Google/Chrome/Application/chrome.exe'] });
}

function Taken(id)
{
  console.log(colors.bgRed(id));
}
