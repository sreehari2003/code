
class Weapon {
    String name;

    public Weapon(String name) {
        this.name = name;
    }

    public void describe() {
        System.out.println("This is a weapon named " + name);
    }

    public void attack() {
        System.out.println("Generic weapon attack!");
    }
}

class Gun extends Weapon {
    // Magazine capacity
    int magazine;
    // Total number of bullet
    int bullet;

    public Gun(String name, int magazine, int bullet) {
        super(name);
        this.magazine = magazine;
        this.bullet = bullet;
    }

    // this is called method overriding
    @Override
    public void attack() {
        if (bullet > 0) {
            System.out.println("Bang!");
            bullet -= 1;
        } else {
            System.out.println("Out of bullet, Please Reload");
        }
    }

    public void Reload() {
        if (bullet < magazine) {
            System.out.println("Reloaded");
            bullet = magazine;
        } else {
            System.out.println("Magazine is full");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an instance of the Gun class
        Gun myGun = new Gun("Pistol", 10, 6);

        // Accessing and printing the initial state of the gun
        System.out.println("Gun Name: " + myGun.name);
        System.out.println("Magazine Capacity: " + myGun.magazine);
        System.out.println("Current Bullet Count: " + myGun.bullet);

        // Shooting the gun
        myGun.attack();
        // Output: Bang!
        System.out.println("Current Bullet Count after shooting: " + myGun.bullet);

        // Reloading the gun
        myGun.Reload();
        // Output: Reloaded
        System.out.println("Current Bullet Count after reloading: " + myGun.bullet);

        // Trying to shoot with an empty magazine
        myGun.attack();
        // Output: Out of bullet, Please Reload
        System.out.println("Current Bullet Count after attempting to shoot again: " + myGun.bullet);
    }
}
