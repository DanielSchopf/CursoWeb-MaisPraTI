public class Main06 {
    public static void main(String[] args) {
        FilaBanco banco = new FilaBanco();
        banco.adicionarCliente("Cliente 1");
        banco.adicionarCliente("Cliente 2");
        banco.exibirFila();
        banco.atenderCliente();
        banco.exibirFila();
    }
}