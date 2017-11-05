import React, { Component } from 'react';
import './App.css';
import {
  ActionBar,
  ActionBarRow,
  Hits,
  Layout,
  LayoutBody,
  LayoutResults,
  NoHits,
  ResetFilters,
  SearchBox,
  SearchkitProvider,
  SelectedFilters,
  SearchkitManager,
  TopBar, HitsStats
} from 'searchkit';
import 'searchkit/release/theme.css';

const searchkit = new SearchkitManager("http://localhost:9200/games", { basicAuth: 'elastic:changeme' });

function HitItem({ result: { _source }}) {
  return (
    <div>
      <h3>{_source.name}</h3>
      <span>Similar: {_source.similar.join(', ')}</span>
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox
              autofocus={true}
              searchOnChange={true}
              queryFields={['name']}
              prefixQueryFields={["name"]}
            />
          </TopBar>
          <LayoutBody>
            <LayoutResults>
              <ActionBar>

                <ActionBarRow>
                  <HitsStats/>
                </ActionBarRow>

                <ActionBarRow>
                  <SelectedFilters/>
                  <ResetFilters/>
                </ActionBarRow>

              </ActionBar>
              <Hits mod="sk-hits-grid" hitsPerPage={10} itemComponent={HitItem} />
              <NoHits/>
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default App;
