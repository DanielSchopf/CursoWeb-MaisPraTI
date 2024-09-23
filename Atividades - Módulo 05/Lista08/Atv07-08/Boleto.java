public class Boleto extends FormaPagamento {

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado via Boleto.");
        } else {
            System.out.println("Falha ao processar pagamento via Boleto.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando Boleto...");
        return true;
    }
}