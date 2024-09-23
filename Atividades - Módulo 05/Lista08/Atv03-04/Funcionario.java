public class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario= salario;
    }

    public double calcularBonus() {
        return 0;
    }

    public void mostrarInformacoes() {
        System.out.printf("\nNome: " + nome);
        System.out.printf("\nSalario: " + salario);
    }

    public void trabalhar() {
        System.out.printf("\n" + nome + " está trabalhando.");
    }
}
