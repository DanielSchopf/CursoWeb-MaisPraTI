public class Main10 {
    public static void main(String[] args) {
        Funcionario gerente = new Gerente("Jaques", 5000.0);
        gerente.mostrarInformacoes();
        gerente.trabalhar();
        System.out.printf("\nBônus do Gerente: " + gerente.calcularBonus());



        Funcionario desenvolvedor = new Desenvolvedor("Daniel", 3800.0);
        desenvolvedor.mostrarInformacoes();
        desenvolvedor.trabalhar();
        System.out.printf("\nBônus do desenvolvedor: " + desenvolvedor.calcularBonus());
    }
}
