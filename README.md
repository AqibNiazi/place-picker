# 📍 Place Picker

A simple and efficient **Place Picker** application that helps users select and organize destination places based on their current location. Users can pick favorite places for future visits, making trip planning easier and more personalized.

## 🔗 Live Demo

[Live Preview :](https://place-picker-bice.vercel.app/)

## 🚀 Features

- 📌 Detects user location and arranges places based on proximity.
- 🗂️ Allows users to select and save destination places for future visits.
- ⚙️ Performance optimized using `useCallback` and `useEffect` hooks.
- 🧹 Proper cleanup of side effects to avoid memory leaks and unnecessary re-renders.

## 🛠️ Technologies Used

- **React**
- **JavaScript (ES6+)**
- **HTML/CSS**
- **Geolocation API**

## ⚛️ Hooks in Action

- **`useEffect`**: Used to handle side effects such as fetching user location and subscribing to events. Includes a cleanup function to properly remove listeners on unmount.
- **`useCallback`**: Used to memoize functions and avoid unnecessary re-renders, ensuring smoother and more efficient performance.

## 📁 Project Structure (Simplified)

```
place-picker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── hooks/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## 📦 Getting Started

Follow these instructions to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/AqibNiazi/place-picker.git
cd place-picker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm start
```

### 4. Build for Production

```bash
npm run build
```

## 🧠 Future Enhancements

- 🌍 Add map view integration (e.g., Google Maps or Leaflet).
- 🔒 Implement user authentication and persistent storage.
- 🏷️ Allow tagging and categorization of saved places.
- 📝 Add support for user notes or preferences per place.

## 📸 Screenshots

*(Add relevant screenshots here to showcase the UI and features)*

## 🤝 Contributing

Contributions are welcome!  
If you find a bug or have a feature request, feel free to [open an issue](https://github.com/AqibNiazi/place-picker/issues) or submit a pull request.


Made with ❤️ by [Aqib Niazi](https://github.com/AqibNiazi)
```

---

Let me know if you'd like to include a demo link, badges (like build status, license, etc.), or automated deployment instructions!
