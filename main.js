iframe_template =(id)=>`<iframe id="calculator" src="${id}.html" frameborder="1.5cm"></iframe>`;
function changeCalculator(id){
    var tem=document.getElementById(id);
    var clon = tem.content.cloneNode(true);
    var Vcal=document.getElementById("Visiblecalculator");
    Vcal.removeChild(Vcal.firstElementChild);
    Vcal.appendChild(clon);
}
//toNormal=()=>changeCalculator("normal_calculator");
//toSci=()=>changeCalculator("scientific_calculator");
//toPro=()=>changeCalculator("programmers_calculator");
//toConv=()=>changeCalculator("conversion_calculator");