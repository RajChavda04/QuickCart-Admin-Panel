# QuickCart — Admin Panel

Web-based admin dashboard to manage products, categories, customers, orders, and feedback for the **QuickCart** e-commerce platform.

> Requires the [QuickCart Backend Server](https://github.com/RajChavda04/QuickCart-Backend) to be running.

---

## Tech Stack

| Technology | Version / Notes |
|------------|-----------------|
| **React** | 19.x |
| **Create React App** | `react-scripts` 5.0.1 |
| **React Router DOM** | 7.x — routing & protected routes |
| **Axios** | HTTP requests to backend API |
| **SweetAlert2** | Alerts & confirmations |
| **Bootstrap / Custom CSS** | Admin UI theme (IQ Admin template) |
| **Session Storage** | Admin login session |

---

## Features

### Dashboard (`/Home`)
- Overview cards: total sales, profit, products, categories, users, orders, feedback
- Charts and quick stats from `/api/admin/summary`

### Authentication
- **Login** (`/`) — Admin email & password
- **Forgot Password** (`/Forgot`) — Password sent to registered email
- **Change Password** (`/Passwordchange`) — Update password while logged in
- Protected routes — redirects to login if not authenticated

### Product Management
- **List Products** (`/Productlist`) — View all products with category & image
- **Add Product** (`/Addproduct`) — Name, description, price, quantity, category, image upload
- **Edit Product** (`/Productedit`) — Update product details & optional new image
- **Delete Product** — Remove product from database

### Category Management
- **List Categories** (`/Catagorylist`) — View all categories
- **Add Category** (`/Catagoryadd`) — Name, description, image upload
- **Edit Category** (`/Categoryedit`) — Update category & image
- **Delete Category** — Remove category

### Customer Management
- **Customer List** (`/Customerlist`) — View all registered users
- **Block / Unblock** — Toggle `customer_status` (blocked users cannot login)

### Order Management
- **Order List** (`/Order`) — View all orders grouped by order number
- **Update Order Status** — Pending, processing, shipped, delivered, etc.
- **Order Details** (`/Order2`) — Full order info, items, customer address

### Feedback
- **Feedback List** (`/Feedback`) — View customer ratings & messages
- **Delete Feedback** — Remove feedback entries

### Admin Profile
- **Admin Details** (`/Admindetails`) — View admin profile information

---

## How It Works

1. Admin opens the app → **Login** page sends credentials to `POST /api/loginprocess`.
2. On success, admin data is stored in **sessionStorage** (`mydata`).
3. **ProtectedRoute** blocks all dashboard pages until logged in.
4. Each page uses **Axios** to call the backend API (`API_BASE_URL` from `.env`).
5. Product/category images are uploaded via **FormData**; displayed using `MEDIA_BASE_URL`.
6. Logout clears session and returns to login.

```
┌─────────────┐     HTTP (Axios)      ┌─────────────┐     MySQL      ┌──────────┐
│ Admin Panel │ ───────────────────► │   Server    │ ◄────────────► │ Database │
│  (React)    │ ◄─────────────────── │  (Express)  │                └──────────┘
└─────────────┘                       └─────────────┘
```

---

## Project Structure

```
admin/
├── public/
│   └── assets/          # CSS, JS, images, admin theme
├── src/
│   ├── App.js           # Routes & layout
│   ├── Components/
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   └── Footer.js
│   ├── Pages/
│   │   ├── Login.js
│   │   ├── Home.js          # Dashboard
│   │   ├── Productlist.js
│   │   ├── Addproduct..js
│   │   ├── Productedit.js
│   │   ├── Catagorylist.js
│   │   ├── Catagoryadd.js
│   │   ├── Categoryedit.js
│   │   ├── Customerlist.js
│   │   ├── Order.js
│   │   ├── Order2.js
│   │   ├── Feedback.js
│   │   └── ...
│   ├── config/
│   │   └── apiConfig.js   # API base URL
│   └── utils/
│       └── ProtectedRoutes.js
├── package.json
├── .env
└── docs/
    └── screenshots/       # Add your screenshots here
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- **QuickCart Server** running (see [Server README](https://github.com/RajChavda04/QuickCart-Backend))

---

## Installation (From GitHub)

### 1. Clone the repository

```bash
git clone https://github.com/RajChavda04/QuickCart-Admin-Panel.git
cd QuickCart-Admin-Panel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=http://localhost:1337
```

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | Backend server URL (no trailing slash) |

### 4. Set up the database (one-time)

This app needs the **QuickCart MySQL database**. You do not need the author's database credentials.

1. Install [XAMPP](https://www.apachefriends.org/) and start **MySQL**
2. Open **phpMyAdmin** → http://localhost/phpmyadmin
3. Import the SQL file from the Backend repo:  
   [`QuickCart-Backend/database/quickcart.sql`](https://github.com/RajChavda04/QuickCart-Backend/blob/main/database/quickcart.sql)
4. Default admin after import: `admin@quickcart.com` / `admin123` (change in phpMyAdmin)

### 5. Start the backend server first

In the **Server** project folder:

```bash
npm run dev
```

Ensure `http://localhost:1337/api/health` returns `Server is running`.

### 6. Run the admin panel

**Default port (3000):**

```bash
npm start
```

**Recommended — use port 3001** (so User panel can use 3000):

**Windows (PowerShell):**

```powershell
$env:PORT=3001; npm start
```

**Windows (CMD):**

```cmd
set PORT=3001 && npm start
```

**macOS / Linux:**

```bash
PORT=3001 npm start
```

Open: **http://localhost:3001**

### 7. Login

Use admin credentials from your MySQL `admin` table (default after SQL import: `admin@quickcart.com` / `admin123`).

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Production build to `build/` folder |
| `npm test` | Run tests |
| `npm run eject` | Eject from CRA (irreversible) |

---

## Routes

| Path | Page | Access |
|------|------|--------|
| `/` | Login | Public |
| `/Forgot` | Forgot Password | Public |
| `/Home` | Dashboard | Protected |
| `/Productlist` | Product List | Protected |
| `/Addproduct` | Add Product | Protected |
| `/Productedit` | Edit Product | Protected |
| `/Catagorylist` | Category List | Protected |
| `/Catagoryadd` | Add Category | Protected |
| `/Categoryedit` | Edit Category | Protected |
| `/Customerlist` | Customers | Protected |
| `/Order` | Orders | Protected |
| `/Order2` | Order Details | Protected |
| `/Feedback` | Feedback | Protected |
| `/Admindetails` | Admin Profile | Protected |
| `/Passwordchange` | Change Password | Protected |

---

## Screenshots

> Add images to `docs/screenshots/` with the filenames below (or update paths in this README).

### Login Page

![Admin Login](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043508/adminlogin_hgrvei.png)

### Dashboard

![Admin Dashboard](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043510/dashboard_xjdfeb.png)

### Product List

![Product List](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043505/prodcutlist_dpcef0.png)

### Add Product

![Add Product](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043503/updateform_idu9hm.png)

### Category List

![Category List](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043500/category_stfrfk.png)

### User List

![User List](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780044521/userlist_cddl99.png)

### Order List

![Order List](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043498/order_ay0nns.png)

### Order Details

![Order Details](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043491/orderdetails_gmsczw.png)

### Feedback List

![Feedback](https://res.cloudinary.com/dmuedtbcs/image/upload/v1780043489/feedback_yk9nzm.png)

---

## Deployment

1. Set `REACT_APP_API_URL` to your **production** API URL before build:

```bash
npm run build
```

2. Deploy the `build/` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any static host.

3. Add your deployed admin URL to the Server `.env` as `FRONTEND_ADMIN_URL`.

---

## Related Repositories

- [QuickCart Backend Server](https://github.com/RajChavda04/QuickCart-Backend)
- [QuickCart User Panel](https://github.com/RajChavda04/QuickCart-User-Panel)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API / network errors | Start Server; check `REACT_APP_API_URL` in `.env` |
| Login fails | Verify admin exists in MySQL `admin` table |
| Images not showing | Check `MEDIA_BASE_URL` — images come from Server `/public` |
| Port already in use | Use `PORT=3001 npm start` or stop other React app |

---

## Author

**Raj Chavda**
