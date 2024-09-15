class HistoricoNav {
    private Node head;
    private int tamanho;
    private final int tamanhoMax;

    private class Node {
        String url;
        Node next;

        Node(String url) {
            this.url = url;
            this.next = null;
        }
    }

    public HistoricoNav(int tamanhoMax) {
        this.head = null;
        this.tamanho = 0;
        this.tamanhoMax = tamanhoMax;
    }

    public void addUrl(String url) {
        Node newNode = new Node(url);

        if (tamanho == tamanhoMax) {
            removeOldestUrl();
        }

        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        tamanho++;
        System.out.println("URL adicionada");
    }

    private void removeOldestUrl() {
        if (head != null) {
            head = head.next;
            tamanho--;
            System.out.println("URL mais antiga removida");
        }
    }

    public void mostrarHistorico() {
        if (head == null) {
            System.out.println("Histórico vazio.");
            return;
        }

        Node current = head;
        while (current != null) {
            System.out.println(current.url);
            current = current.next;
        }
    }
}