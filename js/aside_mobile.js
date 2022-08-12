<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css">// 手机情况下侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}
Footer

