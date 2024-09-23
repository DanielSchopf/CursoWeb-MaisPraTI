public class Gerente extends Funcionario {

    public Gerente(String nome, double salario) {
        super(nome, salario);
    }
    @Override
    public double calcularBonus() {
        return salario * 0.20;
    }

    @Override
    public void trabalhar() {
        System.out.printf("\n"+ nome + " está gereciando a equipe.");
    }
}
