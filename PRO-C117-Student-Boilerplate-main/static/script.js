$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date = new Date()
    let display_date= "Date:" + date.toLocaleDateString()
    
    //Load HTML DOM
    $(document).ready(function () {
        $("#display_date").html(display_date)
    })
    



    //  write an event, when Submit button is clicked
    $('#submit_button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('#text').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'customer_review' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

               
                // Result Received From Flask ----->JavaScript
                sentiment = result.data.sentiment
                path = result.data.path

                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(sentiment)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', path);
                $('#emo_img_url').css("display", "block");

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