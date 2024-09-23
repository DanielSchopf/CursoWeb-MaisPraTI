public class Main09 {
    public static void main(String[] args) {
        Produto produto = new Produto("Notebook", 2000.0, 5);
        produto.mostrarInformacoes();
        produto.aplicarDesconto(20);
        produto.mostrarInformacoes();
    }
}
