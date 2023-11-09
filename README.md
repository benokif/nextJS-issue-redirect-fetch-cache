# Next.js `redirect` - `fetch` cache issue

## Starting
This is a fork of https://github.com/vercel/next-learn/tree/main , with added API routes to show the issue with caching of `fetch()` calls after a `redirect`

```
git clone
npm i && npm run dev
```

Go to `/dashboard/invoices`.
Click on the `submit` button.

This perform a `redirect` to the `dashboard/customers` page, in which a `fetch` is made to the API endpoint `api/fast`.

When the `slow` API endpoint is called, the fetch call is properly cached as expected, and you should see this in the console:

```
customers rendered
GET FAST
customers rendered
```

Comment the "http://localhost:3000/api/fast" fetch, and un-comment  the "http://localhost:3000/api/slow".

The fetch call, which is slower ( setup with a `200ms` delay), will not be cached. You should see something like this:

```
customers rendered
customers rendered
GET SLOW
GET SLOW
```