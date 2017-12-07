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
import connection from '../connection';
import HitItem from './HitItemContainer';
import Similar from './SimilarContainer';


export default function App() {
  return (
    <SearchkitProvider searchkit={connection}>
      <Layout>
        <TopBar>
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
            <Hits mod="sk-hits-grid" hitsPerPage={10} itemComponent={HitItem} />
            <NoHits />
            <Pagination showNumbers />
          </LayoutResults>
          <LayoutResults>
            <Similar />
          </LayoutResults>
        </LayoutBody>
        {/*<LayoutBody>*/}
        {/*</LayoutBody>*/}
      </Layout>
    </SearchkitProvider>
  );
}
