public class CartaoCredito extends FormaPagamento {

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado via Cartão de Crédito.");
        } else {
            System.out.println("Falha ao processar pagamento via Cartão de Crédito.");
        }
    }

    @Override
    public boolean validarPagamento() {

        System.out.println("Validando Cartão de Crédito...");
        return true;
    }
}