import java.util.LinkedList;
import java.util.Queue;

class GerenciarImpressao {
    private Queue<Trabalho> fila;

    public GerenciarImpressao() {
        fila = new LinkedList<>();
    }

    // Adiciona um trabalho de impressão à fila
    public void adicionarTrabalho(Trabalho trabalho) {
        fila.add(trabalho);
        System.out.println(trabalho.documento + " adicionado à fila de impressão.");
    }

    // Processa o próximo trabalho de impressão
    public Trabalho processarTrabalho() {
        Trabalho trabalho = fila.poll();
        if (trabalho != null) {
            System.out.println(trabalho);
            return trabalho;
        } else {
            System.out.println("Nenhum trabalho de impressão na fila.");
            return null;
        }
    }

    // Mostra todos os trabalhos na fila
    public void exibirFila() {
        System.out.println("Trabalhos de impressão na fila: " + fila);
    }
}