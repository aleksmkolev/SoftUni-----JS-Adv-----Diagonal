function solve(matrix){

    
        let main = 0
        let secondary = 0

        for (let i = 0; i < matrix.length; i++) {
            main += matrix[i][i]
            secondary += matrix[i][matrix.length - 1- i]

            
        }
        console.log(main);
        console.log(secondary);
        
        


}
solve([[3, 5, 17],
     [-1, 7, 14], 
     [1, -8, 89]])