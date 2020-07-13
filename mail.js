$(document).ready(function() {
    $(".submit").click(function(event) {
          console.log("button Clicked");


          var name = $(".Name").val()
          var email = $(".Email").val()
          var message = $(".Message").val()
          var status = $(".status")
          status.empty()

          if (email.length > 5 && email.includes('@') && email.includes('.')) {
            // status.append( <div> Email is valid </div>)
              console.log("Email valid");
            }
            else {
              event.preventDefault()

              // status.append( < div > Email is valid < /div>)
              console.log("Email not valid");
 }
              })
          });
