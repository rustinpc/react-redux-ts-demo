# Created With Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Getting Started

Run `npm install` and then `npm run dev`

## Troubleshooting
Check that your version of node matches the one specified in the package.json file

## Next Steps
Main factor driving my decisions was time. Mainly tried to get a working MVP. Tried to demonstrate I know how to do what I need to do even if I wasn't able to do it everywhere.
### Tests
Needs lots more tests
### Styles
Use styled components everywhere so that it is consistent
More common styles
### Backend
Move search to server since we wouldn't want to return all the results in a real scenario (kept on frontend since trying to show more frontend work)
Once search on backend, debounce calls to endpoint so that not calling on every change while typing
Fix data: uuids, no html in text
### Pagination
Implement pagination on frontend and backend so as to handle any number of results


