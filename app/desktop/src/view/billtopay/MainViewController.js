Ext.define('Financeiro.view.billtopay.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billtopaymaincontroller',

    onNewBillToPay: function (button) {
        var me = this;
        me.openEditDialog({
            viewModel: {
                data: {
                    record: Ext.create('Financeiro.model.BillToPay'),
                    gridView: me.lookup('billtopaygrid'),
                },
            },
        });
    },

    onEditBillToPay: function (button) {
        var me = this,
            gridView = me.lookup('billtopaygrid'),
            selected = gridView.getSelection();

        if (gridView.getSelected().getCount() === 1) {
            this.openEditDialog({
                title: 'Editar Conta a Pagar',
                viewModel: {
                    data: {
                        record: selected,
                        gridView: gridView,
                    },
                },
            });
        } else {
            Ext.Msg.alert('Aviso', 'Favor selecionar apenas um registro');
        }
    },

    // onDeleteFornecedor: function (button) {
    //     var me = this,
    //         grid = me.lookup('supplierGrid'),
    //         selection = grid.getSelected(),
    //         store = grid.getStore();

    //     Ext.Msg.confirm(
    //         'Confirmação',
    //         'Deseja realmente excluir?',
    //         (option) => {
    //             if (option === 'yes') {
    //                 store.remove(selection.items);
    //                 store.sync({
    //                     callback: (batch) => {
    //                         if (batch.complete) {
    //                             Ext.toast(
    //                                 'Exclusão realizada com sucesso!',
    //                                 4000
    //                             );
    //                             store.reload();
    //                         } else {
    //                             store.rejectChanges();
    //                         }
    //                     },
    //                 });
    //             }
    //         }
    //     );
    // },

    openEditDialog: function (config) {
        var me = this,
            wizardDialog = Ext.create(
                'Financeiro.view.billtopay.Dialog',
                Ext.apply({}, config)
            );

        wizardDialog.show();
        return wizardDialog;
    },
});
