/* // write a function which output multipication table by 13
ekti function likhba jeta 13 er namoto (multiplication table)output hishabe dekhabe/ */


function namota(input){
  for (var i=1;i<=10;i++){
    var finalNamota=1*input;
    console.log(i,'*',input,'=',i*input);
  }
  return finalNamota;
}
var result=namota(13);