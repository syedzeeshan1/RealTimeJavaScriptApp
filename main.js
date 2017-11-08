function name_trim(str)
{
    str = str.replace(/^\s+|\s+$/g,'')
    document.getElementById("name-trim").innerHTML = str;
}
// validate email
function email_validate(email)
{
  
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
        document.getElementById("error-email").innerHTML    = "<span>Email address is not valid yet.</span>";
    }
    else
    {
        document.getElementById("error-email").innerHTML	= "<span>Thanks, you have entered a valid Email address!</span>";	
    }
}
function checkPhone(phone)
{
    var regPhone = /^[0-9]{10}$/;
    if(regPhone.test(phone) == false)
    {
        document.getElementById("error-phone").innerHTML    = "<span>Mobile Number is not valid yet.</span>";
    }
    else
    {
        document.getElementById("error-phone").innerHTML    = "<span>Thanks, you have entered a valid Phone Number.</span>";
    }
}
var i;
var count = 6;
var array = new Array;
var newObj;

function add_update(event)
{
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var yesterday = document.getElementById("yesterday").value;
    var today = document.getElementById("today").value;
    var impediments = document.getElementById("impediments").value;
    var after_add = document.getElementById('after_add');
    newObj ={
        "name":name,
        "email":email,
        "phone":phone,
        "yesterday":yesterday,
        "today":today,
        "impediments":impediments
    };
    for (var k in newObj) { 
        array.push(newObj[k]);
    }
    var tr = document.createElement('tr');
    tr.setAttribute("id","Row");
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var name = document.createElement('name');
    var email = document.createElement('email');
    var phone = document.createElement('phone');
    var yesterday = document.createElement('yesterday');
    var today = document.createElement('today');
    var impediments = document.createElement('impediments');
    td1.appendChild(name);
    td2.appendChild(email);
    td3.appendChild(phone);
    td4.appendChild(yesterday);
    td5.appendChild(today);
    td6.appendChild(impediments);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    after_add.appendChild(tr);
    text="<tr>";
    for(i=1;i<=count;i++)
    {
        text+="<td>"+array[i-1]+"</td>";
        if((i%6==0)&&(i!=0))
        {
            text+="</tr>";
        }
    }
    document.getElementById("after_add").innerHTML =text;
    count=count+6;

    document.forms['add'].reset()
    
}
function remove_update(event)
{
    event.preventDefault();
    let fc = after_add.lastChild;
    
    after_add.removeChild( fc );
    
    fc = after_add.firstChild;
    Len = array.length-6;
    array.splice(0, Len);
    count=count-6;

}