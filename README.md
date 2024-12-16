# **Angular Free-To-Play Games**

![Angular Free-to-Play Games](./angular-f2p-games.png)

Explore and discover the best free-to-play games for PC and browser, all presented in a sleek and modern Angular application. This project is powered by the **[FreeToGame API](https://www.freetogame.com/)** and built using **Angular 19** with the latest web development practices, ensuring a responsive and visually appealing user experience.

---

## **Features**
- 🕹️ Browse a comprehensive list of free-to-play games.
- 🎮 Filter games by **category** (e.g., MMORPG, Shooter) and **platform** (e.g., PC, Browser).
- 🌐 Modern design with responsive layouts and animations.
- 🔍 Detailed game pages with information about genre, platform, and publishers.

---

## **Project Setup**
Follow the steps below to get the project up and running on your local machine.

### **1. Clone the repository**
```bash
git clone https://github.com/brunofilipefs96/angular-f2p-games.git
cd angular-f2p-games
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Add your RapidAPI Key**
- Sign up at RapidAPI to obtain a free API key for the FreeToGame API.
- Open the game.service.ts file located in the src/app/services folder.
- Replace the placeholder X-RapidAPI-Key with your own key:
```bash
private headers = new HttpHeaders({
  'X-RapidAPI-Key': 'Your-RapidAPI-Key>',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
});
```

### **4. Start the Development Server**
Run the following command to start the application:
```bash
ng serve
```

---

## **Credits**
This project uses data from the [FreeToGame API](https://www.freetogame.com/). The API provides metadata about free-to-play games, including genres, developers, and platforms. Special thanks to Digiwalls Media for maintaining this fantastic API!
