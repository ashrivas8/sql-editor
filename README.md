# Svelte + Vite

## Description
Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application..

## Tech stack used
- Svelte
- Vite

## Dependencies used
- svelte-codemirror-editor

## [Live demo](https://sql-editor-pi.vercel.app/)

## Performance benchmarks
The page load of this website takes around 450ms to 600ms.

- pagespeed [report](https://pagespeed.web.dev/analysis/https-sql-editor-pi-vercel-app/m71wjcyvdw?form_factor=desktop)
- gtmetrix [report](https://gtmetrix.com/reports/sql-editor-pi.vercel.app/n9kzrsHT/)

## Optimisations to improve performance
- Using svelte over other heavier frameworks to have smaller initial bundle size
- Using vercel for deployments to leverage the Vercel Edge Network compression.
- Assimilated feedbacks from pagespeed reports.

### What else can be done for performance?
Use `splitVendorChunkPlugin` to separate production dependencies into a vendor bundle with a careful caching strategy. This will split our single bundle in two chunks and the application code will be in one whereas the dependencies we have installed will be in another and can be cached for longer durations.

## Future scope
- Shareable link of the executions
- Saving queries
- Scheduling queries

Note: The above scope is assuming that some infra and backend will be set up.
