# 🏥 MediCare

MediCare is a full-stack doctor appointment system that connects patients with doctors via seamless booking, dashboards, and real-time notifications. It features JWT-based authentication, Nodemailer email confirmations, doctor/patient dashboards, appointment approval, and clean UI using Tailwind and React.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-EA4335?style=flat&logo=gmail&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![DotEnv](https://img.shields.io/badge/.env-8DD6F9?style=flat&logo=dotenv&logoColor=black)
![Mongoose](https://img.shields.io/badge/Mongoose-AA2929?style=flat&logo=mongoose&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-F16529?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-264DE4?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

```
📁 Project Structure

MediCare/
├── backend/
│   ├── controllers/           # Route handler logic (Doctors, Users, Bookings)
│   │   ├── doctorController.js
│   │   ├── userController.js
│   │   └── bookingController.js
│   ├── models/                # Mongoose data models
│   │   ├── Doctor.js
│   │   ├── User.js
│   │   └── Booking.js
│   ├── routes/                # API route definitions
│   │   ├── doctorRoutes.js
│   │   ├── userRoutes.js
│   │   └── bookingRoutes.js
│   ├── utils/                 # Helper functions (e.g., sendEmail)
│   │   └── sendEmail.js
│   ├── middleware/            # Authentication & error handling
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── config/                # DB connection & environment
│   │   └── db.js
│   ├── .env                   # Environment variables (not pushed to GitHub)
│   ├── server.js              # Entry point for Express app
│   └── package.json           # Backend dependencies and scripts
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/        # Images like doctor-illustration, icons
│   │   ├── components/        # Reusable components (Navbar, Footer, Loader)
│   │   ├── pages/             # Route pages (Home, Login, DoctorDetails)
│   │   ├── dashboard/         # Doctor & user dashboards
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # React DOM render entry
│   ├── public/
│   │   └── index.html         # HTML template
│   ├── tailwind.config.js     # Tailwind CSS config
│   ├── postcss.config.js      # PostCSS config
│   ├── vite.config.js         # Vite dev server config
│   ├── .env                   # Frontend environment variables
│   └── package.json           # Frontend dependencies and scripts
│
├── img/                       # Project documentation images/screenshots
│   └── preview.png
│
├── README.md                  # Project overview and documentation
├── .gitignore                 # Files ignored by Git
└── LICENSE                    # Project license

```

🧪 Local Setup Instructions

```bash
# Clone the repository
git clone https://github.com/vedantb23/MediCare.git
cd MediCare

# Setup backend
cd backend
npm install

# Create a .env file in /backend with:
# PORT=5000
# MONGODB_URL=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# EMAIL=youremail@gmail.com
# EMAIL_PASS=your_email_app_password

npm run dev

# Setup frontend
cd ../frontend
npm install
npm run dev
```

📱 UI Overview

- Modern responsive UI using React + Tailwind
- Light theme with card-style layout for doctor profiles
- Tabbed interface (About, Feedback)
- Side panel for appointment booking
- Toast notifications for feedback/success
- Dashboard for doctors and patients
- Appointments displayed in clean table format with approve/reject toggles

🧰 Features

- Patient and Doctor registration/login
- Role-based authentication via JWT
- Book, cancel, and manage appointments
- Doctor can approve or reject bookings
- Email confirmation on successful booking using Nodemailer
- Feedback system for doctors
- Full CRUD operations for users and appointments
- Clean responsive design
- Hosted frontend on Vercel, backend on Railway/Deta Space

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
