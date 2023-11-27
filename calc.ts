
const result =  document.getElementById('res');

function sum() : void{
var num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
var num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
   var ans = num1+num2;
   if(result){
    result.innerHTML = ans.toString();
   }
}
function sub() : void{
    var num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
    var num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
       var ans = num1-num2;
       if(result){
        result.innerHTML = ans.toString();
       }
    }

function mul() : void{
        var num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
        var num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
           var ans = num1*num2;
           if(result){
            result.innerHTML = ans.toString();
           }
        }

function div() : void{
            var num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
            var num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
               var ans = num1/num2;
               if(result){
                result.innerHTML = ans.toString();
               }
            }