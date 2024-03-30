
# Qtify.

QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.
	
While building this Micro-Experience, the developer:

- Conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components.

- Created modular UI components including Cards, Carousels, and Buttons optimizing for reusability across various sections of the application.

- Implemented an intuitive genre-based song filtering system using a tab component by modifying the one provided by MaterialUI, allowing users to browse songs by their preferred genre effortlessly.
- Utilized REST APIs to fetch data served by the backend server
- Deployed the website to Vercel





![image](https://github.com/Slayer-Wolf/L-square-QTify/assets/87927240/58c3db37-1008-4bf4-8f64-407760607ff2)


## Component breakdown and building the Navbar and Hero Section

**Scope of work**

- Conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components

- Designed a reusable button component with unique styling, adaptable for various functionalities across the application.

- Developed a responsive navigation bar featuring a custom logo, a search component with custom styling, and a feedback button.

- Created an eye-catching hero section with promotional content, effectively capturing user interest.



## Tech Stack

**Client:** ReactJS, Module-scoped CSS Flexbox, CSS    variables, Swiper, Material Ui, Vercel

**Server:** Node, Express


## Album Section

**Scope of work**

- Developed a dynamic, responsive, and reusable Card component with Material-UI integration, featuring custom CSS, efficient data handling, and enhanced user interaction through tooltips and lazy-loaded images.

- Implemented and customized a carousel feature using the Swiper library and utilizing custom navigation.

- Developed a dynamic Section component capable of dynamically displaying content in both carousel and grid layouts using conditional rendering.

### Images
![image](https://github.com/Slayer-Wolf/L-square-QTify/assets/87927240/d6f79932-448e-4865-9931-ced72ea207f4)
*Top Albums Carousel View (Conditional Rendering)*

![image](https://github.com/Slayer-Wolf/L-square-QTify/assets/87927240/b948f444-e437-4419-a8fd-39d49b7aada2)
*Top Albums Grid View (Conditional Rendering)*
## Song Section

 **Scope of work**

- Created a reusable Filters component, using Material-UI Tabs for a seamless and interactive filtering experience

- Utilized Axios to fetch the genre options and song data served by the backend, and performed error handling for the same.

- Implemented conditional rendering logic to display filter options within the Section component exclusively in the Songs section.

### Images

![image](https://github.com/Slayer-Wolf/L-square-QTify/assets/87927240/7126f8e0-9fb4-492a-be21-76fa2e0831e8)
*Songs Section reusing the Section component as Albums Section but includes Tab as well*

![image](https://github.com/Slayer-Wolf/L-square-QTify/assets/87927240/1d381382-83ef-49cc-a11a-ddc53be4a2ad)
*Songs Section (now filtered as per Jazz genre)*
## Deployment

**Scope of Work**

- Deployed the Qtify React app to Vercel by importing the project repository from GitHub.
