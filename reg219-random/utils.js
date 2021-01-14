function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function logit(grp_id, user_id, event_text)
{
    $.ajax({
        url: $path_to_backend + 'logEvent.php',
        type: 'POST',
        data: {
            grp_id: grp_id,
            user_id: user_id,
            event: event_text
        }
    }).done(function(data, textStatus, jqXHR){
        //console.log(data);
        //console.log(textStatus);
    });
}

var myIP = 0;

function getIP()
{
    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
        myIP = (JSON.parse(JSON.stringify(data, null, 2))).ip;
        console.log(myIP);
    });
}

function ip2int(ip)
{
    return String(ip).split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
}

function int2ip(ipInt)
{
    return ( (ipInt>>>24) +'.' + (ipInt>>16 & 255) +'.' + (ipInt>>8 & 255) +'.' + (ipInt & 255) );
}