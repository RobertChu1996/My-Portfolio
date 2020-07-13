var skills = {
    ht: 85,
    jq: 70,
    ja: 65,
    re: 70,
    ph: 35,
    sw: 30,
    git: 75
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $('.' + key);
  
    skillbar.animate(
    {
      width: value + "%"
    },
    3000,
    function() {
      $(".speech-bubble").fadeIn();
    }
    );
  });
  