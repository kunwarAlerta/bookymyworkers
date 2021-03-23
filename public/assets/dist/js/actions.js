$(document).ready(function(){
    $('.form-signup').on('submit',function(e){
        e.preventDefault();
        var pass=$('#inputPassword').val();
        var cpass=$("#inputConfirmPassword").val();
            return pass !==cpass ?  false :true;
    });

    $('#search-category').on('change',function(){
        var searchCategory= $(this).val();
        console.log(searchCategory,"data")
        $.ajax('/category/'+searchCategory,   // request url
       {
        success: function (data, status, xhr) {
            console.log(data,"data")
            $('html').html(data)
       }
      });
    });
})


