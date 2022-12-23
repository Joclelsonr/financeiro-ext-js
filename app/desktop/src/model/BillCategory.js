Ext.define('Financeiro.model.BillCategory', {
    extend: 'Financeiro.model.Base',

    requires: [
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.proxy.Rest',
        'Ext.data.validator.Presence',
    ],

    // chamada para api
    proxy: {
        type: 'rest',
        url: 'http://localhost:3333/api/v1/bill_category',
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
        writer: {
            type: 'json',
        },
    },

    // validação, nao permite fica em branco
    validators: {
        name: 'presence',
    },

    // mapeando campos de categoria de conta da api
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'description',
            type: 'string',
        },
        {
            name: 'type',
            defaultValue: 'P',
        },
    ],
});
