function init()
{
    var kortfarve;
    var vaerdi;
    var resultat;


    var kortnummer = parseInt(prompt("Hvilket kortnummer vil du se?"));
	
	console.log("kortnummer=" + kortnummer);


    if(kortnummer <= 13)
    {
        kortfarve ="Kloer";
        vaerdi = kortnummer;
    }
    else if(kortnummer >13 && kortnummer <=26)
	{
        kortfarve ="Hjerter";
		vaerdi = (kortnummer - 13);
    }	
    else if(kortnummer >26 && kortnummer <=39)
	{
        kortfarve ="Spar";
		vaerdi = (kortnummer - 26);
    }
    else if(kortnummer >39 && kortnummer <=52)
	{
        kortfarve ="Ruder";
		vaerdi = (kortnummer - 39);
    }
    else
    {
        alert("Ikke flere spillekort")
    }

    console.log(vaerdi)

    if(vaerdi == "1")
    {
        vaerdi = ("ES")
    }

    if(vaerdi == "11")
    {
        vaerdi = ("Knight")

    }

    if(vaerdi == "12")
    {
        vaerdi = ("Dame")

    }
    
    if(vaerdi == "13")
    {
        vaerdi = ("Konge")

    }
    


    resultat = kortfarve + " " + vaerdi;
    document.getElementById("viskort").innerHTML = resultat;
}

// fortæller browseren at funktionen init skal køres når al HTML er loaded 
document.addEventListener("DOMContentLoaded", init, false);


