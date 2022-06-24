    function rechne() {
    let zahl1=0, zahl2=0, ergebnis=0;
    
    zahl1=document.getElementById("zahl1").value;
    zahl2=document.getElementById("zahl2").value;
    
    if(document.getElementById("plus").checked){
        ergebnis = 1*zahl1 + 1*zahl2;
    }
    else if(document.getElementById("minus").checked){
        ergebnis = zahl1 - zahl2;
    }
    else if(document.getElementById("mal").checked){
        ergebnis = zahl1 * zahl2;
    }
    else if(document.getElementById("dividiert").checked){
        ergebnis=zahl1/zahl2;
    }
        
        document.getElementById("ergebnis").innerHTML = "<div class='form-group'><label for=''></label><input type='text' class='form-control' id='z' readonly placeholder='Ergebnis = " + ergebnis + "'></div>";
}

function fakultaet() {
    var erg=1, fakultaet=1;
    
    fakultaet = document.getElementById("fakul").value;
        
    if(fakultaet==0){
        erg=1;
    }
    else {
        for(var i=1; i<=fakultaet; i++){
                erg=erg*i;
            }
    }
        
        document.getElementById("erg").innerHTML = "<div class='form-group'><label for=''></label><input type='text' class='form-control' id='f' readonly placeholder='Ergebnis = " + erg + "'></div>";
}