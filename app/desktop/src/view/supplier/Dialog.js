Ext.define("Financeiro.view.supplier.Dialog", {
    extend: "Ext.Dialog",
    title: "Cadastro de Fornecedor",

    layout: "fit",
    width: 600,
    height: 570,

    closable: true,
    maximizable: true,

    items: [
        {
            xtype: "supplier-form",
        },
        {
            xtype: "toolbar",
            docked: "bottom",
            layout: {
                layout: "hbox",
                pack: "end",
            },
            items: [
                {
                    xtype: "button",
                    text: "Salvar",
                },
            ],
        },
    ],
});
