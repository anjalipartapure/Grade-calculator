function grade(){

    var maths =Number(document.form.maths.value);
    var bio = Number(document.form.bio.value);
    var chem = Number(document.form.chem.value);
    var physics = Number(document.form.physics.value);

    var TotalMarks = 400;

    var Marksob = maths+bio+chem+physics;
    document.write("Total marks obtained"+" " +Marksob+"<br>");

    var percentage = (Marksob/TotalMarks)*100;
    document.write("your percentage is"+ " "+percentage + "%"+"<br>");
//Determinibg the Grade
    var Garde;
    if (percentage>90){
        document.write("your grade is A.congrats!"+"<br>");
         }
        else if(percentage>80 && percentage<90){
        document.write("your grade is B"+"<br>");
        }
        else{
            document.write("your grade is c"+"<br>");
        }

//pass or fail?

if (percentage>45){
    document.write("you have been passed");

}
else{
    document.write("you have been failed.try agian!");
}


}


//for better view ,using bootstrap :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade calculator</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="stylee.css">
</head>
<body>
    <div class="container" id="main">

    <div class="row">
        <div class="col-md-4" id="one">
            <h1>your result is :</h1>
            <h3 id="per"></h3>
            <h1>Your grade is :</h1>
            <h3 id="grade"></h3>

        </div>
        <div class="col-md-8" id="two">

            <form  name = "myform" onsubmit="grade()" class= "we"> 
                <div class="form-group">
                  <label for="exampleInputEmail1">PHYSICS</label>
                  <input type="text" class="form-control" name="physics" id="p" placeholder="PHYSICS">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">BIOLOGY</label>
                    <input type="text" class="form-control" name="bio" id="b" placeholder="BIOLOGY">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">MATHS</label>
                    <input type="text" class="form-control" name="maths" id="m" placeholder="MATHS">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">CHEMISTRY</label>
                    <input type="text" class="form-control" name="chem" id="c" placeholder="CHEMISTRY">
                  </div>
                <button type="submit"  class="btn btn-default">Submit</button>
              </form>
        </div>
      </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="col-md-12" id="lst">
            <h3 id="greet"> greeting::</h3>
        </div>
   </div>
    </div>

<script src="script.js"></script>
    
</body>
</html>
