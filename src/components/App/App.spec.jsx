import React from 'react';
import { shallow } from 'enzyme';
import {
  ActionBar,
  ActionBarRow,
  Hits,
  HitsStats,
  LayoutBody,
  LayoutResults,
  NoHits,
  Pagination,
  SearchBox,
  TopBar,
} from 'searchkit';
import HitItem from '../HitItem/HitItemContainer';
import App from './App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should render a top bar', () => {
    expect(component).to.contain(
      <TopBar>
        <span style={{ fontSize: 28, margin: '0 1em', color: '#FFFFFF' }}>Game Sage</span>
        <SearchBox
          autofocus
          searchOnChange
          queryFields={['name']}
          prefixQueryFields={['name']}
        />
      </TopBar>,
    );
  });

  it('should render a body', () => {
    expect(component).to.contain(
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
      </LayoutBody>,
    );
  });
});
