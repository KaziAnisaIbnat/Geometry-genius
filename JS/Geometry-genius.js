//                    Triangle
document.getElementById("triangleCalculateBtn").addEventListener('click',function(){
        const triangleInputCmOne = getInputFieldValue("t-calculate-cm-1");
    const triangleInputCmTwo = getInputFieldValue("t-calculate-cm-2");
    const triangleTotalCalculation = triangleInputCmOne * 1 * triangleInputCmTwo * 1;
    if(triangleInputCmOne*triangleInputCmTwo === 12){
        document.getElementById('t-calculate-total').innerText = triangleTotalCalculation;
           return triangleTotalCalculation;
        } else( triangleInputCmOne === " " || triangleInputCmTwo === " ");{
            alert('something is WRONG!! Tryy Again');
        }
        })
// clear and add
document.getElementById('clear-btn-1').addEventListener('click',(event) => {
    event.preventDefault()

    document.getElementById("t-calculate-cm-1").value = ""; 
    document.getElementById("t-calculate-cm-2").value = ""; 
})
function setInputValue1() {
    const inputOne = document.getElementById("t-calculate-cm-1");
    inputOne.value ="3";
    const inputTwo = document.getElementById("t-calculate-cm-2");
    inputTwo.value ="4";
}
// Convert cm2 to sq m.......
const convertButton = document.getElementById('convert-btn1');
 convertButton.addEventListener('click', function() {
     document.getElementById('t-calculate-total').innerText = "0.0012";
 })
//                     Rectangle
document.getElementById("rectangleCalculateBtn").addEventListener('click',function(){
    const rectangleInputCmOne = getInputFieldValue("r-calculate-cm-1");
    const rectangleInputCmTwo = getInputFieldValue("r-calculate-cm-2");
    const rectangleTotalCalculation = rectangleInputCmOne * 1 * rectangleInputCmTwo* 1;

    if(rectangleTotalCalculation === 35){
        document.getElementById('r-calculate-total').innerText = rectangleTotalCalculation;
           return rectangleTotalCalculation;
        } else( rectangleInputCmOne ==="" || rectangleInputCmTwo ===" ");{
            alert('something is WRONG!! Tryy Again');
        }
})

// clear and add
document.getElementById('clear-btn-2').addEventListener('click',(event) => {
    event.preventDefault()

    document.getElementById("r-calculate-cm-1").value = ""; 
    document.getElementById("r-calculate-cm-2").value = ""; 
})
function setInputValue2() {
    const inputOne = document.getElementById("r-calculate-cm-1");
    inputOne.value ="7";
    const inputTwo = document.getElementById("r-calculate-cm-2");
    inputTwo.value ="5";
}
// Convert cm2 to sq m.......
const convertButton2 = document.getElementById('convert-btn2');
 convertButton2.addEventListener('click', function() {
     document.getElementById('r-calculate-total').innerText = "0.0035";
 })
//                   Parallelogram
document.getElementById("parallelogramCalculateBtn").addEventListener('click',function(){
    const parallelogramInputCmOne = getInputFieldValue("p-calculate-cm-1");
    const parallelogramInputCmTwo = getInputFieldValue("p-calculate-cm-2");
    const parallelogramTotalCalculation = parallelogramInputCmOne * 1 * parallelogramInputCmTwo* 1;
    if(parallelogramTotalCalculation === 120){
        setInnerTex('p-calculate-total',parallelogramTotalCalculation);
           return parallelogramTotalCalculation;
        } else( parallelogramInputCmOne ==="" || parallelogramInputCmTwo ===" ");{
            alert('something is WRONG!! Tryy Again');
        }
})
// clear and add
document.getElementById('clear-btn-3').addEventListener('click',(event) => {
    event.preventDefault()

    document.getElementById("p-calculate-cm-1").value = ""; 
    document.getElementById("p-calculate-cm-2").value = ""; 
})
function setInputValue3() {
    const inputOne = document.getElementById("p-calculate-cm-1");
    inputOne.value ="10";
    const inputTwo = document.getElementById("p-calculate-cm-2");
    inputTwo.value ="12";
}
// Convert cm2 to sq m.......
const convertButton3 = document.getElementById('convert-btn3');
 convertButton3.addEventListener('click', function() {
     document.getElementById('p-calculate-total').innerText = "0.012";
 })
