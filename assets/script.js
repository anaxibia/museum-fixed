const element = document.getElementById("image-compare");
  
const viewer = new ImageCompare(element).mount();

// const viewers = document.querySelectorAll(".image-compare");
  
// viewers.forEach((element) => {
//   let view = new ImageCompare(element).mount();
// });

// const options = {

//   // UI Theme Defaults

//   controlColor: "#FFFFFF",
//   controlShadow: true,
//   addCircle: false,
//   addCircleBlur: true,

//   // Label Defaults

//   showLabels: false,
//   labelOptions: {
//     before: 'Before',
//     after: 'After',
//     onHover: false
//   },

//   // Smoothing

//   smoothing: true,
//   smoothingAmount: 100,

//   // Other options

//   hoverStart: false,
//   verticalMode: false,
//   startingPoint: 50,
//   fluidMode: false
// };
  
// // Add your options object as the second argument
// const view = new ImageCompare(element, options).mount();