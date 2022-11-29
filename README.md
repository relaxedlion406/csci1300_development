# Development

### Link to Deployed Website
https://relaxedlion406.github.io/csci1300_development/

### Goal and Value of the Application

This is a card game. This game allows players to choose 5 wizard cards to compete with other players. Each card has the attributes of the wizard, the house it belongs to, and the price(unit is Gallon which is a currency of wizarding world). 

### Usability Principles Considered
Layout: The page title uses images of the four Hogwarts houses, indicating that the app is related to the wizarding world. Filters are named after 4 houses to clearly display information.
Hierarchy: Heading 1 font is used to display tasks, Heading 2 font is used to display user's initial funds. In the body of the web page, the sort and filter buttons are located on the left side of the screen. In the middle, all wizard cards are displayed in a grid. Then, the shopping cart component is displayed on the right.



### Organization of Components
There are 4 components, Filter, Sort, Cart, and wizard. 
**Filter**: 
It contains two parts. The first part is a 5-key filter to filter wizards for different houses and reset to default. Then, the next section is "Filter by Skills". Wizards have a "skill" attribute that can be used to play a card game. So inside that section there are 8 buttons for different skills and a reset button.

**Sort**:
It has only one button. Clicking this button allows the user to sort the wizard cards alphabetically. 

**Cart**:
It is divided into 3 sections, the title of the component and the items in the cart, then the total price of the cart. In the items section, there is a delete button and an add button along with the name and quantity of the items.

**wizard**:
Each wizard component has the image of the wizard, as well as the card's name, house, skills, and price.

### How Data is Passed Down Through Components
I use 4 types of components in the application which are Cart, Filter, Sort, and wizard.  The components are organized in columns. Sort and Filter are put aside. All wizards are displaced at the middle. The right side is the cart. 

**Cart:** 

 	Props: cart items, remove and add button for each item. 

**Filter: I have 3 filters which filter the house, gender, and card type. 

​	props: useState: [activeHouse, setActiveHouse], [activeGender, setActiveGender], [activeSkill, setActiveSkill]

**Sort:**

​	props: filtered data, setFiltered function. 

**wizard**: This component is used to display the information of every wizard and also add to cart button. 

​	Props: wizard item (information of each wizard), function to add wizard to cart. 

### How the User Triggers State Changes
When the user clicks the "Sort A-Z" button, the cards will appear in alphabetical order. When the user clicks a button for a different house, the wizards belonging to that house are displayed.

