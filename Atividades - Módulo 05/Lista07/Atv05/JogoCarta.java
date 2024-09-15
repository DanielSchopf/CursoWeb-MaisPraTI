import java.util.LinkedList;

class JogoCarta {
    private LinkedList<Carta> mao;

    public JogoCarta() {
        mao = new LinkedList<>();
    }

    public void addCarta(Carta carta) {
        mao.add(carta);
    }

    public void removerCarta(Carta carta) {
        mao.remove(carta);
    }

    public void mostrarMao() {
        for (Carta carta : mao) {
            System.out.println(carta);
        }
    }
}