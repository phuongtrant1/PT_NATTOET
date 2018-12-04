$(document).ready(function(){
  $(document).on('input', '.ip', function(){
    var parent = $(this).parent();
    var lengMinIp = $(this).data('minLength');
     var lengMaxIp = $(this).data('maxLength');
    var valueIp = $(this).val().length;
    if(valueIp < lengMinIp || valueIp > lengMaxIp){
     
      if(parent.find('.error').length == 0){
        parent.append('<p class="error">Nhap toi thieu &nbsp' +lengMinIp+ ' va toi da' +lengMaxIp+ '&nbsp</p>')
         $(this).css('border','2px solid red');
      }
    }
    else{
      parent.find('.error').remove(); //text('')
       $(this).css('border','1px solid');
    } 
    
  })
})