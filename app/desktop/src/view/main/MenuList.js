Ext.define("Financeiro.view.main.MenuList", {
    extend: "Ext.list.Tree", // renderiza os menus
    alias: "widget.menulist",

    bind: {
        store: "{menu}",
    },
});
