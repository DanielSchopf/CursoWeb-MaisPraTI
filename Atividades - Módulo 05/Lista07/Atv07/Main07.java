public class Main07 {
    public static void main(String[] args) {
        GerenciarImpressao impressora = new GerenciarImpressao();
        impressora.adicionarTrabalho(new Trabalho("Trabalho 1"));
        impressora.adicionarTrabalho(new Trabalho("Trabalho 2"));
        impressora.exibirFila();
        impressora.processarTrabalho();
        impressora.exibirFila();
    }
}