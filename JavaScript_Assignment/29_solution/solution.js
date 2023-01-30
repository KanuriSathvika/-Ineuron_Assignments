/**29. Write a javascript program which takes the input of filename as string
 *  and prints the extension of the file in the console.
 */
const prompt=require("prompt-sync")();
const input=prompt("Enter the filename with extension:");
let index=input.lastIndexOf(".");
console.log(input.slice(index+1));

