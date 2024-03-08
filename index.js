
function Sendmail(){
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_e86aqlb","template_hbt2xlk", params).then(function(res){
        alert("Success!"+ res.status);
    })
}