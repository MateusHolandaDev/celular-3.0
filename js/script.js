class Produto {
    constructor() {
        this.id = 1;
        this.produto = '';
        this.valor = '';
        this.fornecedor = '';
        this.quantidade = '';
        this.arrayProdutos = [];
        this.btn = 1;
    }
    salvar() {
        // alert('Funcionando')
        let produto = this.lerDados();

        if (this.validarInputs(produto)== true) {
            this.adicionarDados(produto)
            this.adicionarTable();
            this.cancelar()

        }
        if(this.btn = 1){
            $('#btn1').text('Salvar')
        }

    }

    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = $('#nomeProduto').val();

        produto.preco = $('#precoProduto').val();

        produto.fornecedor = $('#fornecedor').val();

        produto.quantidade = $('#quantidade').val();

        return produto;

    }

    adicionarDados(produto) {

        this.arrayProdutos.push(produto);
        this.id++;


    }

    validarInputs(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto \n';
            console.log(msg);
        }
        if (produto.preco == '') {
            msg += 'Informe o preço do produto \n';
            console.log(msg);
        }
        if (produto.fornecedor == '') {
            msg += 'Informe o fornecedor do produto \n';
            console.log(msg);
        }
        if (produto.quantidade == '') {
            msg += 'Informe a quantidade do produto \n';
            console.log(msg);
        }
        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    adicionarTable() {

        let tbody = document.getElementById('tbody');
        // let tbody = $('#tbody')
        tbody.innerText = ''
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();

            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_fornecedor = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_preco.innerText = this.arrayProdutos[i].preco
            td_fornecedor.innerHTML = this.arrayProdutos[i].fornecedor
            td_quantidade.innerHTML = this.arrayProdutos[i].quantidade

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/unknown.png'
            imgDelete.id = 'delete'
            td_acoes.appendChild(imgDelete)

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/edit.png'
            imgEdit.id = 'edit'

            td_acoes.appendChild(imgEdit)


            imgDelete.setAttribute('onclick', "produto.deletar(" + this.arrayProdutos[i].id + ")");

            imgEdit.setAttribute('onclick', "produto.editar(" +JSON.stringify(this.arrayProdutos[i])+ ")");

            console.log(JSON.stringify(this.arrayProdutos))

            // tbody.append("<tr><td>"+this.id+++"</td><td>"+this.arrayProdutos[].nomeProduto+"</td><td>"+this.arrayProdutos[i].preco+"</td><td>letra</td><td>dsada</td></tr>")
        }

    }

    deletar(idIdentificado) {

        if (confirm('Deseja deletar o produto ' +idIdentificado+ ' ?')) {
            for (let i = 0; i < this.arrayProdutos.length; i++) {

                if (this.arrayProdutos[i].id == idIdentificado) {
                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i)

                }
                console.log(this.arrayProdutos)
            }
        }
    }

    cancelar() {
        $('#nomeProduto').val('')
        $('#precoProduto').val('')
        $('#fornecedor').val('')
        $('#quantidade').val('')
    }

    editar(dados) {

        document.getElementById('nomeProduto').value= dados.nomeProduto;
        document.getElementById('precoProduto').value= dados.preco;
        document.getElementById('fornecedor').value= dados.fornecedor;
        document.getElementById('quantidade').value= dados.quantidade;

       
        $('#btn1').text('Atualizar')

    }

    atualizar(){

    }

}

let produto = new Produto()

