Ext.define('Financeiro.view.home.CartesianChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.yearlybillchart',
    title: 'Receitas e Despesas',

    requires: [
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.chart.series.Line',
    ],

    store: {
        autoLoad: true,
        fields: ['month_short_name', 'total_paid', 'total_to_pay'],
        proxy: {
            type: 'rest',
            url: 'http://localhost:3333/api/v1/yearly_paid_bills',
            reader: {
                type: 'json',
                rootProperty: 'data',
            },
        },
    },

    legend: {
        docked: 'bottom',
    },

    axes: [
        {
            type: 'numeric',
            position: 'left',
        },
        {
            type: 'category',
            position: 'bottom',
        },
    ],

    series: [
        {
            type: 'bar',
            title: 'contas Pagas',
            xField: 'month_short_name',
            yField: 'total_paid',
        },
        {
            type: 'line',
            title: 'contas a Pagas',
            xField: 'month_short_name',
            yField: 'total_to_pay',
        },
    ],
});
