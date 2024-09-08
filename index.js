let click = 0;
function PLAY(){
    let ThrowSFX  = new Audio("assets/Sounds/ThrowSFX.mp3");
    let WinnerSFX = new Audio("assets/Sounds/winnerSFX.mp3");
    let DrawSFX   = new Audio("assets/Sounds/DrawSFX.mp3");

    ThrowSFX.play();
        
    let win  = "rgb(50, 199, 107)";
    let lose = "rgb(196, 32, 32)";
    let draw = "#761c92";
    
    let rock    = "assets/Images/rock.png";
    let paper   = "assets/Images/paper.png";
    let scissor = "assets/Images/scissor.png";

    let Player_1_Background = document.getElementById("Player_1_Background");
    let Player_2_Background = document.getElementById("Player_2_Background");

    let Player_1_Thrown = document.getElementById("Player_1_Thrown");
    let Player_2_Thrown = document.getElementById("Player_2_Thrown");

    let LDRB_SCORE_Round_1_Player_1 = document.getElementById("LDRB_SCORE_Round_1_Player_1");
    let LDRB_SCORE_Round_2_Player_1 = document.getElementById("LDRB_SCORE_Round_2_Player_1");
    let LDRB_SCORE_Round_3_Player_1 = document.getElementById("LDRB_SCORE_Round_3_Player_1");

    let LDRB_SCORE_Round_1_Player_2 = document.getElementById("LDRB_SCORE_Round_1_Player_2");
    let LDRB_SCORE_Round_2_Player_2 = document.getElementById("LDRB_SCORE_Round_2_Player_2");
    let LDRB_SCORE_Round_3_Player_2 = document.getElementById("LDRB_SCORE_Round_3_Player_2");

    let Player_1_Score = document.getElementById("Player_1_Score");
    let Player_2_Score = document.getElementById("Player_2_Score");
    let Score_Board    = document.getElementById("Score_Board");
    let Announcer      = document.getElementById("Announcer");

    let Additional_Score = 1;
    let Add_Score   = "1";
    let Lost_Score  = "0";
    let Draw_Score  = "0";

    let P1_Random_Throw = Math.floor( Math.random() * 3 ) + 1; 
    let P2_Random_Throw = Math.floor( Math.random() * 3 ) + 1;

    click += 1;
    if( click === 1 ){
        console.log("first-round " + "\n" + "Player-1: " + P1_Random_Throw + "\n" + "Player-2: " + P2_Random_Throw + "\n" + "____________");
        
        if( P1_Random_Throw === 1 && P2_Random_Throw === 2 ){
            console.log("State: rock = paper");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_1_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = lose;

            LDRB_SCORE_Round_1_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }
        else if( P1_Random_Throw === 1 && P2_Random_Throw === 3 ){
            console.log("State: rock = scissor");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_1_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = win;

            LDRB_SCORE_Round_1_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }

        else if( P1_Random_Throw === 2 && P2_Random_Throw === 1 ){
            console.log("State: paper = rock");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_1_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = win;

            LDRB_SCORE_Round_1_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }
        else if( P1_Random_Throw === 2 && P2_Random_Throw === 3 ){
            console.log("State: paper = scissor");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_1_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = lose;

            LDRB_SCORE_Round_1_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }

        else if( P1_Random_Throw === 3 && P2_Random_Throw === 1 ){
            console.log("State: scissor = rock");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_1_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = lose;

            LDRB_SCORE_Round_1_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }
        else if( P1_Random_Throw === 3 && P2_Random_Throw === 2 ){
            console.log("State: scissor = paper");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_1_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = win;

            LDRB_SCORE_Round_1_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }

        // draw
        else if( P1_Random_Throw === 1 && P2_Random_Throw === 1 ){
            console.log("Draw : rock = rock");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_1_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = draw;

            LDRB_SCORE_Round_1_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = draw;
        }
        else if( P1_Random_Throw === 2 && P2_Random_Throw === 2 ){
            console.log("Draw : paper = paper");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_1_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = draw;

            LDRB_SCORE_Round_1_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = draw;
        }
        else if( P1_Random_Throw === 3 && P2_Random_Throw === 3 ){
            console.log("Draw : scissor = scissor");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_1_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_1_Player_1.style.color = draw;

            LDRB_SCORE_Round_1_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_1_Player_2.style.color = draw;
        }
    }
    if( click === 2 ){
        console.log("second-round " + "\n" + "Player-1: " + P1_Random_Throw + "\n" + "Player-2: " + P2_Random_Throw + "\n" + "____________");
        
        if( P1_Random_Throw === 1 && P2_Random_Throw === 2 ){
            console.log("State: rock = paper");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_2_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = lose;

            LDRB_SCORE_Round_2_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }
        else if( P1_Random_Throw === 1 && P2_Random_Throw === 3 ){
            console.log("State: rock = scissor");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_2_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = win;

            LDRB_SCORE_Round_2_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }

        else if( P1_Random_Throw === 2 && P2_Random_Throw === 1 ){
            console.log("State: paper = rock");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_2_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = win;

            LDRB_SCORE_Round_2_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }
        else if( P1_Random_Throw === 2 && P2_Random_Throw === 3 ){
            console.log("State: paper = scissor");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_2_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = lose;

            LDRB_SCORE_Round_2_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }

        else if( P1_Random_Throw === 3 && P2_Random_Throw === 1 ){
            console.log("State: scissor = rock");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_2_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = lose;

            LDRB_SCORE_Round_2_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }
        else if( P1_Random_Throw === 3 && P2_Random_Throw === 2 ){
            console.log("State: scissor = paper");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_2_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = win;

            LDRB_SCORE_Round_2_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }

        // draw
        else if( P1_Random_Throw === 1 && P2_Random_Throw === 1 ){
            console.log("Draw : rock = rock");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_2_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = draw;

            LDRB_SCORE_Round_2_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = draw;
        }
        else if( P1_Random_Throw === 2 && P2_Random_Throw === 2 ){
            console.log("Draw : paper = paper");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_2_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = draw;

            LDRB_SCORE_Round_2_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = draw;
        }
        else if( P1_Random_Throw === 3 && P2_Random_Throw === 3 ){
            console.log("Draw : scissor = scissor");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_2_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_2_Player_1.style.color = draw;

            LDRB_SCORE_Round_2_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_2_Player_2.style.color = draw;
        }
    }
    if( click === 3 ){
        console.log("third-round " + "\n" + "Player-1: " + P1_Random_Throw + "\n" + "Player-2: " + P2_Random_Throw + "\n" + "____________");
        
        if( P1_Random_Throw === 1 && P2_Random_Throw === 2 ){
            console.log("State: rock = paper");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_3_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = lose;

            LDRB_SCORE_Round_3_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }
        else if( P1_Random_Throw === 1 && P2_Random_Throw === 3 ){
            console.log("State: rock = scissor");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_3_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = win;

            LDRB_SCORE_Round_3_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }

        else if( P1_Random_Throw === 2 && P2_Random_Throw === 1 ){
            console.log("State: paper = rock");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_3_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = win;

            LDRB_SCORE_Round_3_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }
        else if( P1_Random_Throw === 2 && P2_Random_Throw === 3 ){
            console.log("State: paper = scissor");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_3_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = lose;

            LDRB_SCORE_Round_3_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }

        else if( P1_Random_Throw === 3 && P2_Random_Throw === 1 ){
            console.log("State: scissor = rock");

            Player_1_Background.style.backgroundColor = lose;
            Player_2_Background.style.backgroundColor = win;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_3_Player_1.innerText   = Lost_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = lose;

            LDRB_SCORE_Round_3_Player_2.innerText   = Add_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = win;

            let Player_2_SCORE_Number = Number(Player_2_Score.innerText) + Additional_Score;
            Player_2_Score.innerText = Player_2_SCORE_Number;
        }
        else if( P1_Random_Throw === 3 && P2_Random_Throw === 2 ){
            console.log("State: scissor = paper");

            Player_1_Background.style.backgroundColor = win;
            Player_2_Background.style.backgroundColor = lose;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_3_Player_1.innerText   = Add_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = win;

            LDRB_SCORE_Round_3_Player_2.innerText   = Lost_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = lose;

            let Player_1_SCORE_Number = Number(Player_1_Score.innerText) + Additional_Score;
            Player_1_Score.innerText = Player_1_SCORE_Number;
        }

        // draw
        else if( P1_Random_Throw === 1 && P2_Random_Throw === 1 ){
            console.log("Draw : rock = rock");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = rock;
            Player_2_Thrown.src = rock;

            LDRB_SCORE_Round_3_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = draw;

            LDRB_SCORE_Round_3_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = draw;
        }
        else if( P1_Random_Throw === 2 && P2_Random_Throw === 2 ){
            console.log("Draw : paper = paper");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = paper;
            Player_2_Thrown.src = paper;

            LDRB_SCORE_Round_3_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = draw;

            LDRB_SCORE_Round_3_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = draw;
        }
        else if( P1_Random_Throw === 3 && P2_Random_Throw === 3 ){
            console.log("Draw : scissor = scissor");

            DrawSFX.play();

            Player_1_Background.style.backgroundColor = draw;
            Player_2_Background.style.backgroundColor = draw;

            Player_1_Thrown.src = scissor;
            Player_2_Thrown.src = scissor;

            LDRB_SCORE_Round_3_Player_1.innerText   = Draw_Score;
            LDRB_SCORE_Round_3_Player_1.style.color = draw;

            LDRB_SCORE_Round_3_Player_2.innerText   = Draw_Score;
            LDRB_SCORE_Round_3_Player_2.style.color = draw;
        }

        let Get_Player_1_Score = Number(LDRB_SCORE_Round_1_Player_1.innerText) + Number(LDRB_SCORE_Round_2_Player_1.innerText) + Number(LDRB_SCORE_Round_3_Player_1.innerText);
        let Get_Player_2_Score = Number(LDRB_SCORE_Round_1_Player_2.innerText) + Number(LDRB_SCORE_Round_2_Player_2.innerText) + Number(LDRB_SCORE_Round_3_Player_2.innerText);

        console.log("\n" + "Score Remarks: " + "\n" + "Player-1: " + Get_Player_1_Score + "\n" + "Player-2: " + Get_Player_2_Score);
        if( Get_Player_1_Score > Get_Player_2_Score ){
            console.log("Player 1 wins!");

            WinnerSFX.play();

            Announcer.innerText   = "Player 1 wins!";
            Announcer.style.color = win;

            Player_1_Score.innerText = "";
            Player_2_Score.innerText = "";
        }
        if( Get_Player_2_Score > Get_Player_1_Score ){
            console.log("Player 2 wins!");

            WinnerSFX.play();

            Announcer.innerText   = "Player 2 wins!";
            Announcer.style.color = win;

            Player_1_Score.innerText = "";
            Player_2_Score.innerText = "";
        }

        if( Get_Player_1_Score === 1 && Get_Player_2_Score === 1 ){
            console.log("All tie!");

            DrawSFX.play();

            Announcer.innerText   = "All tie!";
            Announcer.style.color = draw;

            Player_1_Score.innerText = "";
            Player_2_Score.innerText = "";
        }
        else if( Get_Player_1_Score === 0 && Get_Player_2_Score === 0 ){
            console.log("All Draw!");

            DrawSFX.play();

            Announcer.innerText   = "All Draw!";
            Announcer.style.color = draw;

            Player_1_Score.innerText = "";
            Player_2_Score.innerText = "";
        }
    }
    if( click === 4 ){
        console.log( "Gamer reset" );
        click = 0;

        Announcer.innerText   = "";

        Player_1_Background.style.transition = "0.3s ease-in-out";
        Player_2_Background.style.transition = "0.3s ease-in-out";

        Player_1_Background.style.backgroundColor = "white";
        Player_2_Background.style.backgroundColor = "white";

        Player_1_Score.innerText = "0";
        Player_2_Score.innerText = "0";

        Player_1_Score.style.color = "#CFCFCF";
        Player_2_Score.style.color = "#CFCFCF";

        LDRB_SCORE_Round_1_Player_1.innerText = "0";
        LDRB_SCORE_Round_1_Player_2.innerText = "0";

        LDRB_SCORE_Round_2_Player_1.innerText = "0";
        LDRB_SCORE_Round_2_Player_2.innerText = "0";

        LDRB_SCORE_Round_3_Player_1.innerText = "0";
        LDRB_SCORE_Round_3_Player_2.innerText = "0";

        LDRB_SCORE_Round_1_Player_1.style.color = "#CFCFCF";
        LDRB_SCORE_Round_1_Player_2.style.color = "#CFCFCF";

        LDRB_SCORE_Round_2_Player_1.style.color = "#CFCFCF";
        LDRB_SCORE_Round_2_Player_2.style.color = "#CFCFCF";

        LDRB_SCORE_Round_3_Player_1.style.color = "#CFCFCF";
        LDRB_SCORE_Round_3_Player_2.style.color = "#CFCFCF";

        Player_1_Thrown.src = rock;
        Player_2_Thrown.src = rock;
    }
}