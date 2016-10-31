angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        { nome: "Eduardo Gomes", telefone: "99123-3210", operadora: { nome: "Vivo", codigo: 15 } },
        { nome: "Mayara Baptista", telefone: "99321-0123", operadora: { nome: "Vivo", codigo: 15 } }
    ];
    $scope.operadoras = [
        { nome: "Oi", codigo: 14 },
        { nome: "Vivo", codigo: 15 },
        { nome: "Tim", codigo: 41 }
    ];
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});
