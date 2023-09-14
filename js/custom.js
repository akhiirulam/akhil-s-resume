
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

  // Form validation
  // Defining a function to display error message
  function printError(elemId, hintMsg) 
    {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    // Defining a function to validate form 
    function validateForm() 
    {
        // Retrieving the values of form elements 
        var name = document.contactForm.name.value;
        var email = document.contactForm.email.value;
        var mobile = document.contactForm.contact.value;
        
    
	    // Defining error variables with a default value
        var cfname = cfemail = cfcontact = true;
    
        // Validate name
        if(name == "") 
        {
            printError("cfname", "Please enter your name");
        } 
        else 
        {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false) 
            {
                printError("cfname", "Please enter a valid name");
            } 
            else 
            {
                printError("cfname", "");
                cfname = false;
            }
        }

        // Validate email address
        if(email == "") 
        {
            printError("cfemail", "Please enter your email address");
        } 
        else 
        {
            // Regular expression for basic email validation
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) 
            {
                printError("cfemail", "Please enter a valid email address");
            } 
            else
            {
                printError("cfemail", "");
                cfemail = false;
            }
        }

        // Validate mobile number
    if(mobile == "") {
        printError("cfcontact", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("cfcontact", "Please enter a valid 10 digit mobile number");
        } else{
            printError("cfcontact", "");
            cfcontact = false;
        }
    }
       
    
   // Prevent the form from being submitted if there are any errors
    if((cfname || cfemail || cfcontact) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name +  "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile+ "\n";
        
        // Display input data in a dialog box before submitting the form
       /* alert(dataPreview);*/
    }
};
