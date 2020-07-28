$(function(){
    console.log('console logged from controller');
     //this code create dynamic table
    var tab="<table class='table'><thead><th>NAME</th><th>EMAIL</th><th>PHONE NUMBER</th><th>ACTIONS</th></thead><tbody>";
    tab+="<tr><td><input type='name' id='name' ></td>"+
    "<td><input type='email' id='email' ></td>"+
    "<td><input type='phone' id='phone' ></td>"+
    "<td><button class='btn-primary' id='addUser' >Add</button></td>"+
    "<td><button class='btn-info' id='updateUser'>Update</button></td>"+
    "<td><button class='btn-warning'>Clear</button></td></tr>";
    //this function excuted when a page loaded, to fetch data from server
    function getData(){
        var mydata=[];
        $.ajax({
            type:'GET',
            url: window.location + 'api/users',
            success: function(response){
                console.log('i get the data i requested');
                console.log('response',response);
                response.forEach(element => mydata.push(element));
                console.log('mydata',mydata); 
                for(var i= 0; i < mydata.length; i++){
                    tab +="<tr><td>" +
                    mydata[i].name +
                    "</td><td>" +
                    mydata[i].email +
                    "</td><td>" +
                    mydata[i].phone +
                    "</td><td><button class='btn-info' id='viewUser'>View</button></td>"+
                    "</td><td><button class='btn-danger'>Delete</button></td></tr>";
                }
                tab += "</tbody></table>";
                document.getElementById("tableArea").innerHTML = tab;
            },
            error: function(err){
                console.log(err);
            }
        });
        console.log('mydata->',mydata);
        mydata.forEach(item => console.log(item));
       
    }
    getData();
    
    //this code excuted when the add button clicked
    $('#addUser').click(function(event){
        console.log('add button clicked');
        event.preventDefault();
        var enteredData = {
            name : $('#name').val(),
            email : $('#email').val(),
            phone : $('#phone').val()
        }
        console.log('initialy'+enteredData.name, enteredData.email);
        $.ajax({
            type:'POST',
            url: window.location + 'api/add',
            contentType:'application/json',
            data: JSON.stringify(enteredData),
            dataType:'json',
            success:function(user){
                // $("#result").html("<h4><strong>Success request</strong></h4>");
                console.log(user.name);
            },
            error :function(err){
                console.log("error occured");
                console.log(err);
            }
        });
    });

    //this code executed when update button clicked
    $('#updateUser').click(function(event){
        event.preventDefault();
        console.log('update button clicked');

    });

    //this button executed when view button clicked
    $('#viewUser').click(function(event){
        event.preventDefault();
        console.log(' button clicked');

    });
});