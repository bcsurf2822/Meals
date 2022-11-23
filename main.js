/* In this project, you’ll use JavaScript to randomly create a three-course meal
 based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!*/


 /*Create three properties inside the courses object called appetizers, 
 mains, and desserts. Each one of these should initialize to an empty array.*/
 const menu = {

    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    addDishToCourse: function (courseName, dishName, dishPrice) {
        const dish = {name: dishName,
             price: dishPrice};
        this.courses[courseName].push(dish);
        },

    getRandomDishFromCourse: function (courseName) {
        const dishes = this.courses[courseName]
        const random = Math.floor(Math.random()*dishes.length);
        return random;
    },

    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert= this.generateRandomMeal('desserts');
        return menu.courses
    }
    };

    
