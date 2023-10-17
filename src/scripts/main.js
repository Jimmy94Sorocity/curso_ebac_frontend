$(document).ready(function() {
    $("form").on("submit", function(e) { 
        e.preventDefault();

        const nome_tarefa = $("#nome-tarefa").val(); 

        $(`<li>${nome_tarefa}</li>`).appendTo("ul"); 
        $("#nome-tarefa").val("");

        $("ul").on("click","li",function() {
            $(this).css("text-decoration", "line-through");
        })
    });
});