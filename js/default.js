$("#account-number-btn").click(
  function(){
    verifyNumber();
  }
);
$("#account-number-input").on("keydown",
function(e){
  if (e.which == 13) {
    e.preventDefault();
    verifyNumber();
  }
});
// WARNING: PASSWORD CHECKS
$("#account-password-btn").click(
  function(){
    verifyPassword();
  }
);
$("#account-password-input").on("keydown",
function(e){
  if (e.which == 13) {
    e.preventDefault();
    verifyPassword();
  }
});
// WARNING: TRANSFER CLOSE BUTTON



function checkAccountNumber(event) {
    if (event.which == 13 || event.keyCode == 13) {
        //code to execute here
        verifyNumber();
        return false;
    }
    return true;
};
function checkAccountPassword(event) {
    if (event.which == 13 || event.keyCode == 13) {
        //code to execute here
        verifyPassword();
        return false;
    }
    return true;
};

// WARNING: TRANSFER SECTION
$(".transfer-close-btn").click(
  function(){
    $(".all-inputs, .summary-txts").val("");
    $(".summary-txts").html("");
    $(".transfer-inner-sections").hide();
    $(".receiver-info").show();
    $(".transfer-section").hide();
    $(".color-default").css("color","#d9d9d9");
    $(".color-default").css("background","inherit");
  }
);
$(".transfer-nxt-btn").click(
  function(){
    verifyTransferInfo();

  }
);

function verifyNumber(){
  var accNumber;
  accNumber = $("#account-number-input").val();


  if (accNumber == "011623852957") {
    // proceed to next level two of security checks
    //hide show next security
    $("#account-number-btn").hide();
    $(".load-box").show();
    setTimeout(
      function(){
        $(".security-check-1").hide();
        $(".security-check-2").slideDown();
      }, 3000
    );
  } else {
    $("#security-check-1 #error-txt").html("Enter a valid account number");
    setTimeout(
      function(){
        $("#security-check-1 #error-txt").html("");
      }, 2000
    );
  }
}
var account = 00;
function verifyPassword(){
  var accPassword;
  accPassword = $("#account-password-input").val();


  if (accPassword == "wie1vv_ie1") {
    // proceed to next level two of security checks
    //hide show next security
    openThisAccount(".account-1");
  }else if (accPassword == "wie1vv_ie2") {
    // proceed to next level two of security checks
    //hide show next security
    openThisAccount(".account-2");
    account = 20;
  }
   else {
    $(".security-check-2 #error-txt").html("Incorrect Password");
    setTimeout(
      function(){
        $(".security-check-2 #error-txt").html("");
      }, 2000
    );
  }
}
function showBorderEffect(){
  setTimeout(
    function(){
      $(".loader-page img").css("border-color", "white");
    }, 2000
  );
}
function openThisAccount(whichAccount){
  $("#account-password-btn").hide();
  setTimeout(
    function(){
      $(".login-page").hide();
      $(".loader-page").show();
      setTimeout(
        function(){
          showBorderEffect();
          $(".loader-page").hide();
          $(whichAccount).fadeIn();
          $(".activity-section").slideDown('slow');
        },3000
      );
    }, 4500
  );
}
function verifyTransferInfo(){
  var bankName, accNumber, receiverName,swiftCode, amount;
  bankName = $(".bank-name-input").val();
  accNumber = $(".account-number-input").val();
  receiverName = $(".receiver-name-input").val();
  swiftCode = $(".swift-code-input").val();
  amount = $(".amount-input").val();
  if (bankName != ""|| accNumber != ""|| receiverName!=""||swiftCode!="" ||amount!="") {
    //verify whether inputs are appropriate
    if ($.isNumeric(accNumber)) {
      //LOAD PAGE FOR 1Minutes
      $(".receiver-step-one").css("color","green");
      setTimeout(
        function(){
          $(".loader-page").show();
          $(".loader-page-info").html("Please wait...");
        }, 1000
      );
      setTimeout(
        function(){
          $(".loader-page").hide();
          $(".receiver-info").hide();
          $(".amount-txt").html("$"+ amount);
          $(".receiverName-txt").html(receiverName);
          $(".bankName-txt").html(bankName);
          $(".accNumber-txt").html(accNumber);
          $(".summary-section").slideDown();
        }, 2000 // COMBAK: 40 seconds
      );
    }else {
      $(".receiver-info #error-txt").html("Incorrect account number.");
      setTimeout(
        function(){
          $(".receiver-info #error-txt").html("");
        }, 3000
      );
    }
  } else {
    //inputs are inappropriate
    $(".receiver-info #error-txt").html("fill all fields.");
    setTimeout(
      function(){
        $(".receiver-info #error-txt").html("");
      }, 3000
    );
  }
}
function confirmSecretCode(){
  var secretCode = $(".secret-code-input").val();
  if (secretCode == "01870") {
    //LOAD PAGE FOR 1Minutes
    $(".receiver-step-two").css("color","green");
    $(".line-step-two").css("background","green");
    setTimeout(
      function(){
        $(".loader-page").show();
        $(".loader-page-info").html("Processing transfer.");
        $(".loader-page-info").html("Processing transfer..");
        $(".loader-page-info").html("Processing transfer...");
        $(".loader-page-info").html("Processing transfer...");
      }, 1000
    );
    setTimeout(
      function(){
        $(".loader-page").hide();
        $(".summary-section").hide();
        $(".confirmed-section").slideDown();
      }, 2000 // COMBAK: 40 seconds
    );
  } else {
    $(".secret-code .error-txt").html("Incorrect code");
    setTimeout(
      function(){
        $(".secret-code .error-txt").html("");
      },2000
    );
  }
}


// WARNING: LINKS ON-CLCIK
function openTransferSection(){
  $(".menu-section").hide();
  $(".transfer-section").show();
}
function openEmailSection(){
  $(".menu-section").hide();
  $(".default-section").show();
}
function openTransactionSection(){
  $(".menu-section").hide();
  $(".transaction-section").show();
}
function openTransactionSectionX(){
  $(".menu-section").hide();
  $(".transaction-section").hide();
  $(".transaction-section-x").show();
}
function openMenuSection(){
  $(".menu-section").show();
}

function confirmEmailSection(){
  $(".default-section #error-txt").html("Incorrect Password/Email");
  setTimeout(
    function(){
      $(".default-section #error-txt").html("");
    }, 2000
  );
}
function closeEmailSection(){
  $(".default-section").hide();
}
function closeMenuSection(){
  $(".menu-section").hide();
}
function closeTransactionSection(){
  $(".transaction-section").hide();
  $(".transaction-section-x").hide();
}


$(window).bind('beforeunload', function(){
	return '>>>>>Before You Go<<<<<<<< \n Your custom message go here';
});
