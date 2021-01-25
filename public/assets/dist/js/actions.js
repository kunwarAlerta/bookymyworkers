$(document).ready(function(){
    $('.form-signup').on('submit',function(e){
        e.preventDefault();
        var pass=$('#inputPassword').val();
        var cpass=$("#inputConfirmPassword").val();
            return pass !==cpass ?  false :true;
    });

    $('#search-category').on('change',function(){
        var searchCategory= $(this).val();
        console.log(searchCategory)
        $.ajax('/category/'+searchCategory,   // request url
       {
        success: function (data, status, xhr) {// success callback function
            console.log(data)
       }
      });
    });
})


