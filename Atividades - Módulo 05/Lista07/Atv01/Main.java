import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        TaskManager taskManager = new TaskManager();
        int opcao;

        do {
            System.out.printf("\n--Gerenciador de Tarefas--");
            System.out.printf("\n1. Adicionar Tarefa");
            System.out.printf("\n2. Marcar tarefa como concluída");
            System.out.printf("\n3. Remover tarefa");
            System.out.printf("\n4. Exibir todas as tarefas");
            System.out.printf("\n0. Sair");
            System.out.printf("\nEscolha uma tarefa: ");
            opcao= scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Digite o título da tarefa:\n");
                    String tituloAdd = scanner.nextLine();
                    taskManager.addTarefa(tituloAdd);
                    break;
                case 2:
                    System.out.print("Digite o título da tarefa a ser marcada como concluída:\n");
                    String tituloCompleto = scanner.nextLine();
                    taskManager.tarefaConcluida(tituloCompleto);
                    break;
                case 3:
                    System.out.print("Digite o título da tarefa a ser removida:\n");
                    String tituloRemover = scanner.nextLine();
                    taskManager.removerTarefa(tituloRemover);
                    break;
                case 4:
                    taskManager.mostrarTarefas();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        }while(opcao != 0);

        scanner.close();
    }
}
