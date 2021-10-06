
$("#contactUsForm").submit(function (e) {
    e.preventDefault();
    let form = document.getElementById('contactUsForm')
    let obj = {
        'Mobile': form.Mobile.value,
        'email': form.Email.value,
        'CompanyName': form.CompanyName.value,
        'tag': form.customer.value
    }
    if(form.customer.value=='Career'){
        obj['productType']=form.productType.value;
        obj['location']=form.location.value;
    }
    else{
       obj['Name']=form.Name.value;
       obj['message']=form.Query.value;
    }
    const url = "https://api.airtable.com/v0/appexm7OxlFqCwfHM/Table%201";
    fetch(url, {
        method: "POST",
        body: JSON.stringify({ "records": [{ "fields": obj }] }),
        headers: {
            Authorization: 'Bearer keyaGiocwRxwvuYuq',
            'Content-Type': "application/json"
        }
    }).then(
        response => {
            response.text();
        }
    ).then(data => {
        $('#exampleModal').modal('hide')
        document.getElementById('contactUsForm').reset()

    }).catch((error) => {
        console.log(error)
    });

});