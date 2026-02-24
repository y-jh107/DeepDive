package section05.chap06.ex01;

public class ShutDownButton extends Button {
    public ShutDownButton() {
        super("ShutDown"); // 💡 부모의 생성자 호출
    }

    //  💡 부모의 메소드를 override
    @Override
    public void func() {
        System.out.println("프로그램 종료");
    }
}