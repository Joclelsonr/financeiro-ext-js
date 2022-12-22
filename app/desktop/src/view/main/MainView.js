Ext.define("Financeiro.view.main.MainView", {
    extend: "Ext.Container", // container forma a tela inicial
    xtype: "mainview",

    controller: "mainviewcontroller", // controla as funcoes
    viewModel: {
        type: "mainviewmodel", // modela os dados do back-end
    },
    layout: "fit", //  layout fit estica a tela toda

    items: [
        {
            xtype: "main-header", // componente filho header Mainheader
            docked: "top",
            reference: "headerview",
        },
        {
            xtype: "nav-panel", // componente filho menu NavPanel
            docked: "left",
            width: 250,
            reference: "navview",
        },
        {
            xtype: "center-container", // componente filho centro Center
        },
    ],
});
