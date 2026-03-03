📚 Study Vault

Study Vault is a secure academic resource-sharing platform built to simplify how students upload, discover, and access study materials. Designed with scalability and security in mind, it delivers a smooth experience for both contributors and learners.

🧭 How the Platform Operates 1️⃣ Account Creation & Email Confirmation

Users create an account using their email and password.

A One-Time Password (OTP) is sent to verify ownership of the email.

Passwords are encrypted before being stored in the database.

Only verified users gain full platform access.

2️⃣ Secure Login & Session Handling

Users authenticate with their registered credentials.

Upon successful login, a JWT is generated to maintain secure sessions.

Protected routes ensure that only authorized users can perform restricted actions.

3️⃣ Uploading Study Materials

Logged-in users can upload PDF notes and resources.

Files are validated before being processed.

Documents are stored in Cloudinary for reliable cloud hosting.

Each upload includes metadata such as:

Title

Subject

Semester

Description

This makes searching and organizing content efficient.

4️⃣ Personal Resource Dashboard

Users can manage their uploads from a private dashboard.

Edit or delete functionality is available exclusively to the resource owner.

Strict access control ensures data integrity and privacy.

5️⃣ Browsing Without Barriers

Visitors can explore resources without registering.

Search and filter options help users quickly locate relevant materials.

Resources are available for instant download via secure Cloudinary links.

6️⃣ Rating & Feedback Mechanism

Authenticated users can rate materials on a 1–5 star scale.

Ratings are visible to others, enabling quality-based decision making.

Encourages collaborative improvement of shared resources.

7️⃣ Data Protection & Validation

Backend validation powered by Joi prevents invalid submissions.

All APIs are guarded with authentication and authorization middleware.

Ensures safe data handling and system reliability.

8️⃣ Performance Considerations

Pagination keeps browsing fast even with a growing dataset.

Cloud-based storage ensures quick delivery of PDF files.

Architecture designed to scale with increased users and content.

📸 Application Screens

Home Interface

User Registration

Login Screen

Upload Resource Panel

Explore Resources

Resource Detail & Review

My Uploads Dashboard

🛠 Technology Stack Backend

Node.js

Express.js

MongoDB Atlas with Mongoose

JSON Web Tokens (JWT)

Joi

Multer

Cloudinary SDK

Nodemailer

Frontend

React.js

React Router DOM

Axios

Responsive CSS styling