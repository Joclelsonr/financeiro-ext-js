Ext.define('Financeiro.view.billcategory.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryview',

    onNovoBillCategory: function (button) {
        var me = this,
            grid = me.lookup('categoryGrid'),
            record = grid.getStore().insert(0, {});

        grid.findPlugin('rowedit').startEdit(record[0]);
    },

    ongridRowEdit: function (grid, location) {
        location.record.save({
            callback: () => {
                Ext.toast('Registro salvo!', 4000);
            },
        });
    },

    onDeleteTool: function (grid, location) {
        var me = this,
            grid = me.lookup('categoryGrid'),
            store = grid.getStore();

        Ext.Msg.confirm('Confirmação', 'Deseja excluir?', (option) => {
            if (option === 'yes') {
                grid.mask('Excluindo, aguarde...');
                location.record.erase({
                    callback: (batch) => {
                        grid.unmask();
                        Ext.toast('Exclusão realizada com sucesso!', 4000);
                        store.reload();
                    },
                });
            }
        });
    },
});
