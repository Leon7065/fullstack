function printNames(){
    document.write("John");
    document.write("<br>")
    setTimeout(function() {
        document.write("Anna");}, 3000);
    document.write("Bob")
}

printNames();