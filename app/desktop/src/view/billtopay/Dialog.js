Ext.define('Financeiro.view.billtopay.Dialog', {
    extend: 'Ext.Dialog',
    title: 'Cadastrar Contas a Pagar',

    controller: 'billtopaycontroller',

    layout: 'fit',
    width: 600,
    height: 570,

    closable: true,
    maximizable: true,

    items: [
        {
            xtype: 'billtopay-form',
            reference: 'form',
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                layout: 'hbox',
                pack: 'end',
            },
            items: [
                {
                    xtype: 'button',
                    // text: 'Excluir',
                    iconCls: 'x-fa fa-trash',
                    ui: 'decline',
                    handler: 'onDeleteEdit',
                },
                {
                    xtype: 'spacer',
                    flex: 1,
                },
                {
                    xtype: 'button',
                    ui: 'confirm',
                    iconCls: 'x-fa fa-check',
                    text: 'Salvar',
                    handler: 'onSaveEdit',
                },
            ],
        },
    ],
});
