function validateForm()
{
	var x = document.forms["login"]["text1"].value;
	var y = document.forms["login"]["text2"].value;
	if (x == "")
	{
		alert("Email or Phone-No must be filled out");
		return false;
	}
	else if(y == "")
	{
		alert("Password must be filled out");
		return false;
	}

	return true;
}

function validateRegisterForm()
{
    var firstName = document.getElementById( 'firstName' );
    var surName = document.getElementById( 'surName' );

    if(!firstName.value.trim().length)
    {
        firstName.innerHTML += '<div class="validation-error">First name is empty</div>';
    }
    else
    {
        
    }
}

function First_Name()
{
	alert("awefrgethy")
	var error = document.getElementById('firstname');
	
}