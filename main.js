canvas = new fabric.Canvas("myCanvas");

H_H = 30;
H_W = 30;
H_X = 10;
H_Y = 10;
P_X = 10;
P_Y = 10;


var player_Ob = " ";

function Player_Update (){
    fabric.Image.fromURL("player.png", function (Img){
        player_Ob = Img;

        player_Ob.scaleToHeight(140);
        player_Ob.scaleToWidth(150);

        player_Ob.set({
            top:P_Y,
            left:P_X
        });
        canvas.add(player_Ob);
    });

}

function New_Update(new_img){
    fabric.Image.fromURL(new_img, function(Img){
        New_Ob = Img;

        New_Ob.scaleToHeight(H_H);
        New_Ob.scaleToWidth(H_W);

        New_Ob.set({
            top:H_Y,
            left:H_X
        });
        canvas.add(New_Ob);
    });

}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    var keyPressed = e.keyCode;
    if (keyPressed == "70") {
        New_Update("ironman_face.png")
        console.log("Face");
    }

    if (keyPressed == "66") {
        New_Update("ironman_body.png")
        console.log("Body");
    }

    if (keyPressed == "76") {
        New_Update("spiderman_legs.png")
        console.log("Legs");
    } 
    
    if (keyPressed == "82") {
        New_Update("spiderman_right_hand.png")
        console.log("Right_Hand");
    }    

    if (keyPressed == "72") {
        New_Update("thor_left_hand.png")
        console.log("Left_Hand");
    }   

    if (keyPressed == "38") {
        Up();
        console.log("Up");
    } 

    if (keyPressed == "40") {
        Down();
        console.log("Down");
    } 

    if (keyPressed == "37") {
        Left();
        console.log("Left");
    } 

    if (keyPressed == "39") {
        Right();
        console.log("Right");
    } 

    if (e.shiftKey == true && keyPressed == "80") {
        H_H = H_H + 10;
        H_W = H_W + 10;
        document.getElementById("wid").innerHTML = H_W;
        document.getElementById("hei").innerHTML = H_H;
        console.log("P and Shift Pressed");
    }

    if (e.shiftKey == true && keyPressed == "77") {
        H_H = H_H - 10;
        H_W = H_W - 10;
        document.getElementById("wid").innerHTML = H_W;
        document.getElementById("hei").innerHTML = H_H;
        console.log("M and Shift Pressed");
    }
}

function Up() {
    if (P_Y >= 10) {
        P_Y = P_Y - H_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}

function Down() {
    if (P_Y <= 400) {
        P_Y = P_Y + H_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}

function Left() {
    if (P_X >= 10) {
        P_X = P_X - H_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}

function Right() {
    if (P_X <= 850) {
        P_X = P_X + H_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}