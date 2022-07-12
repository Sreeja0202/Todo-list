



// Fetching data
fetch("https://jsonplaceholder.typicode.com/todos")
.then((data) =>{
    // console.log(data);
    return data.json();  
})
.then((objectData) =>
{
    // console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) =>
    {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td><input type="checkbox" id="item" onclick="count()"></td>
        <td>Remove <i class="bi bi-x-circle-fill remove_button"></i></td>
    </tr>`;

    })
    document.getElementById("table_body").innerHTML = tableData;
})

// fetching data ends


// llogin validation
let button = document.getElementById("button");
let username, password, message;
button.addEventListener('click',(e) =>
{
username = document.getElementById('username').value;
password = document.getElementById("password").value;

validateform(username, password, (message) =>
{
    alert(message);
}
);
})
let validateform = (username, password, callback) =>
{
   if(username == "" || password == "" )
   {
    callback("Please enter all details");
    return false;
   }
   else if(username != 'admin')
   {
    callback("Username incorrect!!!");
    return false;
   }
   else if(password != '12345')
   {
    callback("Password incorrect!!!");
    return false;
   }
   else if(username != 'admin' && password != '12345')
   {
    callback("Both Username and Password are incorrect");
    return false;
   }
   else
   {
    callback("Form is validated");
    window.location.href = "main.html";
    return true;
   }

}
// login validation ends    





// checkbox selecting (Select All) - starts

function checkAll(myCheckbox)
{   
    var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
    var count = 0;
    if(myCheckbox.checked == true)
    {
        checkboxes.forEach(function(checkbox)
        {
            checkbox.checked = true;
        });
    }
    else{
        checkboxes.forEach(function(checkbox)
        {
            checkbox.checked = false;
        });
    }
    
    // for(i=0;i<checkboxes.length;i++)
    // {
    //     // if(checkboxes[i].checked)
    //     // {
    //     //     count++;
    //     // }
    // }
}

// Select all end



function count()
{
    var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
    var count = 0;
    for(i=0;i<checkboxes.length;i++)
    {
        if(checkboxes[i].checked)
        {
            count++;
        }
    }
    if(count>=5)
    {
        alert("Congrats!!! 5 Tasks have been Successfully Completed");
    }

}
// // 
// var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
// var countd = 0;
// var count = new Promise(function(resolve)
// {
//     var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
// var countd = 0;
//     for(i=0;i<checkboxes.length;i++)
//     {
//         if(checkboxes[i].checked===true)
//         {
//             countd++;
//         }
//     }
//     if(countd>=5)
//     {
//         resolve("Congrats!!! 5 tasks have been completed.");
//     }
// })
// count.then(function(msg)
// {
//     alert(msg);
// })  tried promise but did not work
