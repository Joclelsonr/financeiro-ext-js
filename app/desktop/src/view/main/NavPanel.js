Ext.define("Financeiro.view.main.NavPanel", {
    extend: "Ext.Panel", // componente que renderiza os menus
    alias: "widget.nav-panel",
    title: "Menu",

    shadow: true, // sombra
    margin: "0 5 0 0", // margem top=0 right=5 bottom=0 left=0

    layout: "fit", // layout que estica tela toda

    items: [
        {
            xtype: "menulist", // filho que mostra os menus
        },
    ],
});
