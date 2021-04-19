

$(document).ready(function(){

    var headers = {
      'QB-Realm-Hostname': '{QB-Realm-Hostname}',
      'User-Agent': '{User-Agent}',
      'Authorization': '{Authorization}',
      'Content-Type': 'application/json'
  };

  
    $.ajax({
        url: 'https://api.quickbase.com/v1/reports?tableId=brdqbafdp',
        method: 'GET',
        dataType: 'JSON',
        success: function(response){

            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var clientname = response[n].label;
                var publishdate = response[8].label;
                var topic = response[37].label;
                var assigned = reponse[33].label;
                var contenturl = response[7].label;
                var contentdeliverable = reponse[23].label;

                var tr_str = "<tr>" +
                    "<td align='center'>" + clientname + "</td>" +
                    "<td align='center'>" + publishdate + "</td>" +
                    "<td align='center'>" + topic + "</td>" +
                    "<td align='center'>" + assigned + "</td>" +
                    "<td align='center'>" + contenturl + "</td>" +
                    "<td align='center'>" + contentdeliverable + "</td>" +
                    "</tr>";

                $("#datatable tbody").append(tr_str);
            }

        }
    });
});