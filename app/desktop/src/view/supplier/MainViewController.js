Ext.define("Financeiro.view.supplier.MainViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.suppliercontroller",

    // função que abre um popup para cadastra fornecedor / Grid
    onNovoFornecedor: function (button) {
        Ext.create("Financeiro.view.supplier.Dialog").show();
    },
});
