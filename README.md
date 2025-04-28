# Swifty Companion

<p align="center">
  <img src="https://github.com/user-attachments/assets/6c13464a-68ed-4d95-ad95-914496660a19" width="300" />
</p>


Swifty Companion is a **React Native mobile application** that allows you to **search and view 42 school students' profiles**.

The app connects to the **42 API** using OAuth2 authentication and presents cleanly organized information about each student, including their personal details, cursus progress, skills, and finished projects.

---

## ✨ Main Features

- 🔍 **Search students** by login.
- 👤 **Display profile details**: display name, login, email, wallet, correction points.
- 🎓 **List all cursus** the student is enrolled in.
- 📈 **Show student's overall level** for each cursus.
- 🛠️ **Display skills** with levels and animated progress bars.
- 📚 **List completed projects** with pass/fail validation.
- 🔒 **Manage OAuth2 tokens** smartly: cache tokens, refresh before expiration, and auto-retry on token errors.
- 📱 **Responsive and clean design** for mobile screens.

---

## 🚀 Quick Start

### To run the app, write these commands in your terminal (tested on Windows/Android):

```bash
git clone https://github.com/AlexLuthor135/swifty_companions.git
cd SwiftyCompanion
npm install
npx react-native run-android
```
---
### In case of errors with @env, run this command:
```bash
npx react-native start --reset-cache
```
## 🔧 Environment Variables

You need to create a `.env` file at the root of the project, as in `.env_example`.

Here are the required environment variables:

| Variable Name | Description                              | Example                         |
|:--------------|:-----------------------------------------|:--------------------------------|
| `API_UID`     | Your 42 API application UID (client ID)  | `ab12c34d567890abcdef1234567890` |
| `API_SECRET`  | Your 42 API application secret           | `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p` |
| `API_URL`     | Base URL of the 42 API                   | `https://api.intra.42.fr` |

### Example `.env` file:

```dotenv
API_UID=your_api_uid_here
API_SECRET=your_api_secret_here
API_URL=https://api.intra.42.fr
```

## 🗂️ Project Structure

```plaintext
SwiftyCompanion/
├── api/                  # API logic (authentication, token management, user data fetching)
│   └── api.js
├── screens/               # App screens (LoginScreen, ProfileScreen)
│   ├── LoginScreen.jsx
│   └── ProfileScreen.jsx
├── styles/                # Style sheets for screens and components
│   ├── LoginScreenStyle.js
│   └── ProfileScreenStyle.js
├── App.jsx                # Main app navigation and entry point
├── .env_example           # Example environment configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── ...                    # Other configuration files (babel.config.js, etc.)
```

