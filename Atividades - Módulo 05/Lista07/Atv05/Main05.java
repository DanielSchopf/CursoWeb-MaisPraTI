public class Main05 {
    public static void main(String[] args) {
        JogoCarta game = new JogoCarta();
        game.addCarta(new Carta("Ás", "Espada"));
        game.addCarta(new Carta("Rei", "Copas"));
        game.mostrarMao();
        game.removerCarta(new Carta("Ás", "Espada"));
        game.mostrarMao();
    }
}