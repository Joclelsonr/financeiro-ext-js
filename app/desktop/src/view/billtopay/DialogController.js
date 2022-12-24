Ext.define('Financeiro.view.billtopay.DialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billtopaycontroller',

    requires: ['Ext.Toast'],

    onSaveEdit: function (button) {
        var me = this,
            form = me.lookup('form'),
            dialog = me.getView(),
            viewModel = me.getViewModel(),
            gridView = viewModel.get('gridView'),
            record = viewModel.get('record');

        if (record.isValid()) {
            dialog.mask('Salvando, aguarde...');
            record.save({
                callback: (record) => {
                    dialog.unmask();
                    if (gridView) {
                        gridView.getStore().reload();
                        Ext.toast('Registro salvo com sucesso!', 4000);
                        dialog.close();
                    }
                },
            });
        } else {
            form.validate();
        }
    },
});
