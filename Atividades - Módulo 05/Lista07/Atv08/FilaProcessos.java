import java.util.LinkedList;
import java.util.Queue;

class FilaProcessos {
    private Queue<Processo> fila;

    public FilaProcessos() {
        fila = new LinkedList<>();
    }

    // Adiciona um novo processo à fila
    public void adicionarProcesso(Processo processo) {
        fila.add(processo);
        System.out.println(processo.nome + " adicionado à fila de processos.");
    }

    // Executa o processo mais antigo na fila
    public Processo executarProcesso() {
        Processo processo = fila.poll();
        if (processo != null) {
            System.out.println(processo);
            return processo;
        } else {
            System.out.println("Nenhum processo na fila.");
            return null;
        }
    }

    // Mostra todos os processos na fila
    public void exibirFila() {
        System.out.println("Processos na fila: " + fila);
    }
}
