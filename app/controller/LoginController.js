Ext.define('SenchaTZ.controller.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function () {
        var vm = this.getViewModel(),
            username = vm.get('username'),
            password = vm.get('password');

        if (username === 'admin' && password === 'padmin') {
            localStorage.setItem('isLoggedIn', 'true');
            this.getView().destroy();
            Ext.create({ xtype: 'app-main' });
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    },

    onSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            var form = field.up('form');
            if (form.isValid()) {
                this.onLogin();
            }
        }
    }
});
