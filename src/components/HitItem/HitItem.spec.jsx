/* eslint-disable no-underscore-dangle */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Card, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import HitItem from './HitItem';

describe('HitItem', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      expanded: true,
      onExpandChange: sinon.spy(),
      result: {
        _source: {
          name: 'Horizon: Zero Dawn',
          icon: 'https://url/horizon.jpg',
          similar: [
            {
              name: 'Fallout 4',
              icon: 'https://url/fallout4.jpg',
            },
            {
              name: 'Witcher 3',
              icon: 'https://url/witcher3.jpg',
            },
          ],
        },
      },
    };

    component = shallow(<HitItem {...props} />);
  });

  it('should render a Card', () => {
    const card = component.find(Card);

    expect(card).to.be.present();
    expect(card).to.have.prop('expanded', props.expanded);
    expect(card).to.have.prop('onExpandChange', props.onExpandChange);
    expect(card.props().style).to.deep.equal({
      width: 300,
      margin: '0.5em',
      padding: '0.5em',
    });
  });

  it('should render a CardHeader', () => {
    expect(component).to.contain(
      <CardHeader
        title={props.result._source.name}
        avatar={props.result._source.icon}
        actAsExpander
        showExpandableButton
      />,
    );
  });

  it('should render a Divider', () => {
    expect(component).to.contain(<Divider />);
  });

  it('should render a Subheader', () => {
    expect(component).to.contain(<Subheader style={{ padding: 0 }}>SIMILAR GAMES</Subheader>);
  });

  it('should render similar game one', () => {
    expect(component).to.contain(
      <div style={{ display: 'flex', margin: '0.5em 0' }}>
        <div className="gs-icon">
          <img src="https://url/fallout4.jpg" alt="Fallout 4" style={{ width: 24 }} />
        </div>
        <div>
          <span>Fallout 4</span>
        </div>
      </div>,
    );
  });

  it('should render similar game two', () => {
    expect(component).to.contain(
      <div style={{ display: 'flex', margin: '0.5em 0' }}>
        <div className="gs-icon">
          <img src="https://url/witcher3.jpg" alt="Witcher 3" style={{ width: 24 }} />
        </div>
        <div>
          <span>Witcher 3</span>
        </div>
      </div>,
    );
  });
});
