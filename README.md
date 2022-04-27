# helloworld

// Task 2

- The first piece of code prints 10 in the console. The reason behind this is that the variable declared with let is declared locally within the scope that has been written thus will only be accessible and updatable by elements within the same scope. For that reason, in the first piece of code, the console.log prints 10, because that is the value of the variable x declared in the same scope. 

- On the contrary to the first piece of code, when a variable is declared with the statement var, it is declared globally and it can be accessed and updated by any element regardless of its scope. For that reason, when executing the code, the console prints 2. The value of the variable x has been changed when declaring it a second time thus the new value is printed when accessing to it. 

- To finish, the third piece of code prints 10 in the console. The season behind this is that the statement const declares a variable which its scope is the block that has been declared in and more importantly, cannot be updated or re-declared. As the console.log and the first const declaration are in the same scope, the console.log prints the value 10. 

