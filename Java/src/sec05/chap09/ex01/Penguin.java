package sec05.chap09.ex01;

public class Penguin extends Bird implements Hunter, Swimmer {
    @Override
    public void hunt() {
        System.out.println(position + "물고기 사냥");
    }

    @Override
    public void swim() {
        System.out.println("온몸으로 수영");
    }
}
