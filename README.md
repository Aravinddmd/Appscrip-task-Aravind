# Appscrip Frontend Task - Aravind

Hi, this is Aravind. This is my submission for the Frontend PLP (Product Listing Page) assignment.

I built this using **Next.js 14 (App Router)** and **TypeScript**. Per the requirements, I did not use any CSS frameworks (like Tailwind or Bootstrap), everything is styled with **pure CSS Modules** to keep the bundle size minimal.

_Note_: The fakestore API is not working correctly with netlify, so added mockdata as a fallback data

## Live Demo

https://appscrip-task-aravind.netlify.app/

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (Vanilla CSS)
- **Icons:** Lucide-React
- **Data:** FakeStoreAPI

---

## Key Features & Technical Decisions

Here is a breakdown of how I approached the specific requirements:

### 1. Server-Side Rendering (SSR) & Performance

I implemented **Dynamic Server Rendering** using `export const dynamic = "force-dynamic"`.

- **Why:** This ensures the page is rendered on the server for every request, providing up-to-date data and fulfilling the assignment's SSR requirement.
- **Deployment:** This strategy also ensures stable deployments by avoiding API rate-limits from free api like fakestore during the static build phase.

### 2. URL-Based State Management (The "Filter" Logic)

Instead of just using local React state, I synced the **Filters and Sorting** to the URL query parameters (e.g., `?category=jewelery&sort=low-high`).

- **Benefit:** You can copy the URL, send it to a friend, and they will see the exact same filtered view. It also makes the browser "Back" button work as expected.

_Note_: Categories are hardcoded for performance since FakeStoreAPI is static. In a real application, I would fetch them dynamically from an endpoint.

### 3. SEO & Schema Markup

I paid special attention to the SEO requirements:

- **Dynamic Metadata:** The browser tab title changes based on the active filter (e.g., "Jewelery | Appscrip").
- **Semantic HTML:** Used `<h1>` for the main title, `<h2>` for product names, and `<article>` for cards.
- **JSON-LD Schema:** I injected structured data (Itemlist) so search engines understand this is a product collection.

_Note:_ Since I am using a 3rd party API, I couldn't rename the image files for SEO, but in a real-world scenario, I would ensure filenames match the product keywords.

### 4. Responsive Design Strategy

I used a hybrid approach to ensure the layout looks good on all devices:

- **Mobile:** 2-Column grid with a simplified header.
- **Desktop:** 3-Column grid with a full sidebar till standard desktop size.
- **CSS Grid:** I used `minmax(280px, 1fr)` and `auto-fill` to make the grid fluid rather than relying on too many hard breakpoints.

---

## Project Structure

I kept the code modular to make it readable:

- `/app`: Main application logic (App Router).
- `/components`:
  - `Footer`: The bottom footer section.
  - `ProductCard`: Handles the display logic.
  - `Sidebar`: Handles the checkbox logic and URL updates.
  - `Hero`: The top banner section.
  - `Header`: The top header section .
- `types.ts`: Shared TypeScript interfaces to avoid using `any`.

---

## How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [YOUR_REPO_LINK]
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000)

---

## Final Thoughts

I focused heavily on the **User Experience**— adding a loading state (`loading.tsx`) so the user doesn't see a blank white screen while data fetches.

Thank you for reviewing my code!
