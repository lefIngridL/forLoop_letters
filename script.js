// Model
const app = document.getElementById('app');
let counterA=0;
    let counterE=0;
    let counterI=0;
    let counterO=0;
    let counterU=0;
    let counterY=0;
    let counterÆ=0;
    let counterØ=0;
    let counterÅ=0;

let counterA2=0;
    let counterE2=0;
    let counterI2=0;
    let counterO2=0;
    let counterU2=0;
    let counterY2=0;
    let counterÆ2=0;
    let counterØ2=0;
    let counterÅ2=0;
let myString = 'en stor rød hund hoppet over en liten bekk';
let vokaler = ['a','e','i','o', 'u','y','æ','ø','å'];
let input;
let input2;
let newString;
let newString2;
let writeString='';
//let result = myString.match("stor");
// View
updateView();
function updateView(){
    html = /*html*/ `
    <div> letters
    <div id="Letters"> </div>
    <button onclick="printLetters('Hei på deg')">Print letters </button>
    </div>
    <h1>Metode 1</h1>
    <div id="Take1">
    <input type="button" id="choice" value="Velg setning" onclick="strSelector()">
    <input type="button" id="start" value="Start telling" onclick="findCommonElement(vokaler, input)">
    <input type="button" id="reset" value="Start på nytt" onclick="resetFunction()">
    <input type="text" id="input" value=" "> 
    <div id="str">Setningen er: </div>
    <br>
    <div id="A">CounterA: ${counterA}</div>
    <div id="E">CounterE: ${counterE}</div>
    <div id="I">CounterI: ${counterI}</div>
    <div id="O">CounterO: ${counterO}</div>
    <div id="Y">CounterY: ${counterY}</div>
    <div id="Æ">CounterÆ: ${counterÆ}</div>
    <div id="Ø">CounterØ: ${counterØ}</div>
    <div id="Å">CounterÅ: ${counterÅ}</div>
    </div>
    
 <h1>Metode 2</h1>   
<div id="Take2">
    <input type="button" id="choice2" value="Velg setning" onclick="strSelector2()">
    <input type="button" id="start2" value="Start telling" onclick="findCommonElement2(vokaler, input2)">
    <input type="button" id="reset2" value="Start på nytt" onclick="resetFunction()">
    <input type="text" id="input2" value=" "> 
    <div id="str2">Setningen er:  </div>
    <br>
    
    <div>${writeString}</div>
</div>
    
    

    `;
    app.innerHTML = html;
}

// Controler

// Function definition with passing two arrays
function findCommonElement(array1, array2) {

	// Loop for array1
	for (let i = 0; i < array1.length; i++) {

		// Loop for array2
		for (let j = 0; j < array2.length; j++) {

			// Compare the element of each and
			// every element from both of the
			// arrays
			if (array1[i] === array2[j]) {
                //console.log(array2[j]);
                if( array2[j] == 'a') {
                    counterA++;
                    //console.log(counterA);
                    document.querySelector("#A").innerHTML=`CounterA: ${counterA}`;
                }
                else if( array2[j] == 'e') {
                    counterE++;
                    //console.log(counterE);
                    document.querySelector("#E").innerHTML=`CounterE: ${counterE}`;
                }
                else if( array2[j] == 'i') {
                    counterI++;
                    //console.log(counterI);
                    document.querySelector("#I").innerHTML=`CounterI: ${counterI}`;
                }
                else if( array2[j] == 'o') {
                    counterO++;
                    //console.log(counterO);
                    document.querySelector("#O").innerHTML=`CounterO: ${counterO}`;
                }
                else if( array2[j] == 'y') {
                    counterY++;
                    //console.log(counterY);
                    document.querySelector("#Y").innerHTML=`CounterY: ${counterY}`;
                }
                else if( array2[j] == 'æ') {
                    counterÆ++;
                    //console.log(counterÆ);
                    document.querySelector("#Æ").innerHTML=`CounterÆ: ${counterÆ}`;
                }
                else if( array2[j] == 'ø') {
                    counterØ++;
                    //console.log(counterØ);
                    document.querySelector("#Ø").innerHTML=`CounterØ: ${counterØ}`;
                }
                else if( array2[j] == 'å') {
                    counterÅ++;
                    //console.log(counterÅ);
                    document.querySelector("#Å").innerHTML=`CounterÅ: ${counterÅ}`;
                }
                document.querySelector("#str").innerHTML = `Setningen er: ${array2}`;
				// Return if common element found
				//return true;
                
			}
		}
	}

	// Return if no common element exist
	return false;
}



function strSelector() {
    input = document.querySelector("#input").value;
    newString = document.querySelector("#str");
    newString.innerHTML += input;
    console.log(input);

}

function resetFunction() {
    location.reload();
}


//Metode 2?
let someString='';
function findCommonElement2(Array, someString) {
 for(let l=0; l<= someString.length; l++) {
    if(someString.charAt(l) == 'a') {
        counterA2++;
        console.log(someString.charAt(l));
    }
    if(someString.charAt(l) == 'e') {
        counterE2++;
        console.log(someString.charAt(l));

    }
    if(someString.charAt(l) == 'i') {
        counterI2++;
        console.log(someString.charAt(l));
        
    }
    if(someString.charAt(l) == 'o') {
        counterO2++;
        console.log(someString.charAt(l));
        
    }
    if ( someString.charAt(l) == 'u') {
        counterU2++;
        console.log(someString.charAt(l));
        
    }
    if ( someString.charAt(l) == 'y') {
        counterY2++;
        console.log(someString.charAt(l));
        
    }
    if ( someString.charAt(l) == 'æ') {
        counterÆ2++;
        console.log(someString.charAt(l));
        
    }
    if ( someString.charAt(l) == 'ø') {
        counterØ2++;
        console.log(someString.charAt(l));
        
    }
    if ( someString.charAt(l) == 'å') {
        counterÅ2++;
        console.log(someString.charAt(l));
        
    }
    
}   
writeString += '<li>' + 'counterA2 a: ' + counterA2 + '</li>';
writeString += '<li>' + 'counterE2 e:' + counterE2 + '</li>';
writeString += '<li>' + 'counterI2 i:' + counterI2 + '</li>';
writeString += '<li>' + 'counterO2 o:' + counterO2 + '</li>';
writeString += '<li>' + 'counterU2 u:' + counterU2 + '</li>';
writeString += '<li>' + 'counterY2 y:' + counterY2 + '</li>';
writeString += '<li>' + 'counterÆ2 æ:' + counterÆ2 + '</li>';
writeString += '<li>' + 'counterØ2 ø:' + counterØ2 + '</li>';
writeString += '<li>' + 'counterÅ2 å:' + counterÅ2 + '</li>';
updateView();
}

function strSelector2() {
    input2 = document.querySelector("#input2").value;
    newString2 = document.querySelector("#str2");
    newString2.innerHTML += input2;
    console.log(input2);

}


function printLetters(inputString) { 
    let text= '';
    let element;
    for(let index=0; index<=inputString.length; index++) {
        text=text + inputString.charAt(index) + ' ';
    } 
        element = document.querySelector("#Letters");
        element.innerHTML += text;
        console.log(text, element);
    }

    //eksempel på en string med forskjellige vokaler












    
