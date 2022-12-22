Ext.define("Financeiro.view.supplier.Form", {
    extend: "Ext.form.Panel",
    alias: "widget.supplier-form",

    items: [
        {
            xtype: "textfield",
            label: "Nome",
        },
        {
            xtype: "fieldcontainer",
            defaults: {
                flex: 1,
            },
            items: [
                {
                    xtype: "textfield",
                    label: "Telefone",
                    margin: "0 5 0 0",
                },
                {
                    xtype: "textfield",
                    label: "Email",
                },
            ],
        },
        {
            xtype: "fieldcontainer",
            defaults: {
                flex: 1,
            },
            items: [
                {
                    xtype: "textfield",
                    label: "CNPJ/CPF",
                    margin: "0 5 0 0",
                },
                {
                    xtype: "textfield",
                    label: "IE/RG",
                },
            ],
        },
        {
            xtype: "textfield",
            label: "CEP",
            width: "35%",
            triggers: [
                {
                    type: "search",
                    handler: "onSearchCep",
                },
            ],
        },
        {
            xtype: "fieldcontainer",
            defaults: {
                flex: 1,
            },
            items: [
                {
                    xtype: "textfield",
                    label: "Endereço",
                    margin: "0 5 0 0",
                },
                {
                    xtype: "textfield",
                    label: "Complemento",
                },
            ],
        },
        {
            xtype: "fieldcontainer",
            items: [
                {
                    xtype: "textfield",
                    label: "Bairro",
                    margin: "0 5 0 0",
                    flex: 2,
                },
                {
                    xtype: "textfield",
                    label: "Nº",
                    flex: 1,
                },
            ],
        },
        {
            xtype: "fieldcontainer",
            items: [
                {
                    xtype: "textfield",
                    label: "UF",
                    margin: "0 5 0 0",
                    flex: 1,
                },
                {
                    xtype: "textfield",
                    label: "Cidade",
                    flex: 2,
                },
            ],
        },
    ],
});
