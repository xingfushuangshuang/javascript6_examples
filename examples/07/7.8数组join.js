var a = [1,2,3]

a.join() //"1,2,3"
a.join("") //"123"
a.join(" ") //"1 2 3"

// Array.join() 是String.split()的逆向操作
"1,2,3".split(",") //["1", "2", "3"]