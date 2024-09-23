public class Trem implements MeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("O trem está ganhando velocidade!");
    }
    @Override
    public void frear() {
        System.out.println("O trem está freando!");
    }
}
