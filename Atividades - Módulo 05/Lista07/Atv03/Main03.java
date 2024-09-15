public class Main03 {
    public static void main(String[] args) {
        UndoManager undoManager = new UndoManager();

        undoManager.addAcao("Olá");
        undoManager.addAcao("Mundo");
        undoManager.mostrarAcoes();

        undoManager.undo();
        undoManager.mostrarAcoes();
    }
}