//                     Rhombus  
document.getElementById("rhombusCalculateBtn").addEventListener('click',function(){
    const rhombusInputCmOne = getInputFieldValue("rhom-calculate-cm-1");
    const rhombusInputCmTwo = getInputFieldValue("rhom-calculate-cm-2");
    const rhombusTotalCalculation =rhombusInputCmOne * 1 * rhombusInputCmTwo * 1;
    if(rhombusTotalCalculation === 128){
        setInnerTex('rhom-calculate-total',rhombusTotalCalculation);
           return rhombusTotalCalculation;
        } else( rhombusInputCmOne ==="" || rhombusInputCmTwo ===" ");{
            alert('something is WRONG!! Tryy Again');
        }
})
// clear and add
document.getElementById('clear-btn-4').addEventListener('click',(event) => {
    event.preventDefault()

    document.getElementById("rhom-calculate-cm-1").value = ""; 
    document.getElementById("rhom-calculate-cm-2").value = ""; 
})
function setInputValue4() {
    const inputOne = document.getElementById("rhom-calculate-cm-1");
    inputOne.value ="16";
    const inputTwo = document.getElementById("rhom-calculate-cm-2");
    inputTwo.value ="8";
}
// Convert cm2 to sq m.......
const convertButton4 = document.getElementById('convert-btn4');
 convertButton4.addEventListener('click', function() {
     document.getElementById('rhom-calculate-total').innerText = "0.0128";
 })
//                     Pentagon
document.getElementById("pentagonCalculateBtn").addEventListener('click',function(){
    const pentagonInputCmOne = getInputFieldValue("pen-calculate-cm-1");
    const pentagonInputCmTwo = getInputFieldValue("pen-calculate-cm-2");
    const pentagonTotalCalculation = pentagonInputCmOne * 1 * pentagonInputCmTwo * 1;
    if(pentagonTotalCalculation === 60){
        setInnerTex('pen-calculate-total',pentagonTotalCalculation);
           return pentagonTotalCalculation;
        } else( pentagonInputCmOne ==="" || pentagonInputCmTwo ===" ");{
            alert('something is WRONG!! Tryy Again');
        }
})
// clear and add
document.getElementById('clear-btn-5').addEventListener('click',(event) => {
    event.preventDefault()

    document.getElementById("pen-calculate-cm-1").value = ""; 
    document.getElementById("pen-calculate-cm-2").value = ""; })
function setInputValue5() {
    const inputOne = document.getElementById("pen-calculate-cm-1");
    inputOne.value ="6";
    const inputTwo = document.getElementById("pen-calculate-cm-2");
    inputTwo.value ="10";
}
// Convert cm2 to sq m.......
const convertButton5 = document.getElementById('convert-btn5');
 convertButton5.addEventListener('click', function() {
     document.getElementById('pen-calculate-total').innerText = "0.006";
 })
//                       Ellipse
document.getElementById("ellipseCalculateBtn").addEventListener('click',function(){
    const ellipseInputCmOne = getInputFieldValue("e-calculate-cm-1");
    const ellipseInputCmTwo = getInputFieldValue("e-calculate-cm-2");
    const ellipseTotalCalculation = ellipseInputCmOne * 1 * ellipseInputCmTwo * 1;
    if(ellipseTotalCalculation === 40){
        setInnerTex('e-calculate-total',ellipseTotalCalculation);
           return ellipseTotalCalculation;
        } else(ellipseInputCmOne ==="" || ellipseInputCmTwo ===" ");{
            alert('something is WRONG!! Tryy Again');
        }
})
// clear and add
document.getElementById('clear-btn-6').addEventListener('click',(event) => {
    event.preventDefault()
    document.getElementById("e-calculate-cm-1").value = ""; 
    document.getElementById("e-calculate-cm-2").value = ""; 
    
})
function setInputValue6() {
    const inputOne = document.getElementById("e-calculate-cm-1");
    inputOne.value ="10";
    const inputTwo = document.getElementById("e-calculate-cm-2");
    inputTwo.value ="4";
}
// Convert cm2 to sq m.......
const convertButton6 = document.getElementById('convert-btn6');
 convertButton6.addEventListener('click', function() {
     document.getElementById('e-calculate-total').innerText = "0.004";
 })

// Random Color All Card
const cardOneColors = document.getElementById("card1-colors")
cardOneColors.addEventListener("click",generateNiceColors);
function generateNiceColors(){
    let hex = '#' + Math.floor(Math.random()*167772).toString(16);
    cardOneColors.style.backgroundColor = hex;
}
const card2Colors = document.getElementById("card2-colors")
card2Colors.addEventListener("click",generateColors);
function generateColors(){
    let hex = '#' + Math.floor(Math.random()*167772).toString(16);
    card2Colors.style.backgroundColor = hex;
}
const card3Colors = document.getElementById("card3-colors")
card3Colors.addEventListener("click",generateColor);
function generateColor(){
    let hex = '#' + Math.floor(Math.random()*167772).toString(16);
    card3Colors.style.backgroundColor = hex;
}

function setInnerTex (id, value){
    document.getElementById(id).innerText = value;  
}
function getInputFieldValue(id){
const value = document.getElementById(id).value;
return parseFloat(value);
}