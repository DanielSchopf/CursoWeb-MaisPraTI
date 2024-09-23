public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if(preco>=0) {
            this.preco = preco;
        } else {
            throw new IllegalArgumentException("A quantidade não pode ser negativa.");
        }
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
        } else {
            throw new IllegalArgumentException("A quantidade não pode ser negativa.");
        }
    }

    public Produto(String nome, double preco, int quantidade) {
        this.nome=nome;
        setPreco(preco);
        setQuantidade(quantidade);
    }

    public void aplicarDesconto(double porcentagem) {
        if(porcentagem<0 || porcentagem >50) {
            throw new IllegalArgumentException("O desconto não pode ser negativo nem maior que 50%");
        }
        double desconto = preco * (porcentagem/100);
        preco -= desconto;
    }
    public void mostrarInformacoes() {
        System.out.printf("\nProduto: " + nome);
        System.out.printf("\nPreço: " + preco);
        System.out.printf("\nQuantidade em estoque: " + quantidade);
    }
}


