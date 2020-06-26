document.getElementById("show_menu_item").onclick = function () 
{
    // Lấy danh sách checkbox
    var checkboxes = document.getElementsByName('check_hidden_show');

    // Lặp và thiết lập checked
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = true;
    }
};
 
// Chức năng bỏ chọn hết
document.getElementById("hidden_menu_item").onclick = function () 
{
    // Lấy danh sách checkbox
    var checkboxes = document.getElementsByName('check_hidden_show');

    // Lặp và thiết lập Uncheck
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
};


$(document).mouseup(function(e) 
{
    var container = $("#neu__menu_search__item__size__form_search");
 
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        document.getElementsByName("neu__menu_search__item__size__form_search").style.display = "none";
    }
});