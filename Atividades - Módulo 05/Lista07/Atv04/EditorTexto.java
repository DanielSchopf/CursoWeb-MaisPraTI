import java.util.LinkedList;

class EditorTexto {
    private LinkedList<String> historico;
    private int posicaoAtual;

    public EditorTexto() {
        historico = new LinkedList<>();
        posicaoAtual = -1;
    }

    public void type(String text) {
        if (posicaoAtual < historico.size() - 1) {
            historico.subList(posicaoAtual + 1, historico.size()).clear();
        }
        historico.add(text);
        posicaoAtual++;
    }

    public String undo() {
        if (posicaoAtual > 0) {
            posicaoAtual--;
            return historico.get(posicaoAtual);
        } else {
            return "Sem texto para fazer undo.";
        }
    }

    public String redo() {
        if (posicaoAtual < historico.size() - 1) {
            posicaoAtual++;
            return historico.get(posicaoAtual);
        } else {
            return "Sem texto para fazer rendo.";
        }
    }

    public String getCurrentText() {
        if (posicaoAtual >= 0 && posicaoAtual < historico.size()) {
            return historico.get(posicaoAtual);
        } else {
            return "";
        }
    }
}