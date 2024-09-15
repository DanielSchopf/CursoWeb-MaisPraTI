class UndoManager {
    private Node head;

    private class Node {
        String acao;
        Node next;

        // Construtor do nó.
        Node(String acao) {
            this.acao = acao;
            this.next = null;
        }
    }

    // Construtor do UndoManager.
    public UndoManager() {
        this.head = null;
    }

    // Adiciona uma nova ação no início da lista.
    public void addAcao(String acao) {
        Node newNode = new Node(acao);
        newNode.next = head;
        head = newNode;
        System.out.println("Ação adicionada");
    }

    // Desfaz a última ação adicionada (remoção do primeiro nó).
    public void undo() {
        if (head == null) {
            System.out.println("Nenhuma ação para desfazer.");
            return;
        }

        System.out.println("Desfazendo ação: " + head.acao);
        head = head.next;
    }

    // Exibe todas as ações armazenadas na lista.
    public void mostrarAcoes() {
        if (head == null) {
            System.out.println("Nenhuma ação registrada.");
            return;
        }

        System.out.println("Ações registradas:");
        Node current = head;
        while (current != null) {
            System.out.println("- " + current.acao);
            current = current.next;
        }
    }
}