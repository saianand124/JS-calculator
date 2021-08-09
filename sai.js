function submit()

{
    var Amount = document.getElementById("Amount").value;

    if(Amount == "" || Amount <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("Amount").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = Amount * years * rate / 100;
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML =  interest ;
}