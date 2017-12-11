import React from 'react';
import {
  ActionBar,
  ActionBarRow,
  Hits,
  HitsStats,
  Layout,
  LayoutBody,
  LayoutResults,
  NoHits,
  Pagination,
  SearchBox,
  SearchkitProvider,
  TopBar,
} from 'searchkit';
import connection from '../../config/connection';
import HitItem from '../HitItem/HitItem';


export default function App() {
  return (
    <SearchkitProvider searchkit={connection}>
      <Layout>
        <TopBar>
          <span style={{ fontSize: 28, margin: '0 1em', color: '#FFFFFF' }}>Game Sage</span>
          <SearchBox
            autofocus
            searchOnChange
            queryFields={['name']}
            prefixQueryFields={['name']}
          />
        </TopBar>
        <LayoutBody>
          <LayoutResults>
            <ActionBar>
              <ActionBarRow>
                <HitsStats />
              </ActionBarRow>
            </ActionBar>
            <Hits mod="sk-hits-grid" hitsPerPage={30} itemComponent={HitItem} />
            <NoHits />
            <Pagination showNumbers />
          </LayoutResults>
        </LayoutBody>
      </Layout>
    </SearchkitProvider>
  );
}
