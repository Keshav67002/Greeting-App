project/
│
├── backend/
│   ├── app.py
│   ├── service.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
 
User types name
     ↓
Click Submit
     ↓
Frontend → POST /greet
     ↓
Backend route matches
     ↓
Controller runs
     ↓
Service generates message
     ↓
Response sent back
     ↓
Frontend displays result