Ext.define('Financeiro.view.billtopay.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billtopaycontroller',

    requires: ['Ext.Toast'],

    onExcluirSwiper: function (list, info) {
        Ext.Msg.confirm('Confirmação', 'Deseja excluir?', (option) => {
            if (option === 'yes') {
                info.record.erase({
                    callback: (record) => {
                        Ext.toast('Excluido com sucesso!');
                    },
                });
            }
        });
    },
});
