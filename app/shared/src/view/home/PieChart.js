Ext.define('Financeiro.view.home.PieChart', {
    extend: 'Ext.chart.PolarChart',
    alias: 'widget.billbycategorychart',

    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.interactions.ItemHighlight',
    ],

    store: {
        autoLoad: true,
        fields: ['description', 'total'],
        proxy: {
            type: 'rest',
            url: 'http://localhost:3333/api/v1/paid_bills_by_category',
            reader: {
                rootProperty: 'data',
            },
        },
    },

    legend: {
        docked: 'right',
    },
    interactions: ['rotate', 'itemhighlight'],
    innerPadding: 15,

    series: [
        {
            type: 'pie',
            xField: 'total',
            radiusField: 'description',
            donut: 30,
            label: {
                field: 'description',
                display: 'outside',
            },
        },
    ],
});
