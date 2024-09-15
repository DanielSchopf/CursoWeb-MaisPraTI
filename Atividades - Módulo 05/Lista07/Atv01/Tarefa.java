class Tarefa {
    String titulo;
    boolean foiConcluida;
    Tarefa next;

    public Tarefa(String titulo) {
        this.titulo= titulo;
        this.foiConcluida= false;
        this.next= null;
    }

    public void marcarTarefa() {
        this.foiConcluida= true;
    }

    public String toString() {
        return titulo + (foiConcluida ? " [Concluída]" : " [Pendente]");
    }
}