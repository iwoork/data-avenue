import { GraphQLList as List } from 'graphql';
import SearchItemType from '../types/SearchItemType';

let items = [
  {
    title: 'Team A Orders Dashboard',
    link: 'http://',
    type: 'dashboard',
    description: 'A Dashboard to show all orders sold by Team A',
    owner: 'John Doe',
    dateInserted: 'January 6, 2018',
    dateUpdated: '3 days ago',
    stats: {
      view: 121,
      favourites: 14,
      pinned: 10
    }
  },
  {
    title: 'Mobile team\'s quarterly report on Orders',
    link: 'http://',
    type: 'report',
    description: 'A quarterly report for the C-level people in the company',
    owner: 'Daenerys Targaryen',
    dateInserted: 'January 6, 2018',
    dateUpdated: '2 weeks ago'
  },
  {
    title: 'core_data.dim_orders',
    link: 'http://',
    type: 'hive',
    description: 'The table containing orders by products in hive',
    owner: 'Bumble Bee',
    dateInserted: 'January 6, 2018',
    dateUpdated: '15 minutes ago'
  },
  {
    title: 'Increasing the font size of the website will grow orders across all products',
    link: 'http://',
    type: 'experimentation',
    description: 'If we increase the font size of the website, the orders will grow across all products',
    owner: 'Jobs Steven',
    dateInserted: 'January 6, 2018',
    dateUpdated: '2 minutes ago'
  },
  {
    title: 'Increase app downloads for IOS users',
    link: 'http://',
    type: 'campaign',
    description: 'An SEM marketing campaign that aims to increase the app downloads',
    owner: 'Jobs Steven',
    dateInserted: 'January 6, 2018',
    dateUpdated: '2 days ago'
  },

];

const search = {
  type: new List(SearchItemType),
  resolve() {
    return items;
  }
};

export default search;
