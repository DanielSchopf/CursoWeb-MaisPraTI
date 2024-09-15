class Processo {
    String nome;

    Processo(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Executando: " + nome;
    }
}