Ext.define('Financeiro.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewcontroller',

    routes: {
        ':xtype': {
            action: 'mainRoute',
        },
    },

    // quando a aplicação inicia, ja inicia com a tela dashboard
    init: function () {
        this.redirectTo('dashboardview', true);
    },

    onMenuClick: function (button) {
        Ext.Viewport.toggleMenu('left');

        Ext.getCmp('main-toolbar').setTitle(button.getText());
        this.redirectTo(button.tag);
    },

    mainRoute: function (xtype) {
        // procura uma classe com o xtype no projeto
        var exists = Ext.ClassManager.getByAlias('widget.' + xtype);

        if (!exists) {
            console.log(xtype + ' xtype não existe');
            return;
        }
        // pego minha center view
        var centerView = Ext.getCmp('main-view');
        // verifico se ja esta carregada no card
        if (!centerView.getComponent(xtype)) {
            // pego a tela e seto no card
            centerView.add({ xtype: xtype });
        }
        // seto como ativo
        centerView.setActiveItem(xtype);
    },
});
