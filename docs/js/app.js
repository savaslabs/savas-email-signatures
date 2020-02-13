$(function() {

  let saveFile = (name, type, data) => {
      if (data !== null && navigator.msSaveBlob)
          return navigator.msSaveBlob(new Blob([data], { type: type }), name);
      var a = $("<a style='display: none;'/>");
      var url = window.URL.createObjectURL(new Blob([data], {type: type}));
      a.attr("href", url);
      a.attr("download", name);
      $("body").append(a);
      a[0].click();
      window.URL.revokeObjectURL(url);
      a.remove();
  };

  $('#submit').click(function(e) {
    e.preventDefault();
    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    let title = $('#title').val();

    let signature = $('#signature').html();
    signature = signature.replace('FIRSTNAME', firstname);
    signature = signature.replace('LASTNAME', lastname);
    signature = signature.replace('TITLE', title);
    signature = signature.replace('FIRSTNAME', firstname.toLowerCase().replace(' ','-'));
    signature = signature.replace('LASTNAME', lastname.toLowerCase().replace(' ','-'));

    saveFile(
      `signature_${firstname.toLowerCase().replace(' ','-')}_${lastname.toLowerCase().replace(' ','-')}.html`,
      'text/html',
      signature
    );

  })

});
