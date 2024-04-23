function generate(){
    var invoiceId = document.getElementById("invoiceIdInput").value;
    document.getElementById("invoiceIdOut").innerHTML = "#" + invoiceId;

    var name = document.getElementById("nameInput").value;
    document.getElementById("nameOut").innerHTML = name;

    var phoneNumber = document.getElementById("phoneNumberInput").value;
    document.getElementById("phoneNumberOut").innerHTML = phoneNumber;

    var vehicle = document.getElementById("vehicleInput").value;
    document.getElementById("vehicleOut").innerHTML = vehicle;

    var klNo = document.getElementById("klNoInput").value;
    document.getElementById("klNoOut").innerHTML = klNo;

    var date = document.getElementById("dateInput").value;
    document.getElementById("dateOut").innerHTML = date;

    var row1Description = document.getElementById("row1DescriptionInput").value;
    document.getElementById("row1DescriptionOut").innerHTML = row1Description;

    

    var row1Qty = document.getElementById("row1QtyInput").value;
    document.getElementById("row1QtyOut").innerHTML = row1Qty;

    var row1CFee = document.getElementById("row1CFeeInput").value;
    document.getElementById("row1CFeeOut").innerHTML = row1CFee;

    var row1Total = document.getElementById("row1TotalInput").value;
    document.getElementById("row1TotalOut").innerHTML = row1Total;

    // 

    var row2Description = document.getElementById("row2DescriptionInput").value;
    document.getElementById("row2DescriptionOut").innerHTML = row2Description;

    var row2Qty = document.getElementById("row2QtyInput").value;
    document.getElementById("row2QtyOut").innerHTML = row2Qty;

    var row2CFee = document.getElementById("row2CFeeInput").value;
    document.getElementById("row2CFeeOut").innerHTML = row2CFee;

    var row2Total = document.getElementById("row2TotalInput").value;
    document.getElementById("row2TotalOut").innerHTML = row2Total;

    //

    var row3Description = document.getElementById("row3DescriptionInput").value;
    document.getElementById("row3DescriptionOut").innerHTML = row3Description;

    var row3Qty = document.getElementById("row3QtyInput").value;
    document.getElementById("row3QtyOut").innerHTML = row3Qty;

    var row3CFee = document.getElementById("row3CFeeInput").value;
    document.getElementById("row3CFeeOut").innerHTML = row3CFee;

    var row3Total = document.getElementById("row3TotalInput").value;
    document.getElementById("row3TotalOut").innerHTML = row3Total;

    // 

    var row4Description = document.getElementById("row4DescriptionInput").value;
    document.getElementById("row4DescriptionOut").innerHTML = row4Description;

    var row4Qty = document.getElementById("row4QtyInput").value;
    document.getElementById("row4QtyOut").innerHTML = row4Qty;

    var row4CFee = document.getElementById("row4CFeeInput").value;
    document.getElementById("row4CFeeOut").innerHTML = row4CFee;

    var row4Total = document.getElementById("row4TotalInput").value;
    document.getElementById("row4TotalOut").innerHTML = row4Total;

    // 

    var row5Description = document.getElementById("row5DescriptionInput").value;
    document.getElementById("row5DescriptionOut").innerHTML = row5Description;

    var row5Qty = document.getElementById("row5QtyInput").value;
    document.getElementById("row5QtyOut").innerHTML = row5Qty;

    var row5CFee = document.getElementById("row5CFeeInput").value;
    document.getElementById("row5CFeeOut").innerHTML = row5CFee;

    var row5Total = document.getElementById("row5TotalInput").value;
    document.getElementById("row5TotalOut").innerHTML = row5Total;

    //

    var subTotal = Number.parseInt(row1Total) + Number.parseInt(row2Total) + Number.parseInt(row3Total) + Number.parseInt(row4Total) + Number.parseInt(row5Total);
    document.getElementById("subTotalOut").innerHTML = subTotal;

    // 

    var tax = document.getElementById("taxInput").value;
    document.getElementById("taxOut").innerHTML = tax + "%";

    // 

    var notes = document.getElementById("notesInput").value;
    document.getElementById("notesOut").innerHTML = notes;

    // 

    var total = Number.parseInt(subTotal) * Number.parseInt(tax) / 100;
    var final = Number.parseInt(total) + Number.parseInt(subTotal);
    document.getElementById("totalOut").innerHTML = final;
}



console.log("Script ideled");



function printPage(){
    var body = document.getElementById("body").innerHTML;
    var data = document.getElementById("content").innerHTML;
    
    document.getElementById("body").innerHTML = data;
    window.print();
    document.getElementById("body").innerHTML = body;

}