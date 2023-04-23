$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM

    var date = new Date()
    let display_date = "Date:"+date.toLocaleDateString()
    
    //Load HTML DOM
    $(document).ready(function(){
        $("#display_date").html(display_date)
    
    })


    //  write an event, when Submit button is clicked
    $('#review').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({
            type:"POST",
            URL:"/",
            data:JSON.stringify(display_date),
            data:"json",
            content:"application/json",
            success:function(Result)
            //  type of web request
            type : '',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result


                //  update the DOM elements


                //  show them

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})