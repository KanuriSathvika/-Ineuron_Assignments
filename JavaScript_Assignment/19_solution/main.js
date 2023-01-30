/**19. Create a countries.js file and store the countries name into this file,
 *  create a file web_techs.js and store the popular web technology names into 
 * this file. Access both file in a third file named main.js
 */
// import country from "./countries.js";
const country=require("./countries.js");
const webs=require("./web_tech.js");
console.log("Countries=",country);
console.log("Web_tech=",webs);
