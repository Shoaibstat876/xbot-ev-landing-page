# XBOT EV Landing Page

A premium, single-product landing page created for XBOT EV Task 5. The site presents one XBOT EV bike concept and provides a real, database-backed test-ride request workflow.

## Live Demo

Deploy this repository to Vercel to create the final public URL.

## Featured Experience

- Product-led automotive hero and premium EV visual direction
- Responsive desktop, tablet, and mobile layouts
- Clear product storytelling without unverified technical claims
- Accessible, labelled test-ride request form
- Client and server validation
- Persistent server-side lead storage
- Success feedback only after a confirmed database insert
- Safe error handling and honeypot spam control

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS with a custom design system
- Zod validation
- Next.js server route
- Neon serverless PostgreSQL database
- Drizzle ORM and migrations
- Vercel-ready production deployment configuration

## Architecture

```text
Visitor
  -> Responsive Next.js landing page
  -> Test-ride request form
  -> POST /api/test-ride
  -> Server-side Zod validation
  -> PostgreSQL database insert
  -> Confirmed success or safe error response
```

## Form and Data Flow

The form collects a name, phone number, city, preferred contact method, optional email, and optional message. Client constraints provide immediate feedback. The server independently validates every value before writing to the `test_ride_requests` table. A failed validation or database operation never returns a false success response.

## Database

The migration creates a deliberately small `test_ride_requests` table with:

- ID
- Name
- Phone
- Email
- City
- Preferred contact method
- Message
- Status
- Creation timestamp

The site does not use browser storage as the source of truth.

## Local Setup

Requirements: Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

Create a `.env.local` file containing `DATABASE_URL` for live database inserts. Never commit that file.

## Vercel Database Setup

Connect a Neon Postgres database from the Vercel Marketplace. The integration should provide `DATABASE_URL` (or `POSTGRES_URL`). The API creates its small assessment table on the first valid request.

## Verification Performed

- Production build completed successfully
- Desktop visual review completed
- Responsive CSS implemented for tablet and mobile layouts
- Three supplied product images optimized as WebP
- Production build and TypeScript validation pass.
- Retest the form after adding the production database environment variable on Vercel.

## Product-Claim Governance

The supplied materials did not include a verified model name, price, battery capacity, range, top speed, charging duration, warranty, or availability. These facts were deliberately not invented. The site directs visitors to XBOT EV for confirmed product information.

## Tools and Cost

No additional paid tool cost was incurred specifically for this task.

## Known Limitations

- Official model specifications and pricing require confirmation from XBOT EV.
- The current visual identity uses the supplied assessment imagery because a standalone official logo asset was not provided.
- Email or WhatsApp staff notifications are outside the required landing-page scope.

## Project Status

The page, server API, validation, and PostgreSQL persistence are implemented. Production deployment and final form testing are completed after connecting the repository and database in Vercel.
