public class Main04 {
    public static void main(String[] args) {
        EditorTexto editor = new EditorTexto();
        editor.type("Hello");
        editor.type("Hello World");
        System.out.println(editor.getCurrentText());
        System.out.println(editor.undo());
        System.out.println(editor.redo());
    }
}