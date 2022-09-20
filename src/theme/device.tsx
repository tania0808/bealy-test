/*
Media queries
0 - 600px    Phone
600 - 1150px   Tablet landscape
1150-1800px normal styles
1800px +   Large screen
*/

export const size = {
    phone: "950px",
    bigDesk: "950px",
  };
  
  export const device = {
    phone: `screen and (max-width: ${size.phone})`,
    bigDesk: `screen and (min-width: ${size.bigDesk})`,
  };