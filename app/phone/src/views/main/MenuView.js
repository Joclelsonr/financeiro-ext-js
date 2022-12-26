Ext.define('Financeiro.view.main.MenuView', {
    extend: 'Ext.Sheet',
    alias: 'widget.menuview',

    controller: 'mainviewcontroller',

    layout: 'vbox',
    width: 180,

    items: [
        {
            xtype: 'image',
            src: 'resources/shared/images/jrentreterimento.jpeg',
            height: 180,
        },
        {
            xtype: 'container',
            layout: 'vbox',
            flex: 1,
            defaults: {
                xtype: 'button',
                handler: 'onMenuClick',
            },
            items: [
                {
                    text: 'Dashboard',
                    tag: 'dashboardview',
                },
                {
                    text: 'Contas a Pagar',
                    tag: 'billtopaylist',
                },
            ],
        },
    ],
});
