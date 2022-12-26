Ext.define('Financeiro.view.home.Main', {
    extend: 'Ext.Container',
    alias: 'widget.home',

    scrollable: true,

    items: [
        {
            xtype: 'billbycategorychart',
            shadow: true,
            margin: 10,
            height: 350,
        },
        {
            xtype: 'yearlybillchart',
            shadow: true,
            margin: 10,
            height: 350,
        },
    ],
});
