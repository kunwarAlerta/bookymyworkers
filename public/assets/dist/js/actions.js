$(document).ready(function(){
    $('.form-signup').on('submit',function(e){
        e.preventDefault();
        var pass=$('#inputPassword').val();
        var cpass=$("#inputConfirmPassword").val();
            return pass !==cpass ?  false :true;
    });

})