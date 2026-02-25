package sec06.chap06.ex03;

public class Main {
    public static void main(String[] args) {
        YalcoChickenMenu menu1 = YalcoChickenMenu.YN;
        YalcoChickenMenu menu2 = YalcoChickenMenu.RS;
        YalcoChickenMenu menu3 = YalcoChickenMenu.XX;


        // ⛑️ 이번 챕터부터 영상에서 var로 표시했던
        // 자료형을 명시적으로 수정합니다.
        String menu1Name = menu1.getName();
        int menu2Price = menu2.getPrice();
        String menu3Desc = menu3.getDesc();

        menu2.setPrice(16000);
        int menu2NewPrice = menu2.getPrice();

        //  ⭐️ 열거형의 메소드들

        YalcoChickenMenu[] byNames = new YalcoChickenMenu[]{
                YalcoChickenMenu.valueOf("FR"),
                YalcoChickenMenu.valueOf("PP"),
                YalcoChickenMenu.valueOf("GJ"),
                //  YalcoChickenMenu.valueOf("NN"), // ⚠️ 런다임 에러
        };

        //  💡 name 메소드 : 각 항목의 이름 반환
        String[] names = new String[]{
                menu1.name(), menu2.name(), menu3.name()
        };

        //  💡 ordinal 메소드 : 순번 반환
        int[] orders = new int[]{
                menu1.ordinal(), menu2.ordinal(), menu3.ordinal()
        };

        //  💡 values 메소드 : 전체 포함된 배열 반환
        //  YalcoChickenMenu[] 자료형
        YalcoChickenMenu[] menus = YalcoChickenMenu.values();

        for (YalcoChickenMenu menu : menus) {
            System.out.println(menu.getDesc());
        }

        System.out.println("\n- - - - -\n");

        YalcoChicken store1 = new YalcoChicken();

        for (String menuName : "양념치킨,능이백숙,땡초치킨".split(",")) {
            store1.takeOrder(menuName);
        }
    }
}
