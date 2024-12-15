function age(num) {
    if (num >= 0 && num <= 2)  {
        console.log('Baby');
    }
    else if (num >= 3 && num <= 13)  {
        console.log('Child');
    }
    else if (num >= 14 && num <= 19)  {
        console.log('Teenager');
    }
    else if (num >= 20 && num <= 65)  {
        console.log('Adult');
    }
    else if (num >= 66)  {
        console.log('Elder');
    } else {
        console.log('Out of range');
    }
}

age(1);
age(5);
age(17);
age(45);
age(66);
age(-2);