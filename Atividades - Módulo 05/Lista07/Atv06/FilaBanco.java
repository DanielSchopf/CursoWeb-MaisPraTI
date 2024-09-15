import java.util.LinkedList;
import java.util.Queue;

class FilaBanco {
    private Queue<String> fila;

    public FilaBanco() {
        fila = new LinkedList<>();
    }

    // Adiciona um cliente à fila
    public void adicionarCliente(String cliente) {
        fila.add(cliente);
        System.out.println(cliente + " entrou na fila.");
    }

    // Atende o próximo cliente da fila
    public String atenderCliente() {
        String cliente = fila.poll();
        if (cliente != null) {
            System.out.println("Atendendo: " + cliente);
            return cliente;
        } else {
            System.out.println("Nenhum cliente na fila.");
            return null;
        }
    }

    // Mostra todos os clientes na fila
    public void exibirFila() {
        System.out.println("Clientes na fila: " + fila);
    }
}