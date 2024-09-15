public class Main02 {
    public static void main(String[] args) {
        HistoricoNav historicoNav = new HistoricoNav(5);

        historicoNav.addUrl("http://site.com");
        historicoNav.addUrl("http://site.org");
        historicoNav.addUrl("http://site.net");
        historicoNav.addUrl("http://site.edu");
        historicoNav.addUrl("http://site.inf");
        historicoNav.addUrl("http://site.uf");
        historicoNav.mostrarHistorico();
    }
}