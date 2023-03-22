 function validateform() {

    var rname=document.myform.rname.value;  
    var rpassword=document.myform.rpassword.value; 
    var lname=document.myform.lname.value;  
    var lpassword=document.myform.lpassword.value;  
  
if (rname=="" || rname==null && lname=="" || lname==null){  
  alert("Name can't be blank");  
  return false;  
}else if(rpassword.length<6 && lpassword.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
 }