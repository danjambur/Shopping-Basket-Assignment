// Console log fix
if (!window.console) console = {log: function() {}};

$(document).ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});