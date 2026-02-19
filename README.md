# DSE Static Playwright Introduction

## Installation

* Run Devcontainer in VS-Code (Installs Node JS, PNPM , Playwright and more)
* Run `pnpm install` (Initially run when Devcontainer is initialized)
* Run `pnpm build`

## Run e2e Test Scenarios

* Start HTTP Server (required to create Screenshots) `python -m http.server`
* Run `pnpm e2e:edition_view_update_snapshots` to update/create Screenshots
* Run `pnpm e2e:edition_view` to run Screenshot Tests
* Run `pnpm e2e:run_string_match_edition_view` to run String Matching Tests

## Node JS Build for TS and SASS

* Vite Config to configure entry and output paths

## Credits

Playwright Test Scenario Templates by [Krautgartner, Barbara](https://github.com/babslgam) from Repo [WPN STATIC E2E](https://github.com/karl-kraus/wpn-static/tree/main/e2e)

## Useful Links

### Frontend Devcontainer Setup
[Devcontainer](https://github.com/acdh-oeaw/devcontainer-frontend)

### Playwright
[Playwright](https://playwright.dev/)
[Learn Playwright](https://github.com/acdh-oeaw/learn-playwright)