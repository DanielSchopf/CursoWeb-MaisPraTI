public class Pix extends FormaPagamento {

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado via Pix.");
        } else {
            System.out.println("Falha ao processar pagamento via Pix.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando Pix...");
        return true;
    }
}