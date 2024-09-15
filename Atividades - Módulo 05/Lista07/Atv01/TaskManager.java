class TaskManager {
    private Tarefa head;

    //Adicionar tarefa
    public void addTarefa(String titulo) {
        Tarefa novaTarefa = new Tarefa(titulo);

        if(head == null) {
            head = novaTarefa;
        } else {
            Tarefa current  = head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = novaTarefa;
        }
        System.out.printf("A tarefa foi adicionada!");
    }

    //Remover tarefa
    public void removerTarefa(String titulo) {
        if(head == null) {
            System.out.printf("A lista está vazia");
            return;
        }
        if(head.titulo.equals(titulo)) {
            head= head.next;
            System.out.printf("Tarefa removida");
            return;
        }

        Tarefa current = head;
        Tarefa previous = null;

        while (current != null && !current.titulo.equals(titulo)) {
            previous = current;
            current = current.next;
        }

        if (current == null) {
            System.out.println("A tarefa não foi encontrada");
        } else {
            previous.next = current.next;
            System.out.println("Tarefa removida");
        }
    }
    //Marcar tarefa como concluida
    public void tarefaConcluida(String titulo) {
        Tarefa current = head;

        while (current != null) {
            if (current.titulo.equals(titulo)) {
                current.marcarTarefa();
                System.out.println("A tarefa foi marcada como concluída");
                return;
            }
            current = current.next;
        }
        System.out.println("A tarefa não encontrada");
    }

    //Exibir todas as tarefas
    public void mostrarTarefas() {
        if (head == null) {
            System.out.println("Nenhuma tarefa encontrada.");
            return;
        }

        Tarefa current = head;
        while (current != null) {
            System.out.println(current);
            current = current.next;
        }
    }
}