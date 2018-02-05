import React from 'react';
import Search from './Search';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{search{title,description,link,type,owner}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.search) throw new Error('Failed to load the search results.');
  return {
    title: 'Search Results',
    component: (
      <Layout>
        <Search search={data.search} />
      </Layout>
    ),
  };
}

export default action;
