function getdate()
{
    var date= document.getElementById('date').value;
    document.getElementById('d').innerHTML=date;
}

function fun1()   // class of 8a
{
    var v1= document.getElementById('cs').innerHTML;
    document.getElementById('c').innerHTML= v1;   
    var studentnames=['Justin','Jack','Julie','Megan','Mia'];
    document.getElementById('name1').innerHTML=studentnames[0]
    document.getElementById('name2').innerHTML=studentnames[1]
    document.getElementById('name3').innerHTML=studentnames[2]
    document.getElementById('name4').innerHTML=studentnames[3]
    document.getElementById('name5').innerHTML=studentnames[4]

}
function fun2()  // class of 9b
{
    var v2=document.getElementById('cs1').innerHTML
    document.getElementById('c').innerHTML= v2
    var studentnames2=['George','Georgina','Alexa','Siri','Tesla']
    document.getElementById('name1').innerHTML=studentnames2[0]
    document.getElementById('name2').innerHTML=studentnames2[1]
    document.getElementById('name3').innerHTML=studentnames2[2]
    document.getElementById('name4').innerHTML=studentnames2[3]
    document.getElementById('name5').innerHTML=studentnames2[4]


}
function fun3()  // class of 10c
{
    var v3 = document.getElementById('cs2').innerHTML;
    document.getElementById('c').innerHTML=v3;
    var studentnames3=['Ratchet','Ash','Jhonny','Vin','Lucifer']
    document.getElementById('name1').innerHTML=studentnames3[0]
    document.getElementById('name2').innerHTML=studentnames3[1]
    document.getElementById('name3').innerHTML=studentnames3[2]
    document.getElementById('name4').innerHTML=studentnames3[3]
    document.getElementById('name5').innerHTML=studentnames3[4]

}

const update = ()=>{
    alert("The Attendance and Marks have been Updated...")
}

const add = ()=>{
    var newname = document.createElement('div');
    newname.innerText = ''
}
