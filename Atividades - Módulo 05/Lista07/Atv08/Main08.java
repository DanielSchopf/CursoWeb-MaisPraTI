public class Main08 {
    public static void main(String[] args) {
        FilaProcessos sistema = new FilaProcessos();
        sistema.adicionarProcesso(new Processo("Processo 1"));
        sistema.adicionarProcesso(new Processo("Processo 2"));
        sistema.exibirFila();
        sistema.executarProcesso();
        sistema.exibirFila();
    }
}