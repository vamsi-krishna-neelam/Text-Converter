# 📝 Text Converter App (React.js)

This project is a text converter web app built using React.js. It allows users to manipulate text in various ways such as converting to uppercase, lowercase, sentence case, title case, alternate case, and more. It also includes features to clear, copy, download, and remove extra spaces from the text.

> ✅ Built with Create React App

---

## 🚀 Features

### 🔠 Convert to uppercase
Converts all characters in the input text to uppercase.  
**Example:** `Hello World` → `HELLO WORLD`

### 🔡 Convert to lowercase
Converts all characters in the input text to lowercase.  
**Example:** `Hello World` → `hello world`

### ✍️ Convert to sentence case
Capitalizes only the first letter of each sentence.  
**Example:** `hello world. how are you?` → `Hello world. How are you?`

### 📝 Convert to title case
Capitalizes the first letter of every word.  
**Example:** `hello world` → `Hello World`

### 🔄 Convert to alternate case
Alternates the casing of letters (upper-lower).  
**Example:** `hello world` → `HeLlO WoRlD`

### 🧹 Remove extra spaces
Removes unnecessary multiple spaces between words and trims the text.  
**Example:** `Hello     world   !` → `Hello world !`

### 📋 Copy text
Copies the current text from the input field to the clipboard.

### 💾 Download text
Downloads the current text as a `.txt` file named `textutils_output.txt`.

### ❌ Clear text
Removes all content from the text area, leaving it blank.

---

## 🛠️ Tech stack

- **Frontend:** React.js
- **Routing:** react-router-dom
- **Styling:** CSS
- **Text manipulation:** JavaScript

---

## 📂 Project structure

```
text-converter/
├── public/
├── src/
│   ├── components/
│   │   ├── TextForm.js
│   │   ├── Alert.js
│   │   └── About.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

---

## 🧪 How to use the app

1. Clone the repository:
   ```bash
   git clone https://github.com/vamsi-krishna-neelam/text-converter.git
   cd text-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Available scripts

| Command         | Description                          |
|----------------|--------------------------------------|
| `npm start`     | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm test`      | Run the test suite                   |
| `npm run eject` | Eject the app for full control       |

---

## 🌐 Deployment

The app can be deployed using services like:
- GitHub Pages
- Vercel
- Netlify

Refer: [Create React App Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment)

---

## 📸 Screenshots

> *(Add screenshots of your application here if available)*

---

## 📘 Learn more

- [React.js documentation](https://reactjs.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

## 👨‍💻 Author

**Vamsi Krishna Neelam** – [@vamsi-krishna-neelam](https://github.com/vamsi-krishna-neelam)
