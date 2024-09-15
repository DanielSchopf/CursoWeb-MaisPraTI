class Trabalho {
    String documento;

    Trabalho(String documento) {
        this.documento = documento;
    }

    @Override
    public String toString() {
        return "Imprimindo: " + documento;
    }
}