# Data Avenue
Data Avenue is a portal that allows producers and consumers of data to collaborate and find information across the company.

## Benefits
- Learnings are shared across teams in the company
- Enforces consistency on the methodology and data sources
- Collaboratively improve the documentation and use of data

## Get started
1. Clone this repo
```
git clone https://github.com/iwoork/data-avenue.git
```
2. Install: 
```
npm install
```
3. Run:
```
npm start
```


## Technology stack
### UI
[React Starter Kit](https://www.reactstarterkit.com) is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/), [GraphQL](http://graphql.org/) and
[React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). 

### Data

Each of the data resources are stored as **nodes** in a Neo4J database. 

Currently, the following are supported:
- Hive Table
- Report (e.g Omniture report)
- Dashboard (e.g Superset, PowerBI, Tableau)
- Experimentation (e.g Optimizely, Apptimize, etc)

## Inspiration
https://medium.com/airbnb-engineering/democratizing-data-at-airbnb-852d76c51770
