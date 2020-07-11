console.log("Works");

$(document).ready(function() {
      $(".submit").click(function(event) {
            console.log("button Clicked");


            var name = $(".name").val()
            var email = $(".email").val()
            var subject = $(".subject").val()
            var message = $(".message").val()
            var status = $(".status")
            status.empty()

            if (email.length > 5 && email.includes('@') && email.include('.')) {
              status.append( < div > Email is valid < /div>)
              }
              else {
                event.preventDefault()

                status.append( < div > Email is valid < /div>)    }
                })
            })
