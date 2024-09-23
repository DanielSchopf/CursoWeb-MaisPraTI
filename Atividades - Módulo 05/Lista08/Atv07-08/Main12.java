public class Main12 {
    public static void main(String[] args) {

        //Exercicio 07
        FormaPagamento cartao = new CartaoCredito();
        FormaPagamento boleto = new Boleto();
        FormaPagamento pix = new Pix();

        cartao.processarPagamento(200.0);
        boleto.processarPagamento(150.0);
        pix.processarPagamento(100.0);

    }
}