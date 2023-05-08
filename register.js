function registration(){
    const fname1=document.getElementById('fname').value;
    const lname1=document.getElementById('lname').value;
    const r_no1=document.getElementById('r_no').value;
    const dob1=document.getElementById('dob').value;
    const contact1=document.getElementById('contact').value;
    const pass1=document.getElementById('pass1').value;
    const conpass1=document.getElementById('pass2').value;
    if(fname1=='')
    {
        document.getElementById('warn_fname').style.visibility='visible';
    }
    if(fname1!='')
    {
        document.getElementById('warn_fname').style.visibility='hidden';
    }
    if(lname1=='')
    {
        document.getElementById('warn_lname').style.visibility='visible';
    }
    if(lname1!='')
    {
        document.getElementById('warn_lname').style.visibility='hidden';
    }
    if(r_no1=='')
    {
        document.getElementById('warn_rno').style.visibility='visible';
    }
    if(r_no1!='')
    {
        document.getElementById('warn_rno').style.visibility='hidden';
    }
    if(dob1=='')
    {
        document.getElementById('warn_dob').style.visibility='visible';
    }
    if(dob1!='')
    {
        document.getElementById('warn_dob').style.visibility='hidden';
    }
    if(contact1=='')
    {
        document.getElementById('warn_cont').style.visibility='visible';
    }
    if(contact1!='')
    {
        document.getElementById('warn_cont').style.visibility='hidden';
    }
    if(pass1=='')
    {
        document.getElementById('warn_pass').style.visibility='visible';
    }
    if(pass1!='')
    {
        document.getElementById('warn_pass').style.visibility='hidden';
    }
    if(conpass1=='')
    {
        document.getElementById('warn_conpass').style.visibility='visible';
    }
    if(conpass1!='')
    {
        document.getElementById('warn_conpass').style.visibility='hidden';
    }
    if(fname1=='' || lname1=='' || r_no1=='' || dob1=='' || contact1=='' || pass1=='' || conpass1=='')
    {
        return false;
    }
    return false;
}